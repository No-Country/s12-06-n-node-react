import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import yumiverse from "../../assets/images/logo.png";
import { useLoginStore } from "../../stores";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function LoginPage() {

const[username, setUsername] = useState("")
const[password, setPassword] = useState("")
const navigate = useNavigate()
const login = useLoginStore((state)=> state.login)

const Login = async(e) => {
  e.preventDefault()
  const MySwal = withReactContent(Swal);
  await login(username, password)
  const { bearer_token } = useLoginStore.getState()

  if(!bearer_token){
   	MySwal.fire({
	title: <p>Username o Contraseña Incorrecto</p>,
	icon: "warning",
   });
  }
  else{
  navigate('/')
 }
}

	return (
		<div className="flex justify-center items-center">
			<form className="h-full flex flex-col justify-between gap-12 px-4 py-6 max-w-[350px]" onSubmit={Login}>
				<div>
					<img src={yumiverse} alt="Yumiverse logo" className="" />
					<p className="-mt-9 text-texts font-['Montserrat_Alternates'] font-semibold tracking-[-0.8px] text-[40px] text-center">
						Yumiverse
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<Input 
					type="text" 
					labelName="Usuario"
					htmlFor="username" 
                    onChange={(e) => setUsername(e.target.value)}
					/>
					<Input 
					type="password" 
					labelName="Contraseña" 
					htmlFor="password" 
					className="mt-2"
					onChange={(e)=> setPassword(e.target.value)} 
					/>
					<Link className="text-link italic">Recuperar contraseña</Link>
				</div>
				<Button wFull yellow text="Iniciar sesión" />
				<p className="text-black text-base/6 text-center">
					¿No tienes cuenta?
					<Link to="/auth/register" className="text-link">
						{" "}
						Regístrate
					</Link>
				</p>
			</form>
		</div>
	);
}
