import { Outlet } from "react-router-dom";
import BottomBar from "../components/bottomBar";
import CategoryCard from "../components/categoryCard";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
