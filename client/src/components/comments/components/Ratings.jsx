import bankIcon from "../../../assets/icons/bank.svg";
import starIcon from "../../../assets/icons/star.svg";

export default function Ratings({ scopes }) {
	return (
		<div className="flex gap-[5px]">
			{/* Pendiente por modificar los iconos */}
			{[0, 1, 2, 3, 4].map(star => (
				<img src={scopes > star ? starIcon : bankIcon} alt="star icon" />
			))}
		</div>
	);
}
