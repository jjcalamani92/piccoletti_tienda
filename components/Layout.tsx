import Head from "next/head";
import { FC } from "react";
import { Banner01 } from "./Banner";
import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { Header01, Header02, Header03, Header04 } from "./Header";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: any;
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
			</Head>
			<Banner01 />
			<Header01 />
			{/* <Header02 /> */}
			{/* <Header03 /> */}
			{/* <Header04 /> */}
			<Cart />
			<main>{children}</main>
			<Footer />
		</>
	);
};
