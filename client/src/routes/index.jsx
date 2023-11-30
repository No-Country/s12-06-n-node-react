import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/home";
import { AuthRoutes } from "./auth/AuthRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route path="*" element={<Navigate to={"/"} />} />
                <Route index element={<HomePage />} />
                <Route path="auth/*" element={<AuthRoutes />} />
            </Route>
        </Routes>
    )
}