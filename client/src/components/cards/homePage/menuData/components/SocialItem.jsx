import { Link } from "react-router-dom";

export default function SocialItem({ icon, nameSocialNetwort, bgRed }) {
	return (
		<Link to="/">
			<img
				src={icon}
				alt={nameSocialNetwort}
				className={`py-1 px-2 ${bgRed ? "bg-[#F21F1B]" : "bg-secundario"} shadow-3xl rounded-lg`}
			/>
		</Link>
	);
}
