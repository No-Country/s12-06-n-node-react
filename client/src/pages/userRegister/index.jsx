import { Link } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button/Button";

function UserRegisterPage() {
	return (
		<div className="flex justify-center items-center">
			<div className="h-full flex flex-col w-full justify-between gap-12 px-4 py-6 max-w-[350px]">
				<div className="flex flex-col gap-4">
					<Input type="text" labelName="Nombre/s" htmlFor="name" />
					<Input type="text" labelName="Apellido/s" htmlFor="lastName" />
					<Input type="number" labelName="N° de teléfono" htmlFor="phoneNumber" min="1"/>
					<Input type="text" labelName="Nombre de usuario" htmlFor="username" />
					<Input type="password" labelName="Contraseña" htmlFor="password" />
					<Input type="password" labelName="Repetir contraseña" htmlFor="repeatPassword" />
				</div>
				<Button yellow text="Continuar" />
				<p className="text-black text-base/6 text-center">
					¿Ya tienes cuenta?
					<Link to="/login" className="text-link">
						{" "}
						Ingresa
					</Link>
				</p>
			</div>
		</div>
	);
}

export default UserRegisterPage;
