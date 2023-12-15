import Slider from "../../components/sliders/section-slider";
import CategoryCard from "../../components/cards/homePage/categoryCard";
import SectionCardHomePage from "../../components/cards/homePage/sectionCard";

import { getAllCategories, getAllRestaurants } from "../../api/yumiverse_api";
import { useFetch } from "../../hooks/useFetch";
import categoryIcons from "../../helpers/categoryIcons";
import categoryTitles from "../../helpers/categoryTitles";
import { useEffect, useState } from "react";

export default function HomePage() {
	const restaurantDataMock = [
		{
			id: 1,
			location: "Av. Saenz Peña 146, Junín",
			nameRestaurant: "Vinilo Bar",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "hamburger"],
			openRestaurant: true,
			numberOfScores: "22",
			scores: "3",
		},
		{
			id: 2,
			location: "Calle San Martín 123, Buenos Aires",
			nameRestaurant: "Gastronómico",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "grill"],
			openRestaurant: false,
			numberOfScores: "15",
			scores: "4",
		},
		{
			id: 3,
			location: "Plaza de Mayo 456, Córdoba",
			nameRestaurant: "La Parrilla",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["grill", "pizza"],
			openRestaurant: true,
			numberOfScores: "30",
			scores: "5",
		},
		{
			id: 4,
			location: "Rivadavia 789, Mendoza",
			nameRestaurant: "Café del Valle",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "hamburger"],
			openRestaurant: true,
			numberOfScores: "18",
			scores: "4",
		},
		{
			id: 5,
			location: "Corrientes 567, Rosario",
			nameRestaurant: "Pasta Express",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["pizza", "hamburger"],
			openRestaurant: false,
			numberOfScores: "25",
			scores: "3",
		},
		{
			id: 6,
			location: "San Juan 890, Salta",
			nameRestaurant: "Sabores del Norte",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "grill"],
			openRestaurant: true,
			numberOfScores: "20",
			scores: "4",
		},
		{
			id: 7,
			location: "Av. Belgrano 432, La Plata",
			nameRestaurant: "Veggie Delight",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["hamburger", "grill"],
			openRestaurant: true,
			numberOfScores: "28",
			scores: "5",
		},
		{
			id: 8,
			location: "Independencia 654, Tucumán",
			nameRestaurant: "Taco Fiesta",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["pizza", "hamburger"],
			openRestaurant: false,
			numberOfScores: "16",
			scores: "3",
		},
	];

	// const categoryData = [
	// 	{
	// 		id: 1,
	// 		title: "Parrilla",
	// 		href: "/",
	// 		imgSrc: "grill",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// 	{
	// 		id: 6,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// 	{
	// 		id: 7,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// 	{
	// 		id: 8,
	// 		title: "Pizzería",
	// 		href: "/",
	// 		imgSrc: "pizza",
	// 	},
	// ];

	const { data: restaurantData, loading: restaurantLoading, error: restaurantError } = useFetch(getAllRestaurants);
	const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(getAllCategories);
	const [filteredSections, setFilteredSections] = useState([]);
	const [sections, setSections] = useState([]);

	// useEffect(() => {
	// 	if (categoryData && restaurantData) {
	// 		const sections = Object.entries(categoryTitles).map(([id, title]) => {
	// 			const restaurantsFilters = restaurantData.map((restaurant) => {
	// 				const categoriesArray = restaurant.categories || [];
	// 				return categoriesArray.some(cat => cat._id === id);
	// 			});
	// 			return { id, title, restaurants: restaurantsFilters };
	// 		});

	// 		setFilteredSections(sections);
	// 	}
	// }, [categoryData, restaurantData]);

	// useEffect(() => {
	// 	if (categoryData && restaurantData) {
	// 		const sections = Object.entries(categoryTitles).map(([id, title]) => {
	// 			const restaurantIdFilters = restaurantData.map((restaurant) => {
	// 				const categoriesArray = restaurant.categories || [];
	// 				const matchingCategory = categoriesArray.find(cat => cat._id === id);
	// 				return matchingCategory ? matchingCategory._id : null;
	// 			});
	// 			return { id, title, restaurants: restaurantIdFilters };
	// 		});

	// 		setFilteredSections(sections);
	// 	}
	// }, [categoryData, restaurantData]);

	// useEffect(() => {
	// 	if (categoryData && restaurantData) {
	// 		const sections = Object.entries(categoryTitles).map(([id, title]) => {
	// 			const restaurantIdFilters = restaurantData
	// 				.filter(restaurant => {
	// 					// Filtrar los restaurantes que tienen la categoría con el id actual
	// 					const categoriesArray = restaurant.categories || [];
	// 					return categoriesArray.some(cat => cat._id === id);
	// 				})
	// 				.map(restaurant => restaurant.id); // Mapear solo los _id de los restaurantes

	// 			return { id, title, restaurants: restaurantIdFilters };
	// 		});

	// 		setFilteredSections(sections);
	// 		console.log(filteredSections);
	// 	}
	// }, [categoryData, restaurantData]);

	// useEffect(() => {

	// 	if (categoryData && restaurantData) {
	// 		const sections = categoryData.map(({ _id, category }) => ({
	// 			_id,
	// 			category,
	// 			restaurants: restaurantData
	// 				.filter(restaurant => restaurant.categories.some(cat => cat._id === _id))
	// 				.map(({ categoryData, ...restoRestaurant }) => ({
	// 					categoryData: categoryData.filter(cat => cat._id === _id),
	// 					...restoRestaurant,
	// 				}))
	// 		}))
	// 		console.log(JSON.stringify(sections));
	// 	}

	// }, [categoryData, restaurantData])

	useEffect(() => {
		if (categoryData && restaurantData) {
			const sections = categoryData.map(category => {
				const restaurants = restaurantData.filter(restaurant =>
					restaurant.categories.some(cat => cat._id === category._id)
				);

				return {
					...category,
					restaurants: restaurants.map(({ categories, ...restoRestaurant }) => ({
						...restoRestaurant,
						categories: categories.filter(cat => cat._id === category._id),
					})),
				};
			});

			setFilteredSections(sections);
		}
	}, [categoryData, restaurantData]);

	// console.log(categoryData);
	// console.log(restaurantData);
	// console.log('Desde Filtered Sections', filteredSections);

	const handleMapCategoryIcon = (categoryId) => {
		return categoryIcons[categoryId];
	};

	const getRestaurantDataById = (restaurantId) => {
		const restaurant = restaurantData.find(restaurant => restaurant.id === restaurantId);
		return restaurant || {};
	}

	return (
		<main className="flex flex-col gap-8 overflow-hidden">

			{
				(categoryData && categoryData?.length > 0) &&
				<Slider data={categoryData}>
					{item => handleMapCategoryIcon(item._id) && <CategoryCard title={item.category} href={item.id} Icon={handleMapCategoryIcon(item._id)} />}
				</Slider>
			}

			{
				filteredSections.map(section => (
					<Slider data={section.restaurants} title={section.category}>
						{item => (
							<SectionCardHomePage
								id={item._id}
								location={String(item.address)}
								nameRestaurant={item.name}
								imageRestaurant={item.url_img_restaurant}
								categories={item.categories}
								openRestaurant={item.isOpen}
								numberOfScores={item.stars}
								scores={item.totalRating}
							/>
						)}
					</Slider>
				))
			}

			{/* {
				(filteredSections && filteredSections?.length > 0) &&
				filteredSections.map(section => {
					<Slider data={'data'} title={section.title}>
						{item => (
							<SectionCardHomePage
								id={item.id}
								location={String(item.address)}
								nameRestaurant={item.name}
								imageRestaurant={item.url_img_restaurant}
								categories={item.categories}
								openRestaurant={item.isOpen}
								numberOfScores={item.stars}
								scores={item.totalRating}
							/>
						)}
					</Slider>
				})
			} */}

			{/* {(categoryData && categoryData?.length > 0) &&
				categoryData.map(section => {
					<Slider data={data} title={handleMapCategoryIcon(section.category)}>
						{item => (
							(data && data?.length > 0) &&
							<SectionCardHomePage
								key={item._id}
								id={item._id}
								location={String(item.address)}
								nameRestaurant={item.name}
								imageRestaurant={item.url_img_restaurant}
								categories={item.categories}
								openRestaurant={item.isOpen}
								numberOfScores={item.stars}
								scores={item.totalRating}
							/>
						)}
					</Slider>
				})
			} */}


			{/* {
				(data && data?.length > 0) &&
				<Slider data={data} title="Pizzas">
					{item => (
						<SectionCardHomePage
							location={String(item.address)}
							nameRestaurant={item.name}
							imageRestaurant={item.url_img_restaurant}
							categories={item.categories}
							openRestaurant={item.isOpen}
							numberOfScores={item.stars}
							scores={item.totalRating}
						/>
					)}
				</Slider>
			} */}
		</main>
	);
}
