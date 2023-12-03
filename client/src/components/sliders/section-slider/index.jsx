import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cardToRender from "../../../utils/cardToRender";

export default function SectionSlider({ title, cardType = false, data }) {
	return (
		<section className="h-auto flex justify-center flex-col gap-4 px-4 border">
			{title && <h2 className="font-bold">{title}</h2>}
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={16}
				loop={true}
				freemodesticky={"true"}
				className="mySwiper w-full"
			>
				{data.map(item => (
					<SwiperSlide key={item.id} className="w-auto">
						{cardToRender(item, cardType)}
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
