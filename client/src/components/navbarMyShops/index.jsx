/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import MapIcon from "../../assets/icons/map.svg";
import ShareIcon from "../../assets/icons/share.svg";

const NavbarMyShops = () => {
	function handleGoBack() {
		navigate(-1);
	}

	const navigate = useNavigate();

	return (
		<nav className="w-full h-10 flex justify-between items-center opacity-90 bg-secundario top-0 left-0 p-4 sticky">
			<button onClick={handleGoBack}>
				<img src={ArrowLeftIcon} alt="Left arrow icon" className="w-6 h-6" />
			</button>
			<span className="text-texts font-medium pr-3">Mis Tiendas</span>
			<div className="flex gap-3">
				<span></span>
			</div>
		</nav>
	);
};

export default NavbarMyShops;
