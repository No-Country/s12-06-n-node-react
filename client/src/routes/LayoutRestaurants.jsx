import { Outlet } from "react-router-dom";
import NavbarRestaurant from "../components/navbarRestaurant";


export default function LayoutRestaurants() {

    return (
        <>
            <NavbarRestaurant />
            <Outlet />
        </>
    )
}
