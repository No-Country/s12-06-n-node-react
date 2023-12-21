import { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "../../assets/arrowDownIcon";

export default function DropDownBtn({ title = "BtnTitle", children }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = event => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		// Agrega el manejador de eventos al documento cuando el componente está montado
		document.addEventListener("mousedown", handleClickOutside);

		// Limpia el manejador de eventos al desmontar el componente
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative w-28" ref={dropdownRef}>
			<button
				type="button"
				onClick={handleClick}
				className={`flex justify-center items-center gap-2 p-2 rounded-[4px] text-xs ${
					isOpen ? "bg-texts text-principal" : "text-texts bg-principal"
				} `}
			>
				<span className="w-full">{title}</span>
				<ArrowDownIcon strokeColor={isOpen && true} />
			</button>
			{isOpen && (
				<div className="absolute end-0 p-2 z-10 mt-1 w-auto bg-secundario shadow-3xl flex flex-col gap-3">
					{children}
				</div>
			)}
		</div>
	);
}

/* import { useState } from "react";
import ArrowDownIcon from "../../assets/arrowDownIcon";

export default function DropDownBtn({ title = "BtnTitle", children }) {
	const [onClick, setOnClick] = useState(false);

	const handleClick = () => {
		setOnClick(!onClick);
		// por favor cuando se toque afuera del dropdown que se esconda.
	};

	return (
		<div className="relative w-28">
			<button
				type="button"
				onClick={handleClick}
				className={`flex justify-center items-center gap-2 p-2 rounded-[4px] text-xs ${
					onClick ? "bg-texts text-principal" : "text-texts bg-principal"
				} `}
			>
				<span className="w-full">{title}</span>
				<ArrowDownIcon strokeColor={onClick && true} />
			</button>
			{onClick && (
				<div className="absolute end-0 p-2 z-10 mt-1 w-auto bg-secundario shadow-3xl flex flex-col gap-3">
					{children}
				</div>
			)}
		</div>
	);
} */
