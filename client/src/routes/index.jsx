import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/home";
import { AuthRoutes } from "./auth/AuthRoutes";
import RestaurantPage from "../pages/restaurants";
import LayoutRestaurants from "./LayoutRestaurants";
import LayoutPages from "./LayoutPages";
import MyShopsPage from "../pages/myShops";
import RegisterPage from "../pages/register";
import RatingsPage from "../pages/ratings";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: "restaurant",
		element: <LayoutRestaurants />,
		children: [
			{
				path: ":restaurantId",
				element: <RestaurantPage />,
			},
			{
				path: ":restaurantId/ratings",
				element: <RatingsPage />,
			},
			{
				path: "registerProducts",
				element: <RegisterPage />,
			},
		],
	},
	{
		path: "auth/*",
		element: <AuthRoutes />,
	},
	{
		path: "myShops",
		element: <LayoutPages pageTitle="Mis Tiendas" />,
		children: [
			{
				index: true,
				element: <MyShopsPage />,
			},
		],
	},
	{ path: "*", element: <Navigate to={"/"} /> },
]);
