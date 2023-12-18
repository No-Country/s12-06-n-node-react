import { useState } from "react";

export default function Dropdown({ icon, dropdownTitle, children, circularButton, white, yellow }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<button
				onClick={handleToggle}
				className={`flex justify-center gap-2 items-center shadow-3xl 
				${circularButton ? "rounded-full w-auto h-6" : "rounded px-2 py-1"}
				${white ? `${isOpen
						? "bg-texts text-secundario fill-secundario"
						: "bg-secundario text-texts fill-texts"
						}` : ""}
				${yellow ? `${isOpen
						? "text-principal stroke-principal bg-texts"
						: "text-texts stroke-texts bg-principal hover:bg-texts hover:text-principal hover:stroke-principal"
						}` : ""}
				`}
			>
				{dropdownTitle}
				{icon}
			</button>
			{isOpen && (
				<div class="absolute end-0 p-2 z-10 mt-1 w-auto bg-secundario shadow-3xl flex flex-col gap-3">
					{children}
				</div>
			)}
		</div>
	);
}
