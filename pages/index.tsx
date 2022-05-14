import type { NextPage } from "next";
import { Layout, Quickviews, SwiperComponent } from "../components";
import {
	BlogsLayout,
	ContactLayout,
	Cookies,
	ErrorLayout,
	FAQs,
	Features,
	Home,
	PricingLayout,
	Promo,
	TeamLayout,
	TestimonialLayout,
	PrivacyAndTermsLayout
} from "../layouts";

const Index: NextPage = () => {
	return (
		<Layout
			title={"Choco - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			{/* <Home />
			<ContactLayout /> */}
			{/* <TestimonialLayout /> */}
			{/* <TeamLayout /> */}
			{/* <PricingLayout /> */}
			{/* <ErrorLayout /> */}
			<PrivacyAndTermsLayout />
			{/* <Detail /> */}
			{/* <Product /> */}
			{/* <Category /> */}
			{/* <Quickviews /> */}
			{/* <Features /> */}
			{/* <Promo /> */}
			{/* <FAQs /> */}
		</Layout>
	);
};

export default Index;
