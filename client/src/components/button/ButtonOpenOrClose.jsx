export default function ButtonOpenOrClose({ openRestaurant, disabled }) {
	return (
		<button
			disabled={disabled}
			className={`rounded ${
				openRestaurant ? "bg-[#1BF261]" : "bg-[#F21F1B]"
			} -1 px-1.5 text-[10px] text-white`}
		>
			{openRestaurant ? "Abierto" : "Cerrado"}
		</button>
	);
}
