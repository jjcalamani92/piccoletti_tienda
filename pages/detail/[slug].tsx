import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useProduct } from "../../hooks";
import { IProduct } from "../../interfaces";
import { connectToDatabase } from "../../mongodb";
import { Layout } from "../../components";
import { DetailLayout } from "../../layouts";

interface Props {
	product: IProduct;
}

const DetailPage: NextPage<Props> = ({ product }) => {
	const { products, isLoading } = useProduct("/wearproducts?category=men");
	return (
		<Layout
			title={`${product.title}`}
			pageDescription={`${product.description}`}
			imageFullUrl={`${product.image[1]}`}
		>
			<DetailLayout
				product={product}
				products={products}
				isLoading={isLoading}
				subCategory="chamarras"
			/>
		</Layout>
	);
};

interface ProductSlug {
	slug: string;
}

const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
	const { db } = await connectToDatabase();
	const slugs = await db.collection("wearproducts").find().toArray();

	return slugs;
};

const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
	const { db } = await connectToDatabase();
	const product = await db.collection("wearproducts").findOne({ slug });
	if (!product) {
		return null;
	}
	return JSON.parse(JSON.stringify(product));
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const productSlugs = await getAllProductSlugs();

	return {
		paths: productSlugs.map(({ slug }) => ({
			params: {
				slug
			}
		})),
		fallback: "blocking"
	};
};

// // You should use getStaticProps when:
// //- The data required to render the page is available at build time ahead of a user’s request.
// //- The data comes from a headless CMS.
// //- The data can be publicly cached (not user-specific).
// //- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as { slug: string };
	const product = await getProductBySlug(slug);

	if (!product) {
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		};
	}

	return {
		props: {
			product
		},
		revalidate: 60 * 60 * 24
	};
};

export default DetailPage;
