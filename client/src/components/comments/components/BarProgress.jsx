export default function BarProgress({ value, number }) {
	return (
		<div className="flex flex-row items-center justify-center gap-1 w-full">
			<p className="text-[10px]">{number}</p>
			<div className="w-36 desktop:w-full bg-texts rounded-full h-2">
				<div style={{ width: `${value}%` }} className="bg-principal h-2 rounded-full"></div>
			</div>
		</div>
	);
}
