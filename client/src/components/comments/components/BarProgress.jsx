export default function BarProgress() {
	return (
		<div className="flex flex-col gap-1 w-full">
			<div className="w-36 desktop:w-full bg-texts rounded-full h-2">
				<div className="bg-principal h-2 rounded-full w-20"></div>
			</div>
			<div className="w-36 desktop:w-full bg-texts rounded-full h-2">
				<div className="bg-principal h-2 rounded-full w-20"></div>
			</div>
			<div className="w-36 desktop:w-full bg-texts rounded-full h-2">
				<div className="bg-principal h-2 rounded-full w-20"></div>
			</div>
			<div className="w-36 desktop:w-full bg-texts rounded-full h-2">
				<div className="bg-principal h-2 rounded-full w-20"></div>
			</div>
			<div className="w-36 desktop:w-full bg-texts rounded-full h-2">
				<div className="bg-principal h-2 rounded-full w-10"></div>
			</div>
		</div>
	);
}
