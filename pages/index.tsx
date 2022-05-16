import type { NextPage } from "next";
import {
	Form01,
	Layout,
	Pagination01,
	Quickviews,
	Search01,
	SwiperComponent
} from "../components";
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
	PrivacyAndTermsLayout,
	TechnicalSpecifications
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
			{/* <PrivacyAndTermsLayout /> */}
			{/* <Detail /> */}
			{/* <Product /> */}
			{/* <Category /> */}
			{/* <Quickviews /> */}
			{/* <Features /> */}
			{/* <Promo /> */}
			{/* <FAQs /> */}
			{/* <Form01 /> */}
			{/* <Pagination01 />
			<Search01 /> */}
			<TechnicalSpecifications />
		</Layout>
	);
};

export default Index;
