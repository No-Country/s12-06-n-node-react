import menuIcon from "../../../assets/icons/menu-points.svg";
import starIcon from "../../../assets/icons/star.svg";

export default function Commentary({ name, image, commentary }) {
	return (
		<div className="flex flex-row gap-4">
			<img src={image} alt={name} className="rounded-full h-10 w-10 object-cover object-center" />
			<div className="flex flex-col gap-[5px]">
				<p className="text-texts text-sm font-medium">{name}</p>
				<div className="flex gap-[5px]">
					<img src={starIcon} alt="star icon" />
					<img src={starIcon} alt="star icon" />
					<img src={starIcon} alt="star icon" />
					<img src={starIcon} alt="star icon" />
					<img src={starIcon} alt="star icon" />
				</div>
				<p className="text-texts text-sm mt-2">{commentary}</p>
			</div>
			<button className="rounded-full bg-secundario shadow-3xl flex justify-center items-center w-6 h-6">
				<img src={menuIcon} alt="menu icon" />
			</button>
		</div>
	);
}
