import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CategoryCard from "../components/categoryCard";

export const Layout = () => {
	return (
		<div>
			<Navbar />
            <div className="flex flex-row">
                <CategoryCard
                    href={"/"}
                    imgSrc={"https://dummyimage.com/150x150/000/fff"}
                    className={"navbar-brand"}
                >
                    Pizzeria
                </CategoryCard>

                <CategoryCard
                    href={"/"}
                    imgSrc={"https://dummyimage.com/150x150/000/fff"}
                    className={"navbar-brand"}
                >
                    Parrilla
                </CategoryCard>
            </div>

			<Outlet />
			<Footer />
		</div>
	);
};
