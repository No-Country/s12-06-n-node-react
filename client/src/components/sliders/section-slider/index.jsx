import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cardToRender from "../../../utils/cardToRender";

function Slider({ data, children, title }) {
	if (!data) {
		return <p className="text-center text-xl font-bold">No data to show</p>;
	}
	return (
		<section className="h-auto flex justify-center flex-col gap-4 px-4">
			{title && <h2 className="font-bold">{title}</h2>}
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={16}
				loop={true}
				freemodesticky={"true"}
				className="mySwiper w-full overflow-visible"
			>
				{data.map(item => (
					<SwiperSlide key={item.id} className="w-auto">
						{children(item)}
					</SwiperSlide>
				))}
			</Swiper>
		</section>

	);

}

const SliderItem = ({ children, key, className = 'w-auto' }) => {
	return (
		<SwiperSlide key={key} className={className}>
			{children}
		</SwiperSlide>
	)
}

const Title = ({ children }) => {
	return (
		<h2 className="font-bold">{children}</h2>
	)
}

Slider.Title = Title;
Slider.Item = SliderItem;

export default Slider;