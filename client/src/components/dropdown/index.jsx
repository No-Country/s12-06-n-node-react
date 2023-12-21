import { useState, useEffect, useRef } from "react";

export default function Dropdown({
	icon,
	dropdownTitle,
	children,
	circularButton,
	white,
	yellow,
	noStyles,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div ref={dropdownRef} className="relative transition-all">
			<button
				onClick={handleToggle}
				className={`flex justify-center transition-all gap-2 items-center
				${noStyles ? "gap-0 bg-transparent" : ""}
				${circularButton ? "rounded-full w-6 h-6" : "rounded p-2"}
				${
					white
						? `${
								isOpen
									? "bg-texts text-secundario fill-secundario shadow-3xl"
									: "bg-secundario text-texts fill-texts shadow-3xl"
						  }`
						: ""
				}
				${
					yellow
						? `${
								isOpen
									? "text-principal stroke-principal bg-texts shadow-3xl"
									: "shadow-3xl text-texts stroke-texts bg-principal hover:bg-texts hover:text-principal hover:stroke-principal"
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
