export default function Button({ onClick, text, icon, alt, rounded, yellow, white, brown, type, wFull }) {
	return (
		<button
			type={type}
			className={`
			${rounded ? "rounded-2xl" : " rounded-lg"} 
			${
				white
					? "bg-secundario text-texts"
					: yellow
					  ? "bg-principal text-texts hover:bg-texts hover:text-principal"
					  : brown
					    ? "bg-texts text-principal hover:bg-principal hover:text-texts"
					    : ""
			} 
			${
				wFull ? "w-full" : ""
			} flex flex-row items-center justify-center shadow-3xl gap-1 py-1 px-2 text-md`}
			onClick={onClick}
		>
			{text}
			<img src={icon} alt={alt} />
		</button>
	);
}
