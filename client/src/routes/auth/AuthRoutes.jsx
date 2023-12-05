import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login";

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/auth/login" />} />
			<Route path="login" element={<LoginPage />} />
		</Routes>
	);
};
