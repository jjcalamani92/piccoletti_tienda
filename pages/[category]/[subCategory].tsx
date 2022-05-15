import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Heading, Layout } from "../../components";
import { ProductLayout } from "../../layouts";
import useSWR from "swr";
import fetch from "../../libs/fetch";

const query = {
	query: "query { getWearproducts { title image price slug } }"
};

const getData = async (...args: any[]) => {
	return await fetch(query);
};

interface Props {
	subcategory: string;
}

const ProductPage: NextPage<Props> = ({ subcategory }) => {
	const { data, error } = useSWR(query, getData);
	if (error) {
		return <div>Error...</div>;
	}
	if (!data) {
		return <div>Loading...</div>;
	}
	console.log(data.getWearproducts);

	// const router = useRouter();
	// const { category } = router.query;

	// const { products, isLoading } = useProduct(
	// 	`/wearproducts?category=${category}`
	// );
	// const Products = getProductBySubCategory(products, subcategory);
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<Heading />
			<ProductLayout products={data.getWearproducts} title={subcategory} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [
		{ params: { category: "men", subCategory: "chamarras" } }
		// { params: { category: "linea-automotiva", subcategory: "acrilico" } },
		// { params: { category: "linea-automotiva", subcategory: "gloss" } },
		// {
		//   params: {
		//     category: "linea-automotiva",
		//     subcategory: "protector-de-chasis"
		//   }
		// },
		// { params: { category: "linea-automotiva", subcategory: "masilla" } },
		// { params: { category: "linea-automotiva", subcategory: "primer" } },
		// { params: { category: "linea-automotiva", subcategory: "mateante" } },
		// { params: { category: "linea-automotiva", subcategory: "kit" } }
	];
	return {
		paths,
		fallback: false // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { subCategory = "" } = params as { subCategory: string };
	return {
		props: {
			subCategory
		},
		revalidate: 60 * 60 * 24
	};
};

export default ProductPage;
