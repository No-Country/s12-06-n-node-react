import { Link } from "react-router-dom";

/**
 * Renders a link with an image and text inside using react-router-dom.
 * @param {string} className - The CSS class name for the component.
 * @param {ReactNode} children - The child elements to be rendered inside the link.
 * @param {string} href - The URL to navigate to when the link is clicked.
 * @param {string} imgSrc - The URL of the image to be rendered inside the link.
 * @return {ReactElement} The rendered link component.
 */
const CategoryCard = ({ children, href, className, imgSrc }) => {
	return (
		<div className="min-w-fit h-16 mx-4">
			<Link
				to={href}
				className={`text-decoration-none ${className} flex flex-col justify-center content-center`}
			>
				<img src={imgSrc} alt="" className="w-12 rounded-full" />
				<span className="text-base font-bold">{children}</span>
			</Link>
		</div>
	);
};

CategoryCard.propTypes = {};

export default CategoryCard;
