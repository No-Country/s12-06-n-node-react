import { useRestaurantStore } from "../../stores";
import MenuItem from "../menuItem";

export default function RestaurantCategory({ showBottomSheet, menus }) {
	// const setShowBottomSheet = useRestaurantStore(state => state.setShowBottomSheet);

	// const handlerCardClick = () => {
	// 	setShowBottomSheet(!showBottomSheet);
	// };

	// function organizeAllMenusByCategory(allMenus) {
	// 	return allMenus.reduce((acc, item) => {
	// 		item.menuCategory.forEach((category) => {
	// 			if (!acc[category]) {
	// 				acc[category] = [];
	// 			}
	// 			acc[category].push(item);
	// 		});
	// 		return acc;
	// 	}, {});
	// }

	// const organizedMenus = organizeAllMenusByCategory(menus);
	// console.log(organizedMenus);

	// const restaurantMenu = [
	// 	{
	// 		category: "Hamburguesas",
	// 		items: [
	// 			{
	// 				id: 1,
	// 				itemName: "Classic Burger",
	// 				price: 8.95,
	// 				description:
	// 					"Carne, queso cheddar, lechuga, tomate, cebolla, mayonesa y ketchup. Incluye papas fritas.",
	// 			},
	// 			{
	// 				id: 2,
	// 				itemName: "Cheese Lover's Burger",
	// 				price: 9.95,
	// 				description:
	// 					"Doble carne, triple queso, bacon, lechuga, tomate, cebolla, mayonesa y ketchup. Incluye papas fritas.",
	// 			},
	// 			{
	// 				id: 3,
	// 				itemName: "Spicy Jalapeño Burger",
	// 				price: 10.45,
	// 				description:
	// 					"Carne, queso pepper jack, jalapeños, guacamole, lechuga, tomate, cebolla y salsa picante. Incluye papas fritas.",
	// 			},
	// 			{
	// 				id: 4,
	// 				itemName: "Mushroom Swiss Burger",
	// 				price: 9.75,
	// 				description:
	// 					"Carne, queso suizo, champiñones salteados, cebolla caramelizada, lechuga, tomate y mayonesa. Incluye papas fritas.",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		category: "Pizzas",
	// 		items: [
	// 			{
	// 				id: 5,
	// 				itemName: "Margherita Pizza",
	// 				price: 11.5,
	// 				description: "Salsa de tomate, mozzarella fresca y albahaca fresca.",
	// 			},
	// 			{
	// 				id: 6,
	// 				itemName: "Pepperoni Feast Pizza",
	// 				price: 12.75,
	// 				description: "Salsa de tomate, doble pepperoni, mozzarella y orégano.",
	// 			},
	// 			{
	// 				id: 7,
	// 				itemName: "Vegetarian Delight Pizza",
	// 				price: 11.95,
	// 				description:
	// 					"Salsa de tomate, champiñones, pimientos, cebolla, aceitunas, mozzarella y albahaca fresca.",
	// 			},
	// 			{
	// 				id: 8,
	// 				itemName: "BBQ Chicken Pizza",
	// 				price: 13.25,
	// 				description:
	// 					"Salsa barbacoa, pollo a la parrilla, cebolla roja, maíz, mozzarella y cilantro.",
	// 			},
	// 		],
	// 	},
	// ];

	const handlerCardClick = () => {
		setShowBottomSheet(!showBottomSheet);
	};

	function organizeAllMenusByCategory(allMenus) {
		if (!Array.isArray(allMenus)) {
			return {};
		}

		return allMenus.reduce((acc, item) => {
			if (item.menuCategory && Array.isArray(item.menuCategory)) {
				item.menuCategory.forEach((category) => {
					if (!acc[category]) {
						acc[category] = [];
					}
					acc[category].push(item);
				});
			}
			return acc;
		}, {});
	}

	const organizedMenus = organizeAllMenusByCategory(menus);
	console.log(organizedMenus);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<section className="w-full h-auto p-4 flex flex-col gap-8 bg-secundario">
			{
				Object.keys(organizedMenus).map(category => (
					<div className="flex flex-col gap-4">
						<h2 className="font-bold">{capitalizeFirstLetter(category)}</h2>
						<div className="flex flex-col gap-4">
							{
								organizedMenus[category].map(item => (
									<MenuItem
										handlerCardClick={handlerCardClick}
										key={item._id}
										description={item.description}
										title={item.name}
										price={item.price}
										img={item.imgMenus[0]}
									/>
								))
							}
						</div>
					</div>
				))
			}
			{/* {menus.map(item => (
				<div
					key={item._id}
					className="flex flex-col gap-4"
				>
					<h2 className="font-bold">{item.category}</h2>
					{menus?.map(item => (
						<MenuItem
							handlerCardClick={handlerCardClick}
							key={item._id}
							description={item.description}
							title={item.name}
							price={item.price}
							img={item.imgMenus[0]}
						/>
					))}
				</div>
			))} */}
		</section>
	);
}
