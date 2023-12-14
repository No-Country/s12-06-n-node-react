import { useState } from "react";
import StarIcon from "../../icons/StarIcon";

function StarRating({ handleRatingChange }) {
	const [rating, setRating] = useState(1);

	const handleRating = newRating => {
		setRating(newRating);
		handleRatingChange(newRating);
	};

	return (
		<div className="flex gap-1">
			{[0, 1, 2, 3, 4].map((star, index) => (
				<label key={index}>
					<input
						type="checkbox"
						value={star + 1}
						checked={rating > star}
						onChange={() => handleRating(star + 1)}
						className="hidden"
					/>
					<StarIcon
						className={
							rating > star ? "fill-principal stroke-principal" : "fill-none stroke-disabled"
						}
					/>
				</label>
			))}
		</div>
	);
}

export default StarRating;
