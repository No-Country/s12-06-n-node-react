import { useRestaurantStore } from "../../stores";

const MenuItem = ({ title, price, description, img, handlerCardClick }) => {
	// Add a placeholder image for when the image is not available.
	// receive title, price, description, img
	// return a div with the following structure:
	const showBottomSheet = useRestaurantStore(state => state.showBottomSheet);
	const setShowBottomSheet = useRestaurantStore(state => state.setShowBottomSheet);

	return (
		<div
			onClick={handlerCardClick}
			className="w-full max-w-[343px] h-36 flex-col justify-start items-start gap-3 inline-flex flex-wrap"
		>
			<div className="h-32 justify-center items-start gap-2 inline-flex">
				<img
					className="w-[105px] self-stretch rounded-lg object-center object-cover"
					src={img == null ? `https://via.placeholder.com/105x128` : img}
				/>
				<div className="w-[230px] self-stretch  flex-col justify-start items-start gap-1 inline-flex">
					<div className="justify-center items-center  inline-flex">
						<div className="text-center text-stone-950 text-xs font-bold font-['DM Sans'] leading-[18px]">
							<span>{title}</span>
						</div>
					</div>
					<div className="justify-center items-center inline-flex">
						<div className="text-center text-stone-950 text-[14px] font-bold font-['DM Sans'] leading-[20px]">
							<span>{price}</span>
						</div>
					</div>
					<div className="self-stretch justify-center items-center gap-2.5 inline-flex">
						<div className="grow shrink basis-0 text-stone-950 text-xs font-normal font-['DM Sans'] leading-[18px]">
							<span>{description}</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<svg
					width="343"
					height="1"
					viewBox="0 0 343 1"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line y1="0.5" x2="343" y2="0.5" stroke="#F2C81B" />
				</svg>
			</div>
		</div>
	);
};

export default MenuItem;
