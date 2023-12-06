export default function ButtonOpenOrClose({ openRestaurant, disabled }) {
	return (
		<button
			disabled={disabled}
			className={`rounded ${
				openRestaurant ? "bg-[#1BF261] text-texts" : "bg-[#F21F1B] text-secundario"
			} -1 px-1.5 text-[10px]`}
		>
			{openRestaurant ? "Abierto" : "Cerrado"}
		</button>
	);
}
