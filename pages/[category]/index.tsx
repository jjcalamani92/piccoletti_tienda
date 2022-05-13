import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useProduct } from "../../hooks";
import { Layout } from "../../components";
import { CategoryLayout } from "../../layouts";
interface Props {
	category: string;
}

const CategoryPage: NextPage<Props> = ({ category }) => {
	const { products, isLoading } = useProduct(
		`/wearproducts?category=${category}`
	);
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<CategoryLayout />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [
		{ params: { category: "men" } },
		{ params: { category: "women" } },
		{ params: { category: "kid" } }
	];
	return {
		paths,
		fallback: false // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { category = "" } = params as { category: string };

	return {
		props: {
			category
		},
		revalidate: 60 * 60 * 24
	};
};

export default CategoryPage;
