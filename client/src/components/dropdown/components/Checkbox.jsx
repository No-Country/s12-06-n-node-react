import { useState } from "react";
import CheckboxIcon from "../../../icons/CheckboxIcon";

function Checkbox({ id, value, checkboxTitle, idName }) {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};
	return (
		<div className="flex gap-1">
			<input
				type="checkbox"
				id={idName}
				value={value}
				className="hidden"
				onChange={toggleCheckbox}
			/>
			<label
				onClick={toggleCheckbox}
				htmlFor={idName}
				className="cursor-pointer flex items-center gap-2 text-xs"
			>
				<CheckboxIcon className={isChecked ? "fill-principal" : "stroke-principal "} />
				{checkboxTitle}
			</label>
		</div>
	);
}

export default Checkbox;
