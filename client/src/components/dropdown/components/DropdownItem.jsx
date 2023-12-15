export default function DropdownItem({ onClick, type, title, icon, alt }) {
	return (
		<button
			onClick={onClick}
			type={type}
			class="flex items-center gap-2 text-sm text-texts stroke-texts"
		>
			{icon}
			{title}
		</button>
	);
}
