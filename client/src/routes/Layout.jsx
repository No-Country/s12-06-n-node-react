import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
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
