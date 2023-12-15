import { Outlet } from "react-router-dom";
import NavbarMyShops from "../components/navbarMyShops";
import BottomBar from "../components/bottomBar";

const LayoutMyShops = () => {
	return (
		<>
			<NavbarMyShops />
			<Outlet />
			<BottomBar />
		</>
	);
};

export default LayoutMyShops;
