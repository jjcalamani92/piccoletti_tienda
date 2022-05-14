import { FC } from "react";
import { IProduct } from "../interfaces";
import NextLink from "next/link";

interface Props {
	products: IProduct[];
	isLoading: boolean;
	title: string;
}

export const ProductLayout: FC<Props> = ({ products, isLoading, title }) => {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<NextLink
							href={`/detail/${product.slug}`}
							passHref
							prefetch={false}
							key={product._id}
						>
							<div className="group relative">
								<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
									<img
										src={product.image[0]}
										alt={product.title}
										className="w-full h-full object-center object-cover lg:w-full lg:h-full"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href={product.slug}>
												<span aria-hidden="true" className="absolute inset-0" />
												{product.title}
											</a>
										</h3>
										<p className="mt-1 text-sm text-gray-500">Color: Negro</p>
									</div>
									<p className="text-sm font-medium text-gray-900">
										{product.price}
									</p>
								</div>
							</div>
						</NextLink>
					))}
				</div>
			</div>
		</div>
	);
};
