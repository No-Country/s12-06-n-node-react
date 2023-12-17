import { Link } from "react-router-dom";

import yumiverseLogo from "../../assets/YumiverseLogo.svg";
import ProfileIcon from "../../assets/icons/profile-circle.svg";
import SearchIcon from "../../assets/icons/search.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { useSearch } from "../../stores/search/useSearch.store";

export default function Navbar() {

	const [isExpanded, setIsExpanded] = useSearch(state => [state.isExpanded, state.setIsExpanded]);
	const [search, setSearch] = useSearch(state => [state.search, state.setSearch]);

	const handleSearchIconClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<nav className="w-full h-20 px-4 pt-2 pb-1 mb-4">
			<div className="w-full h-full flex flex-col justify-between">
				<div className="flex justify-between">
					<Link className="max-h-[15] self-center">
						<img src={yumiverseLogo} alt="Yumiverse logo image" className="w-[87] h-auto" />
					</Link>
					<Link>
						<img src={ProfileIcon} alt="Yumiverse logo image" className="max-h-6" />
					</Link>
				</div>
<<<<<<< HEAD
				<div className={`w-full h-20 flex ${isExpanded ? '' : 'justify-between'} items-center overflow-x-hidden`}>
=======
				{/* <div className="flex justify-between items-center">
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
				</div> */}
				<div
					className={`w-full h-20 flex ${
						isExpanded ? "" : "justify-between"
					} items-center overflow-x-hidden`}
				>
>>>>>>> 86552bc88d4cd903297ad5638ad429efea06b06c
					<div className="w-full h-full flex items-center gap-4 overflow-x-hidden">
						<div
							onClick={handleSearchIconClick}
							className="w-6
							 h-6 flex justify-center items-center relative cursor-pointer"
						>
							<div
								className={`w-6 h-6 flex justify-center items-center rounded-full absolute ${
									isExpanded ? "-translate-x-full" : ""
								} transition-transform ease-in-out duration-300`}
							>
								<img src={SearchIcon} alt="Search Icon" />
							</div>
							<div
								className={`w-6 h-6 flex justify-center items-center rounded-full absolute ${
									isExpanded ? "" : "-translate-x-full"
								} transition-transform ease-in-out duration-300`}
							>
								<img src={ArrowLeft} alt="Search Icon" />
							</div>
						</div>
						<div
							className={`${
								isExpanded ? "w-full" : "w-0 -translate-x-full"
							} overflow-hidden transition-all ease-in-out duration-300 flex items-center`}
						>
							<input
<<<<<<< HEAD
								value={search}
								onChange={e => setSearch(e.target.value)}
								className={`${isExpanded ? 'w-full' : 'w-0 -translate-x-full'} h-auto px-1 bg-transparent border-b-[1px] border-texts outline-none transition-all ease-in-out duration-300 placeholder:text-xs placeholder:text-texts`}
=======
								className={`${
									isExpanded ? "w-full" : "w-0 -translate-x-full"
								} h-auto px-1 bg-transparent border-b-[1px] border-texts outline-none transition-all ease-in-out duration-300 placeholder:text-xs placeholder:text-texts`}
>>>>>>> 86552bc88d4cd903297ad5638ad429efea06b06c
								type="text"
								placeholder="Búsqueda ingresada"
							/>
						</div>
					</div>
					<div
						className={`${
							isExpanded ? "translate-x-full" : "translate-x-0"
						} transition-transform ease-in-out duration-300`}
					>
						<button
							className={`${
								isExpanded ? "translate-x-full w-0" : "translate-x-0"
							} bg-principal px-2 py-1 rounded-lg max-h-8 transition-transform ease-in-out duration-300`}
						>
							Publicar
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
