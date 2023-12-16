import { Outlet } from "react-router-dom";
import NavbarPages from "../components/navbarPages";

const LayoutRegister = () => {
	return (
		<>
			<NavbarPages pageTitle="¡Bienvenido a Yumiverse!" />
			<Outlet />
		</>
	);
};

export default LayoutRegister;
