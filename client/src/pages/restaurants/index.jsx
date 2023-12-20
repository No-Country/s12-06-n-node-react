import { useParams } from "react-router-dom";
import MenuData from "../../components/cards/homePage/menuData";

import HeaderImage from "../../assets/images/imageCard.png";
import FoodTags from "../../components/foodTags";
import RestaurantCategory from "../../components/restaurantCategory";
import BottomSheet from "../../components/bottomSheet";
import { useRestaurantStore } from "../../stores";
import { getRestaurantById } from "../../api/yumiverse_api";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { formatAddress } from "../../helpers/formatAddress";

export default function RestaurantPage() {
	const [location, setLocation] = useState('')
	const [cat, setCat] = useState([])

	const { restaurantId } = useParams();
	const showBottomSheet = useRestaurantStore(state => state.showBottomSheet);
	const setRestaurantName = useRestaurantStore(state => state.setRestaurantName);
	const restaurantName = useRestaurantStore(state => state.restaurantName);

	const { data = {}, loading, error } = useFetch(() => getRestaurantById(restaurantId));
	const { name, imgBrand, description, categories, address, phone, isOpen, stars, totalRatings } = data;

	useEffect(() => {
		setRestaurantName(name);
	}, [setRestaurantName, name]);

	useEffect(() => {
		if (address) {
			const formattedAddress = formatAddress(address);
			const locationFormatted = `${String(formattedAddress).substring(0, 25)}...`;
			const categoriesName = categories.map(item => item.category)

			setLocation(locationFormatted);
			setCat(categoriesName);
		}
	}, [address, categories])

	return (
		<main className="flex flex-col">
			<div className="w-full h-44 flex items-center justify-center overflow-hidden">
				<img src={imgBrand} alt={`${data.name} image`} className="w-full h-full object-cover object-center" />
			</div>
			<MenuData
				id={restaurantId}
				location={location}
				schedule={'11:00 - 22:00'}
				phoneNumber={phone}
				categories={cat}
				openRestaurant={isOpen}
				stars={stars}
				totalRatings={totalRatings}
			/>
			<FoodTags />
			<RestaurantCategory showBottomSheet={showBottomSheet} />
			<BottomSheet showBottomSheet={showBottomSheet} />
		</main>
	);
}
