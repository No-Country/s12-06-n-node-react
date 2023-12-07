import { useState } from "react";
import { Link } from "react-router-dom";

import yumiverseLogo from "../../assets/YumiverseLogo.svg";
import profile from "../../assets/icons/profile-circle.svg";
import search from "../../assets/icons/search.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";

export default function Navbar() {
	const [searchExpanded, setSearchExpanded] = useState(false);

	const handleOpen = () => {
		setSearchExpanded(!searchExpanded);
	};

	return (
		<nav className="w-full h-20 px-4 pt-2 pb-1 mb-4">
			<div className="w-full h-full flex flex-col justify-between">
				<div className="flex justify-between">
					<Link className="max-h-[15] self-center">
						<img src={yumiverseLogo} alt="Yumiverse logo image" className="w-[87] h-auto" />
					</Link>
					<Link>
						<img src={profile} alt="Yumiverse logo image" className="max-h-6" />
					</Link>
				</div>
				<div className="flex justify-between items-center">
					<div
						className={`flex gap-2 items-center h-full ${
							searchExpanded ? "w-full" : ""
						} transition-all duration-300`}
					>
						<div className="max-h-6 overflow-hidden">
							<img onClick={handleOpen} className="cursor-pointer" src={search} alt="Search icon" />
							<img
								onClick={handleOpen}
								className="cursor-pointer"
								src={arrowLeft}
								alt="Arrow left icon"
							/>
						</div>
						<input
							type="text"
							className={`${
								searchExpanded ? "w-full" : "w-0"
							} border-b border-texts placeholder:text-xs placeholder:`}
							placeholder="Búsqueda del usuario"
						/>
					</div>
					<button
						className={`${
							searchExpanded ? "hidden" : ""
						} max-h-8 text-texts bg-principal px-2 py-1 rounded-lg`}
					>
						Publicar tienda
					</button>
				</div>
			</div>
		</nav>
	);
}
