import Button from "../../components/button/Button";
import yumiverse from "../../assets/images/logo.png";
import google from "../../assets/images/google.png";
import { Link } from "react-router-dom";

function SplashPage() {
	return (
		<div className="flex justify-center items-center">
			<div className="h-full flex flex-col justify-between gap-8 px-4 py-6 max-w-[350px]">
				<div>
					<img src={yumiverse} alt="Yumiverse logo" className="" />
					<p className="mt-2 text-texts font-['Montserrat_Alternates'] font-semibold tracking-[-0.8px] text-[40px] text-center">
						Yumiverse
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<Link to="/auth/login">
						<Button wFull yellow text="Iniciar sesión" />
					</Link>
					<Link to="/auth/register">
						<Button wFull brown text="Registrarse" />
					</Link>
				</div>
				<div className="flex flex-row items-center gap-2">
					<hr className="h-px bg-black border-0 w-full" />
					<p className="text-black text-base/6 text-center">o</p>
					<hr className="h-px bg-black border-0 w-full" />
				</div>
				<Link className="mb-8 flex flex-row items-center justify-center gap-3 h-8 rounded-lg text-md bg-white text-[#646464] border border-[#3681F0]">
					<img src={google} alt="google" />
					Registrarse con Google
				</Link>
			</div>
		</div>
	);
}

export default SplashPage;
