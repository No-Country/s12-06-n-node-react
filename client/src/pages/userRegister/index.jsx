import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { postUser } from "../../api/yumiverse_api";

function UserRegisterPage() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [phone, setPhone] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [repeatpassword, setrepeatPassword] = useState("");

	const registerUser = async e => {
		e.preventDefault();
		const MySwal = withReactContent(Swal);
		if (password !== repeatpassword) {
			MySwal.fire({
				title: <p>Las Contraseñas No Son Iguales</p>,
				icon: "warning",
			});
		} else {
			const response = await postUser({
				name,
				surname,
				phone,
				username,
				password,
			});
			MySwal.fire({
				title: <p>Usuario Creado Exitosamente</p>,
				icon: "success",
			});
			console.log(response);
		}
	};

	return (
		<form onSubmit={registerUser}>
			<div className="flex justify-center items-center">
				<div className="h-full flex flex-col w-full justify-between gap-12 px-4 py-6 max-w-[350px]">
					<div className="flex flex-col gap-4">
						<Input
							type="text"
							labelName="Nombre/s"
							htmlFor="name"
							onChange={e => setName(e.target.value)}
						/>
						<Input
							type="text"
							labelName="Apellido/s"
							htmlFor="surname"
							onChange={e => setSurname(e.target.value)}
						/>
						<Input
							type="number"
							labelName="N° de teléfono"
							htmlFor="phone"
							min="1"
							onChange={e => setPhone(e.target.value)}
						/>
						<Input
							type="text"
							labelName="Nombre de usuario"
							htmlFor="username"
							onChange={e => setUsername(e.target.value)}
						/>
						<Input
							type="password"
							labelName="Contraseña"
							name="password"
							onChange={e => setPassword(e.target.value)}
						/>
						<Input
							type="password"
							labelName="Repetir contraseña"
							htmlFor="repeatpassword"
							onChange={e => setrepeatPassword(e.target.value)}
						/>
					</div>
					<Button type="submit" wFull yellow text="Continuar" />

					<p className="text-black text-base/6 text-center">
						¿Ya tienes cuenta?
						<Link to="/auth/login" className="text-link">
							{" "}
							Ingresa
						</Link>
					</p>
				</div>
			</div>
		</form>
	);
}

export default UserRegisterPage;
