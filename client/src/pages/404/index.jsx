import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import pageNotFound from "../../assets/images/not-found.jpg";

function NotFoundPage() {
	return (
		<div className="h-screen bg-white flex flex-col gap-12 justify-center items-center p-4">
			<img
				src={pageNotFound}
				alt="Pagina No encontrada"
				className="object-cover object-center w-[300px]"
			/>
			<Link to="/">
				<Button text="Volver al inicio" yellow />
			</Link>
		</div>
	);
}

export default NotFoundPage;
