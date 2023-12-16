function Item({ icon, text }) {
	return (
		<div className="flex flex-row items-center gap-2 stroke-texts">
			{icon}
			<p className="text-texts text-xs">{text}</p>
		</div>
	);
}

export default Item;