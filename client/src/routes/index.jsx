import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/home";
import { AuthRoutes } from "./auth/AuthRoutes";
import Ratings from "../pages/ratings";
import RestaurantPage from "../pages/restaurants";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/*" element={<Layout />}>
				<Route path="*" element={<Navigate to={"/"} />} />
				<Route index element={<HomePage />} />
				<Route path="auth/*" element={<AuthRoutes />} />
				<Route path="calificaciones" element={<Ratings />} />
				<Route path="restaurant" element={<RestaurantPage />} />
			</Route>
		</Routes>
	);
};
