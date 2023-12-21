import { useState, useEffect } from "react";
import Button from "../../../components/button/Button";
import StarRating from "../../starRating";
import axios from "axios";
import Swal from "sweetalert2";

function RateRestaurant({ closeModal, restaurantId, commentIdToEdit, existingComment }) {
	const [rating, setRating] = useState(1);
	const [comment, setComment] = useState(existingComment || "");
	const [isEditing, setIsEditing] = useState(!!commentIdToEdit);

	const bearer_token = localStorage.getItem("token");

	const handleRatingChange = newRating => {
		setRating(newRating);
	};

	const handleCommentChange = event => {
		setComment(event.target.value);
	};

	const handleSubmit = async () => {
		try {
			const data = {
				restaurantId,
				rating,
				comment,
			};

			const response = await axios.post(
				"https://yumi-verse.onrender.com/api/v1/comment/create",
				data,
				{
					headers: {
						Authorization: `Bearer ${bearer_token}`,
					},
				}
			);

			Swal.fire("Comentario enviado", "El comentario ha sido enviado correctamente.", "success");

			closeModal();
		} catch (error) {
			Swal.fire("¡Ups! ", "Error al enviar el comentario", "error");
		}
	};

	const handleEdit = async () => {
		try {
			const data = {
				comment,
			};
			const response = await axios.patch(
				`https://yumi-verse.onrender.com/api/v1/comment/${commentIdToEdit}`,
				data,
				{
					headers: {
						Authorization: `Bearer ${bearer_token}`,
					},
				}
			);

			Swal.fire(
				"Comentario actualizado",
				"El comentario ha sido actualizado con éxito.",
				"success"
			);

			closeModal();
		} catch (error) {
			Swal.fire("¡Ups! ", "Error al editar el comentario", "error");
		}
	};

	useEffect(() => {
		if (commentIdToEdit) {
			setComment(existingComment);
			setIsEditing(true);
		}
	}, [commentIdToEdit, existingComment]);

	return (
		<div className="flex flex-col gap-4">
			<p className="text-texts">Asigna una puntuación</p>
			<StarRating handleRatingChange={handleRatingChange} />
			<div className="text-texts flex justify-between items-center">
				<p className="text-base/6 mt-1">Redacta una opinión</p>
				<p className="text-xs leading-[18px] italic">(500 caracteres máximo)</p>
			</div>
			<textarea
				value={comment}
				onChange={handleCommentChange}
				className="p-2 border border-principal h-32 rounded-lg bg-secundario outline-principal resize-none"
			></textarea>
			<div className="m-auto">
				<Button
					type="submit"
					onClick={isEditing ? handleEdit : handleSubmit}
					text={isEditing ? "Guardar cambios" : "Publicar calificación"}
					yellow
					rounded
				/>
			</div>
		</div>
	);
}

export default RateRestaurant;
