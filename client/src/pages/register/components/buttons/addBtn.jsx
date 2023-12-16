import { useState } from "react";
import AddIcon from "../../assets/addIcon";
import StoreIcon from "../../assets/storeIcon";
export default function AddBtn({ title, storeIcon, type, handleFormSubmit }) {
	const [onClick, setOnClick] = useState(false);

	const handleClick = e => {
		e.preventDefault();
		setOnClick(!onClick);
		handleFormSubmit(e);
	};

	return (
		<button
			type={type}
			onClick={handleClick}
			className="inline-flex items-center gap-2 h-8 px-2 py-1 rounded-2xl text-texts bg-principal active:bg-texts active:text-principal"
		>
			<span>{title}</span>
			<div className="w-6 h-6 flex justify-center items-center">
				{storeIcon ? (
					<StoreIcon strokeColor={onClick && true} />
				) : (
					<AddIcon strokeColor={onClick && true} />
				)}
			</div>
		</button>
	);
}
