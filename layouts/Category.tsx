import { category } from "../data.json";

export const CategoryLayout = () => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-6 sm:py-6 lg:py-6 lg:max-w-none">
					<h2 className="text-2xl font-extrabold text-gray-900">Categorias</h2>

					<div className="mt-6 space-y-12 lg:gap-y-2  lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
						{category.map((data, i) => (
							<div key={i} className="group relative">
								<div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
									<img
										src={data.image[0]}
										alt={data.imageAlt}
										className="w-full h-full object-center object-cover"
									/>
								</div>
								<h3 className="mt-6 text-sm text-gray-500">
									<a href={data.href}>
										<span className="absolute inset-0" />
										{data.title}
									</a>
								</h3>
								<p className="text-base font-semibold text-gray-900">
									{data.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
