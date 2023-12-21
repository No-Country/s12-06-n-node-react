import Button from "../../components/button/Button";
import Comments from "../../components/comments";
import BarProgress from "../../components/comments/components/BarProgress";
import StarIcon from "../../icons/StarIcon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsByIdRestaurant, getRestaurantById } from "../../api/yumiverse_api";
import { useFetch } from "../../hooks/useFetch";
import { useRestaurantStore } from "../../stores";
import Modal from "../../components/modal";
import RateRestaurant from "../../components/modal/components/RateRestaurant";
import QualifyIcon from "../../icons/QualifyIcon";
import Swal from "sweetalert2";

export default function RatingsPage() {
	const navigate = useNavigate();

	const { restaurantId } = useParams();

	const setRestaurantName = useRestaurantStore(state => state.setRestaurantName);

	const {
		data: dataRestaurant = {},
		loading,
		error,
	} = useFetch(() => getRestaurantById(restaurantId));
	const { name, rating } = dataRestaurant;
	console.log(dataRestaurant);

	useEffect(() => {
		setRestaurantName(name);
	}, [setRestaurantName, name]);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		const token = localStorage.getItem("token");
		if (token) {
			setIsModalOpen(true);
		} else {
			Swal.fire({
				icon: "error",
				title: "No estás logueado",
				text: "Debes iniciar sesión para calificar.",
				showCancelButton: true,
				confirmButtonText: "Aceptar",
			}).then(result => {
				if (result.isConfirmed) {
					// Redirigir a la página de inicio de sesión
					navigate("/auth/splash");
				}
			});
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const {
		data: commentData,
		loading: commentLoading,
		error: commentError,
	} = useFetch(() => getCommentsByIdRestaurant(restaurantId));
	console.log(rating);

	// const { data: userData } = useFetch(() => getUserById(userId));

	return (
		<div className="flex items-center justify-center desktop:items-start flex-col desktop:flex-row p-4 gap-6 min-w-[375px] desktop:gap-12">
			<div className="desktop:sticky top-4 desktop:top-16 flex gap-4 items-center desktop:w-96 desktop:flex-col desktop:gap-6">
				<div>
					<div className="flex justify-center items-center">
						<StarIcon className="fill-principal stroke-principal h-5 w-5" />
						<p className="text-xl desktop:text-2xl ml-2">{rating?.average}</p>
					</div>
					<h2 className="text-xs desktop:text-base whitespace-nowrap">{rating?.total} opiniones</h2>
				</div>
				<div className="flex flex-col w-full">
					{rating?.total_per_starts.map((value, index) => (
						<BarProgress value={value} key={index} number={index + 1} />
					))}
				</div>
				<Button
					text="Calificar"
					onClick={openModal}
					icon={<QualifyIcon />}
					alt="qualify icon"
					yellow
					rounded
				/>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} title="Calificar restaurant">
				<RateRestaurant closeModal={closeModal} restaurantId={restaurantId} />
			</Modal>
			{commentData && <Comments commentData={commentData} />}
		</div>
	);
}
