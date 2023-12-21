export default function CategoryItem({ text }) {
	return (
		<p className="rounded text-xs hover:bg-texts hover:text-secundario hover:border-none hover:shadow-4xl px-1 py-0.5 border-principal border-[0.5px]">
			{text}
		</p>
	);
}
