import ButtonOpenOrClose from "../../button/ButtonOpenOrClose";
import classicIcon from "../../../assets/icons/classic.svg";
import grillIcon from "../../../assets/icons/grill.svg";
import hamburgerIcon from "../../../assets/icons/hamburger.svg";
import pizzaIcon from "../../../assets/icons/pizza.svg";
import starIcon from "../../../assets/icons/star.svg";

const categoryIcons = {
	classic: classicIcon,
	fastFood: hamburgerIcon,
	grill: grillIcon,
	pizza: pizzaIcon,
};

export default function Inferior({
	nameRestaurant,
	openRestaurant,
	categories,
	numberOfScores,
	scores,
}) {
	return (
		<div className="bg-texts/90 rounded-b-lg py-2 px-1 z-20 absolute w-full inset-x-0 bottom-0">
			<div className="flex flex-row items-center justify-between mb-2">
				<p className="font-medium text-sm text-secundario capitalize">{nameRestaurant}</p>
				<div className="flex flex-row items-center justify-between gap-1">
					{categories.map((category, index) => (
						<img key={index} src={categoryIcons[category]} alt={category} className="h-4 w-4" />
					))}
				</div>
			</div>
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-between gap-1">
					<img src={starIcon} alt="Star Icon" />
					<p className="font-medium text-xs text-secundario">
						{scores} <span className="text-[10px]">({numberOfScores})</span>
					</p>
				</div>
				<ButtonOpenOrClose disabled openRestaurant={openRestaurant} />
			</div>
		</div>
	);
}
