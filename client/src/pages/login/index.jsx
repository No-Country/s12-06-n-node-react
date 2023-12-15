import React from "react";
import Input from "../../components/input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import yumiverse from "../../assets/images/logo.png";

export default function LoginPage() {
	return (
		<div className="flex justify-center items-center">
			<div className="h-full flex flex-col justify-between gap-12 px-4 py-6 max-w-[350px]">
				<div>
					<img src={yumiverse} alt="Yumiverse logo" className="" />
					<p className="-mt-9 text-texts font-['Montserrat_Alternates'] font-semibold tracking-[-0.8px] text-[40px] text-center">
						Yumiverse
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<Input type="text" labelName="Usuario" htmlFor="name" />
					<Input type="password" labelName="Contraseña" htmlFor="password" className="mt-2" />
					<Link className="text-link italic">Recuperar contraseña</Link>
				</div>
				<Button yellow text="Iniciar sesión" />
				<p className="text-black text-base/6 text-center">
					¿No tienes cuenta?
					<Link to="/register" className="text-link">
						{" "}
						Regístrate
					</Link>
				</p>
			</div>
		</div>
	);
}
