/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import NavArrowLeftIcon from "../../icons/NavArrowLeftIcon";

const NavbarPages = ({ pageTitle }) => {
	function handleGoBack() {
		navigate(-1);
	}

	const navigate = useNavigate();

	return (
		<nav className="w-full h-10 flex justify-between items-center opacity-90 bg-secundario top-0 left-0 p-4 sticky">
			<button onClick={handleGoBack}>
				<NavArrowLeftIcon className="w-6 h-6 stroke-texts" />
			</button>
			<span className="text-texts text-center font-medium pr-3">{pageTitle}</span>
			<div className="flex gap-3">
				<span></span>
			</div>
		</nav>
	);
};

export default NavbarPages;
