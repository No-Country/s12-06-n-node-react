import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/home";
import { AuthRoutes } from "./auth/AuthRoutes";
import RestaurantPage from "../pages/restaurants";
import LayoutRestaurants from "./LayoutRestaurants";
import RegisterPage from "../pages/register";
import RatingsPage from "../pages/ratings";

// export const AppRouter = () => {

// 	return (
// 		<Routes>
// 			<Route path="/*" element={<Layout />}>
// 				<Route path="*" element={<Navigate to={"/"} />} />
// 				<Route index element={<HomePage />} />
// 				<Route path="auth/*" element={<AuthRoutes />} />
// 			</Route>
// 			<Route path="/restaurant/*" element={<LayoutRestaurants />}>
// 				<Route index element={<RestaurantPage />} />
// 				<Route path="calificaciones" element={<Ratings />} />
// 			</Route>
// 			<Route path="/restaurant" element={<Navigate to="/restaurant/" />} />
// 		</Routes>

// 	);
// };

export const appRouter = createBrowserRouter([
	{
		path: "/", element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
		]
	},
	{
		path: "restaurant", element: <LayoutRestaurants />,
		children: [
			{
				path: ":restaurantId",
				element: <RestaurantPage />
			},
			{
				path: ":restaurantId/ratings",
				element: <RatingsPage />
			},
			{
				path: "registerProducts",
				element: <RegisterPage />
			},
		]
	},
	{ path: "*", element: <Navigate to={"/"} /> },
])