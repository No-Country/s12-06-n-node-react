function Item({ icon, text }) {
	return (
		<div className="flex flex-row items-center gap-2">
			<img src={icon} alt={text} className="h-6 w-6" />
			<p className="text-texts text-xs">{text}</p>
		</div>
	);
}

export default Item;
