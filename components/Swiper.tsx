import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";

interface Props {
	image: string[];
}

export const SwiperComponent: FC<Props> = ({ image }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true
				}}
				navigation={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{image.map((images, i) => (
					<SwiperSlide className="slide" key={i}>
						<Image
							src={`${images}`}
							width={500}
							height={600}
							objectFit="cover"
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
