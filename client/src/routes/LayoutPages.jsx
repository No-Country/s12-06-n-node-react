import { Outlet } from "react-router-dom";
import NavbarPages from "../components/navbarPages";
import BottomBar from "../components/bottomBar";

const LayoutPages = ({ pageTitle }) => {
	return (
		<>
			<NavbarPages pageTitle={pageTitle} />
			<Outlet />
			<BottomBar />
		</>
	);
};

export default LayoutPages;
