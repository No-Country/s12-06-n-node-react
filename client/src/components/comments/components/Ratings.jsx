import StarIcon from "../../../icons/StarIcon";

export default function Ratings({ scopes }) {
	return (
		<div className="flex gap-[5px]">
			{[0, 1, 2, 3, 4].map((star, index) => (
				<StarIcon
					className={
						scopes > star ? "fill-principal stroke-principal" : "fill-none stroke-disabled"
					}
					key={index}
				/>
			))}
		</div>
	);
}
