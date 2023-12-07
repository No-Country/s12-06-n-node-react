import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/home";
import { AuthRoutes } from "./auth/AuthRoutes";
import Ratings from "../pages/ratings";
import RestaurantPage from "../pages/restaurants";
import LayoutRestaurants from "./LayoutRestaurants";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/*" element={<Layout />}>
				<Route path="*" element={<Navigate to={"/"} />} />
				<Route index element={<HomePage />} />
				<Route path="auth/*" element={<AuthRoutes />} />
			</Route>
			<Route path="/restaurant/*" element={<LayoutRestaurants />}>
				<Route index element={<RestaurantPage />} />
				<Route path="calificaciones" element={<Ratings />} />
			</Route>
			<Route path="/restaurant" element={<Navigate to="/restaurant/" />} />
		</Routes>
	);
};
