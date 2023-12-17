import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import BottomBar from "../components/bottomBar";

export const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<BottomBar />
		</div>
	);
};
