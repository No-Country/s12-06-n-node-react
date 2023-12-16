import { useState } from "react";
import ArrowDownIcon from "../../assets/arrowDownIcon";
export default function DropDownBtn({ title = "BtnTitle" }) {
	const [onClick, setOnClick] = useState(false);

	const handleClick = () => {
		setOnClick(!onClick);
	};

	return (
		<button
			onClick={handleClick}
			className="flex justify-center items-center gap-2 p-2 rounded-[4px] text-texts text-xs bg-principal active:bg-texts active:text-principal"
		>
			<span className="w-full">{title}</span>
			<ArrowDownIcon strokeColor={onClick && true} />
		</button>
	);
}
