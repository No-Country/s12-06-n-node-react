export default function CategoryItem({ text }) {
	return (
		<p className="rounded text-xs hover:bg-texts hover:text-secundario hover:border-none hover:shadow-4xl p-1 border-principal border-[0.5px] inline-flex">
			{text}
		</p>
	);
}
