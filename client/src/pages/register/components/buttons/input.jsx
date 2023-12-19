import React from "react";

const Input = React.forwardRef(({ idFor, ...rest }, ref) => (
	<input
		id={idFor}
		ref={ref}
		className="border bg-transparent border-principal rounded-lg w-full h-[42px] outline-principal p-2"
		type="text"
		{...rest}
	/>
));

export default Input;