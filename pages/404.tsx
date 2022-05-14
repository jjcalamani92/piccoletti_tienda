import { Layout } from "../components";
import { ErrorLayout } from "../layouts";

const Page404 = () => {
	return (
		<Layout
			title="Page Not Found"
			pageDescription="No hay nada que mostrar aqui"
		>
			<ErrorLayout />
		</Layout>
	);
};

export default Page404;
