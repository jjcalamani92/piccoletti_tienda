import type { NextPage } from "next";
import { Layout, Quickviews } from "../components";
import {
	Category,
	Cookies,
	Detail,
	FAQs,
	Features,
	Home,
	Product,
	Promo
} from "../layouts";

const Index: NextPage = () => {
	return (
		<Layout
			title={"Choco - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			{/* <Home /> */}
			{/* <Detail /> */}
			{/* <Product /> */}
			{/* <Category /> */}
			{/* <Quickviews /> */}
			{/* <Features /> */}
			{/* <Promo /> */}
			{/* <FAQs /> */}
			{/* <Cookies /> */}
		</Layout>
	);
};

export default Index;
