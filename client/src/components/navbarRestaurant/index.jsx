import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import MapIcon from "../../assets/icons/map.svg";
import ShareIcon from "../../assets/icons/share.svg";
import { useRestaurantStore } from "../../stores";
import { useNavigate } from "react-router-dom";

export default function NavbarRestaurant() {
	function handleGoBack() {
		navigate(-1);
	}

	const navigate = useNavigate();

	const restaurantName = useRestaurantStore(state => state.restaurantName);

	return (
		<nav className="w-full h-10 flex justify-between items-center opacity-90 bg-secundario top-0 left-0 p-4 sticky">
			<button onClick={handleGoBack}>
				<img src={ArrowLeftIcon} alt="Left arrow icon" className="w-6 h-6" />
			</button>
			<span className="text-texts font-medium">{restaurantName}</span>
			<div className="flex gap-3">
				<img src={MapIcon} alt="Map icon" className="w-6 h-6" />
				<img src={ShareIcon} alt="Share icon" className="w-6 h-6" />
			</div>
		</nav>
	);
}
