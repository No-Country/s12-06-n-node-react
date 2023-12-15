import ShopIcon from "../../assets/icons/shop.svg";
import ErrorImage from "../../assets/images/errorMyShops.png";
import Button from "../../components/button/Button";
import ShopCard from "../../components/cards/myShopsPage/shopCard";

const MyShopsPage = () => {
	const myShopsData = [
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
	];

	return (
		<>
			{/* if myShopsData is empty render an error */}

			{myShopsData.length === 0 ? (
				<div className="flex flex-col items-center justify-center content-center mt-[72px] mb-[450px]">
					<img src={ErrorImage} alt="" className="w-[192px] desktop:w-[392px]" />
					<div className="flex flex-col items-center justify-center content-center ">
						<h3 className="text-2xl font-bold text-red-600">¡Nada por aquí!</h3>
						<h4 className="text-texts">Parece que no has agregado ninguna tienda</h4>
					</div>
					<div className="mt-[28px]">
						<Button yellow rounded text={"Añadir tienda"} icon={ShopIcon} />
					</div>
				</div>
			) : (
				<div className="flex flex-wrap justify-center gap-8 mt-[24px] mb-[40px]">
					{myShopsData.map(item => (
						<ShopCard
							key={item.id}
							id={item.id}
							location={item.location}
							nameRestaurant={item.nameRestaurant}
							imageRestaurant={item.imageRestaurant}
							openRestaurant={item.openRestaurant}
							categories={item.categories}
							numberOfScores={item.numberOfScores}
							scores={item.scores}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default MyShopsPage;
