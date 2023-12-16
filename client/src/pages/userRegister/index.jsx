import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button/Button";
import { registeruser } from "../../api/yumiverse_api";

function UserRegisterPage() {

const [state, setState] = useState({
	name: "",
	surname: "",
	phone: "",
	username: "",
	password: ""

})



const registerUser = (data) => {
 console.log(data)
}

	return (
		<form onSubmit={registerUser}>
		<div className="flex justify-center items-center">
			<div className="h-full flex flex-col w-full justify-between gap-12 px-4 py-6 max-w-[350px]">
				<div className="flex flex-col gap-4">
					<Input 
					  type="text" 
					  labelName="Nombre/s" 
					  name="name" 
                      onChange={registerUser}
					/>
					<Input 
					type="text" 
					labelName="Apellido/s" 
					name="surname" 
                    onChange={registerUser}
					/>
					<Input 
					type="number" 
					labelName="N° de teléfono" 
					name="phone" 
					min="1"
                    onChange={registerUser}
					/>
					<Input 
					type="text" 
					labelName="Nombre de usuario" 
					name="username" 
                     onChange={registerUser}
					/>
					<Input type="password" labelName="Contraseña" name="password" 
                     onChange={registerUser}
					/>
					<Input type="password" labelName="Repetir contraseña" htmlFor="repeatPassword" />
				</div>
				<Button type="submit" yellow text="Continuar" />
				<p className="text-black text-base/6 text-center">
					¿Ya tienes cuenta?
					<Link to="/login" className="text-link">
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
