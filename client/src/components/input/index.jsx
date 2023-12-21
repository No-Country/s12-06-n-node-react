function Input({ type, value, onChange, name, htmlFor, labelName, className, max, min, pattern }) {
	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			<label htmlFor={htmlFor}>{labelName}</label>
			<input
				id={htmlFor}
				type={type}
				value={value}
				onChange={onChange}
				name={name}
				min={min}
				max={max}
				pattern={pattern}
				className="border bg-transparent border-principal rounded-lg w-full h-[42px] outline-principal p-2"
			/>
		</div>
	);
}

export default Input;
