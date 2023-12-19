export default function DropdownItem({ onClick, type, title, icon }) {
	return (
		<button
			onClick={onClick}
			type={type}
			className="flex items-center gap-2 text-sm text-texts stroke-texts"
		>
			{icon}
			{title}
		</button>
	);
}
