import Button from "../../components/button/Button";
import Comments from "../../components/comments";
import BarProgress from "../../components/comments/components/BarProgress";
import StarIcon from "../../icons/StarIcon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByIdRestaurant, getRestaurantById } from "../../api/yumiverse_api";
import { useFetch } from "../../hooks/useFetch";
import { useRestaurantStore } from "../../stores";
import Modal from "../../components/modal";
import RateRestaurant from "../../components/modal/components/RateRestaurant";
import QualifyIcon from "../../icons/QualifyIcon";

export default function RatingsPage() {
	const { restaurantId } = useParams();

	const setRestaurantName = useRestaurantStore(state => state.setRestaurantName);

	const { data = {}, loading, error } = useFetch(() => getRestaurantById(restaurantId));
	const { name, stars, totalRatings } = data;

	useEffect(() => {
		setRestaurantName(name);
	}, [setRestaurantName, name]);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const {
		data: commentData,
		loading: commentLoading,
		error: commentError,
	} = useFetch(() => getCommentsByIdRestaurant(restaurantId));

	// const { data: userData } = useFetch(() => getUserById(userId));

	return (
		<div className="flex items-center justify-center desktop:items-start flex-col desktop:flex-row p-4 gap-6 min-w-[375px] desktop:gap-12">
			<div className="flex gap-4 items-center desktop:w-96 desktop:flex-col desktop:gap-6">
				<div>
					<div className="flex justify-center items-center">
						<StarIcon className="fill-principal stroke-principal h-5 w-5" />
						<p className="text-xl desktop:text-2xl ml-2">{stars}</p>
					</div>
					<h2 className="text-xs desktop:text-base">{totalRatings} opiniones</h2>
				</div>
				<BarProgress />
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
