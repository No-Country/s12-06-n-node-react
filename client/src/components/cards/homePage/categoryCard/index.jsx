import { Link } from "react-router-dom";

import classicIcon from "../../../../assets/icons/classic.svg";
import grillIcon from "../../../../assets/icons/grill.svg";
import hamburgerIcon from "../../../../assets/icons/hamburger.svg";
import pizzaIcon from "../../../../assets/icons/pizza.svg";

const categoryIcons = {
	classic: classicIcon,
	fastFood: hamburgerIcon,
	grill: grillIcon,
	pizza: pizzaIcon,
};

const CategoryCard = ({ title, href, Icon, children }) => {
	return (
		<Link to={href} className="w-auto min-w-[48px] h-16 flex flex-col justify-between items-center">
			<div className="w-12 h-12 bg-texts rounded-[50%] flex justify-center items-center">
				{/* {Icon && <img
					className="w-6 h-6 text-principal m-0 p-0"
					src={Icon}
					alt={`${title} image`}
				/>} */}
				{/* {children} */}

				{Icon && <Icon />}
			</div>
			<span className="w-full text-xs text-texts font-medium text-center leading-none">
				{title}
			</span>
		</Link>
	);
};

export default CategoryCard;
