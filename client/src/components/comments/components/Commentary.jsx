import Dropdown from "../../dropdown";
import Ratings from "./Ratings";
import DropdownItem from "../../dropdown/components/DropdownItem";
import DeleteIcon from "../../../icons/DeleteIcon";
import EditIcon from "../../../icons/EditIcon";
import DotMenuIcon from "../../../icons/DotMenuIcon";
import { formatCreatedAt } from "../../../helpers/formatCreatedAt";
import user from "../../../assets/images/user.webp";
import Swal from "sweetalert2";
import axios from "axios";
import Modal from "../../modal";
import RateRestaurant from "../../modal/components/RateRestaurant";
import { useState } from "react";

export default function Commentary({ name, commentary, createdAt, scopes, commentId }) {
	const timeAgo = formatCreatedAt(createdAt);

	const [isEditing, setIsEditing] = useState(false);

	const openEditModal = () => {
		setIsEditing(true);
	};

	const closeEditModal = () => {
		setIsEditing(false);
	};

	const confirmDeleteComment = async () => {
		Swal.fire({
			title: "¿Deseas eliminar este comentario?",
			text: "Esta acción no se puede deshacer",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, Eliminar",
			cancelButtonText: "Cancelar",
		}).then(async result => {
			if (result.isConfirmed) {
				try {
					const token = localStorage.getItem("token");
					const response = await axios.delete(
						`https://yumi-verse.onrender.com/api/v1/comment/${commentId}`,
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);

					if (response.status === 200) {
						Swal.fire("Eliminado!", "El comentario ha sido eliminado", "success");
					} else {
						Swal.fire("Error", "No se pudo eliminar el comentario", "error");
					}
				} catch (error) {
					Swal.fire("¡Ups! ", "Estas haciendo algo mal.", "error");
				}
			}
		});
	};

	return (
		<div className="flex flex-row gap-4 w-[343px] desktop:w-full">
			<img src={user} alt={name} className="rounded-full h-10 w-10 object-cover object-center" />
			<div className="w-full">
				<div className="flex flex-row items-center justify-between gap-auto">
					<p className="text-texts text-sm font-medium">{name}</p>
					<div className="flex flex-row items-center justify-end gap-2">
						<p className="text-disabled text-xs ">{timeAgo}</p>
						<Dropdown white icon={<DotMenuIcon />} circularButton>
							<DropdownItem onClick={confirmDeleteComment} title="Eliminar" icon={<DeleteIcon />} />
							<DropdownItem onClick={openEditModal} title="Editar" icon={<EditIcon />} />
						</Dropdown>
					</div>
				</div>
				<Ratings scopes={scopes} />
				<p className="text-texts text-sm mt-2">{commentary}</p>
			</div>
			{isEditing && (
				<Modal isOpen={isEditing} onClose={closeEditModal} title="Editar Comentario">
					<RateRestaurant
						closeModal={closeEditModal}
						commentIdToEdit={commentId}
						existingComment={commentary}
					/>
				</Modal>
			)}
		</div>
	);
}
