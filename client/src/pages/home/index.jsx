import React, { useEffect } from "react";
import Slider from "../../components/sliders/section-slider";
import CategoryCard from "../../components/cards/homePage/categoryCard";
import SectionCardHomePage from "../../components/cards/homePage/sectionCard";

import { getRestaurant } from "../../api/yumiverse_api";

export default function HomePage() {
	const restaurantData = [
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

	const categoryData = [
		{
			id: 1,
			title: "Parrilla",
			href: "/",
			imgSrc: "grill",
		},
		{
			id: 2,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 3,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 4,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 5,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 6,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 7,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 8,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
	];

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await getRestaurant();
        console.log(response.data);

      } catch (error) {

        console.error("Error fetching restaurant data:", error);

      }
    }

    fetchData();
  }, []);

	return (
		<main className="flex flex-col gap-8 overflow-hidden">
			<Slider data={categoryData}>
				{item => <CategoryCard title={item.title} href={item.href} imgSrc={item.imgSrc} />}
			</Slider>
			<Slider data={restaurantData} title="Categoria">
				{item => (
					<SectionCardHomePage
						location={item.location}
						nameRestaurant={item.nameRestaurant}
						imageRestaurant={item.imageRestaurant}
						categories={item.categories}
						openRestaurant={item.openRestaurant}
						numberOfScores={item.numberOfScores}
						scores={item.scores}
					/>
				)}
			</Slider>

			<Slider data={restaurantData} title="Categoria">
				{item => (
					<SectionCardHomePage
						location={item.location}
						nameRestaurant={item.nameRestaurant}
						imageRestaurant={item.imageRestaurant}
						categories={item.categories}
						openRestaurant={item.openRestaurant}
						numberOfScores={item.numberOfScores}
						scores={item.scores}
					/>
				)}
			</Slider>

			<Slider data={restaurantData} title="Categoria">
				{item => (
					<SectionCardHomePage
						location={item.location}
						nameRestaurant={item.nameRestaurant}
						imageRestaurant={item.imageRestaurant}
						categories={item.categories}
						openRestaurant={item.openRestaurant}
						numberOfScores={item.numberOfScores}
						scores={item.scores}
					/>
				)}
			</Slider>

			<Slider data={restaurantData} title="Categoria">
				{item => (
					<SectionCardHomePage
						location={item.location}
						nameRestaurant={item.nameRestaurant}
						imageRestaurant={item.imageRestaurant}
						categories={item.categories}
						openRestaurant={item.openRestaurant}
						numberOfScores={item.numberOfScores}
						scores={item.scores}
					/>
				)}
			</Slider>
		</main>
	);
}
