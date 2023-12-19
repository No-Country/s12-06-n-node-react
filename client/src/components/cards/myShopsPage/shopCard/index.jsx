import Inferior from "./components/Inferior";
// import Location from "./components/Location";
import { Link } from "react-router-dom";
import DeleteIcon from "../../../../assets/icons/DeleteIcon.jsx";
import DotMenuIcon from "../../../../assets/icons/DotMenuIcon.jsx";
import EditIcon from "../../../../assets/icons/EditIcon.jsx";
import Dropdown from "../../../dropdown";
import DropdownItem from "../../../dropdown/components/DropdownItem";

export default function ShopCard({
	id,
	location,
	nameRestaurant,
	imageRestaurant,
	openRestaurant,
	categories,
	numberOfScores,
	scores,
}) {
	// console.log({
	// 	location,
	// 	nameRestaurant,
	// 	imageRestaurant,
	// 	openRestaurant,
	// 	categories,
	// 	numberOfScores,
	// 	scores
	// });

	// const addressFormat = `${String(location).substring(0, 25)}...`;

	return (
		<div className="relative">
			<Link to={`/restaurant/${id}`} className="w-[343px] flex flex-col justify-between gap-4">
				<div className="relative h-[158px] drop-shadow-md">
					<img
						src={imageRestaurant}
						alt={nameRestaurant}
						className="rounded-lg object-cover object-center w-full h-full"
					/>
					<Inferior
						nameRestaurant={nameRestaurant}
						openRestaurant={openRestaurant}
						categories={categories || []}
						numberOfScores={numberOfScores}
						scores={scores}
					/>
				</div>
			</Link>

			<div className="absolute top-[8px] right-[12px]">
				<Dropdown white circularButton icon={<DotMenuIcon />}>
					<DropdownItem title="Eliminar" icon={<DeleteIcon />} />
					<DropdownItem title="Editar" icon={<EditIcon />} />
				</Dropdown>
			</div>
		</div>
	);
}
