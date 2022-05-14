import { NextPage } from "next";
import { Layout } from "../../components";
import {
	BrandsLayout,
	CartLayout,
	CheckoutsLayout,
	WishlistsLayout
} from "../../layouts";
interface Props {
	category: string;
}

const CartPage: NextPage<Props> = ({ category }) => {
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<CartLayout />
			{/* <CheckoutsLayout /> */}
			{/* <BrandsLayout /> */}
			{/* <WishlistsLayout /> */}
		</Layout>
	);
};

export default CartPage;
