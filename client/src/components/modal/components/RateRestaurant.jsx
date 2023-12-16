import { useState } from "react";
import Button from "../../../components/button/Button";
import StarRating from "../../starRating";

function RateRestaurant({ closeModal }) {
	const [rating, setRating] = useState(1);
	const [opinion, setOpinion] = useState("");

	const handleRatingChange = newRating => {
		setRating(newRating);
	};

	const handleOpinionChange = event => {
		setOpinion(event.target.value);
	};

	const handleSubmit = () => {
		console.log("Puntuación:", rating);
		console.log("Opinión:", opinion);

		closeModal();
	};

	return (
		<div className="flex flex-col gap-4">
			<p className="text-texts">Asigna una puntuación</p>
			<StarRating handleRatingChange={handleRatingChange} />
			<div className="text-texts flex justify-between items-center">
				<p className="text-base/6 mt-1">Redacta una opinión</p>
				<p className="text-xs leading-[18px] italic">(500 caracteres máximo)</p>
			</div>
			<textarea
				value={opinion}
				onChange={handleOpinionChange}
				className="p-2 border border-principal h-32 rounded-lg bg-secundario outline-principal resize-none"
			></textarea>
			<div className="m-auto">
				<Button type="submit" onClick={handleSubmit} text="Publicar calificación" yellow rounded />
			</div>
		</div>
	);
}

export default RateRestaurant;
