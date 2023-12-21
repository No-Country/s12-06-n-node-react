import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login";
import LayoutRegister from "../LayoutRegister";
import UserRegisterPage from "../../pages/userRegister";
import SplashPage from "../../pages/splash";

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/auth/splash" />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="splash" element={<SplashPage />} />
			<Route path="register" element={<LayoutRegister />}>
				<Route index element={<UserRegisterPage />} />
			</Route>
		</Routes>
	);
};
