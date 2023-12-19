import { useState } from "react";

export default function Dropdown({ icon, dropdownTitle, children, circularButton, white, yellow }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative transition-all">
			<button
				onClick={handleToggle}
				className={`flex justify-center transition-all gap-2 items-center shadow-3xl 
				${circularButton ? "rounded-full w-6 h-6" : "rounded p-2"}
				${
					white
						? `${
								isOpen
									? "bg-texts text-secundario fill-secundario"
									: "bg-secundario text-texts fill-texts"
						  }`
						: ""
				}
				${
					yellow
						? `${
								isOpen
									? "text-principal stroke-principal bg-texts"
									: "text-texts stroke-texts bg-principal hover:bg-texts hover:text-principal hover:stroke-principal"
						  }`
						: ""
				}
				`}
			>
				{dropdownTitle}
				{icon}
			</button>
			{isOpen && (
				<div className="absolute end-0 p-2 z-10 mt-1 w-auto bg-secundario shadow-3xl flex flex-col gap-3 transition-all">
					{children}
				</div>
			)}
		</div>
	);
}
