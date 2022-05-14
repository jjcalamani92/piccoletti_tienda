export const Home = () => {
	return (
		<section className="relative bg-white">
			<img
				className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
				src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
				alt="Couple on a bed with a dog"
			/>

			<div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						Let us find your
						<strong className="font-extrabold text-darkPrimaryColor sm:block">
							Forever Home.
						</strong>
					</h1>

					<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="flex flex-wrap gap-4 mt-8 text-center">
						<a
							className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-primaryColor sm:w-auto active:bg-primaryColor hover:bg-darkPrimaryColor focus:outline-none focus:ring"
							href="/get-started"
						>
							Get Started
						</a>

						<a
							className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-primaryColor sm:w-auto hover:text-darkPrimaryColor active:text-primaryColor focus:outline-none focus:ring"
							href="/about"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
		// <div classNameName="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		// 	<div classNameName="grid gap-5 row-gap-10 lg:grid-cols-2">
		// 		<div classNameName="flex flex-col justify-center">
		// 			<div classNameName="max-w-xl mb-6">
		// 				<h2 classNameName="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
		// 					The quick, brown fox
		// 					<br classNameName="hidden md:block" />
		// 					jumps over{" "}
		// 					<span classNameName="px-1">
		// 						<div classNameName="inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
		// 						<span classNameName="inline-block text-deep-purple-accent-400">
		// 							a lazy dog
		// 						</span>
		// 					</span>
		// 				</h2>
		// 				<p classNameName="text-base text-gray-700 md:text-lg">
		// 					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
		// 					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
		// 					quae. explicabo.
		// 				</p>
		// 			</div>
		// 			<p classNameName="mb-4 text-sm font-bold tracking-widest uppercase">
		// 				Features
		// 			</p>
		// 			<div classNameName="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
		// 				<ul classNameName="space-y-3">
		// 					<li classNameName="flex">
		// 						<span classNameName="mr-1">
		// 							<svg
		// 								classNameName="w-5 h-5 mt-px text-deep-purple-accent-400"
		// 								stroke="currentColor"
		// 								viewBox="0 0 52 52"
		// 							>
		// 								<polygon
		// 									strokeWidth="4"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									fill="none"
		// 									points="29 13 14 29 25 29 23 39 38 23 27 23"
		// 								/>
		// 							</svg>
		// 						</span>
		// 						A slice of heaven
		// 					</li>
		// 					<li classNameName="flex">
		// 						<span classNameName="mr-1">
		// 							<svg
		// 								classNameName="w-5 h-5 mt-px text-deep-purple-accent-400"
		// 								stroke="currentColor"
		// 								viewBox="0 0 52 52"
		// 							>
		// 								<polygon
		// 									strokeWidth="4"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									fill="none"
		// 									points="29 13 14 29 25 29 23 39 38 23 27 23"
		// 								/>
		// 							</svg>
		// 						</span>
		// 						Disrupt inspire
		// 					</li>
		// 					<li classNameName="flex">
		// 						<span classNameName="mr-1">
		// 							<svg
		// 								classNameName="w-5 h-5 mt-px text-deep-purple-accent-400"
		// 								stroke="currentColor"
		// 								viewBox="0 0 52 52"
		// 							>
		// 								<polygon
		// 									strokeWidth="4"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									fill="none"
		// 									points="29 13 14 29 25 29 23 39 38 23 27 23"
		// 								/>
		// 							</svg>
		// 						</span>
		// 						Preliminary thinking
		// 					</li>
		// 				</ul>
		// 				<ul classNameName="space-y-3">
		// 					<li classNameName="flex">
		// 						<span classNameName="mr-1">
		// 							<svg
		// 								classNameName="w-5 h-5 mt-px text-deep-purple-accent-400"
		// 								stroke="currentColor"
		// 								viewBox="0 0 52 52"
		// 							>
		// 								<polygon
		// 									strokeWidth="4"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									fill="none"
		// 									points="29 13 14 29 25 29 23 39 38 23 27 23"
		// 								/>
		// 							</svg>
		// 						</span>
		// 						Flipboard curmudgeon
		// 					</li>
		// 					<li classNameName="flex">
		// 						<span classNameName="mr-1">
		// 							<svg
		// 								classNameName="w-5 h-5 mt-px text-deep-purple-accent-400"
		// 								stroke="currentColor"
		// 								viewBox="0 0 52 52"
		// 							>
		// 								<polygon
		// 									strokeWidth="4"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									fill="none"
		// 									points="29 13 14 29 25 29 23 39 38 23 27 23"
		// 								/>
		// 							</svg>
		// 						</span>
		// 						Storage shed
		// 					</li>
		// 					<li classNameName="flex">
		// 						<span classNameName="mr-1">
		// 							<svg
		// 								classNameName="w-5 h-5 mt-px text-deep-purple-accent-400"
		// 								stroke="currentColor"
		// 								viewBox="0 0 52 52"
		// 							>
		// 								<polygon
		// 									strokeWidth="4"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									fill="none"
		// 									points="29 13 14 29 25 29 23 39 38 23 27 23"
		// 								/>
		// 							</svg>
		// 						</span>
		// 						Satoshi Nakamoto
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<img
		// 				classNameName="object-cover w-full h-56 rounded shadow-lg sm:h-96"
		// 				src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
		// 				alt=""
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
	);
};
