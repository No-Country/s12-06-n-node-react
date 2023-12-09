export default function Button({ onClick, text, icon, alt, rounded, yellow, white, brown }) {
	return (
		<button
			className={`${rounded ? "rounded-2xl" : " rounded-lg"} ${
				white
					? "bg-secundario  text-texts"
					: yellow
					  ? "bg-principal  text-texts"
					  : brown
					    ? "bg-texts text-principal"
					    : ""
			} flex flex-row items-center shadow-3xl gap-1 py-1 px-2 text-md`}
			onClick={onClick}
		>
			{text}
			<img src={icon} alt={alt} />
		</button>
	);
}
