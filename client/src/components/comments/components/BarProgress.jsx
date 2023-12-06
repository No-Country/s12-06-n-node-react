export default function BarProgress() {
	return (
		<div className="flex flex-col gap-4">
			<div className="w-56 bg-gray-950 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-yellow-400 h-2.5 rounded-full w-22"></div>
			</div>
			<div className="w-56 bg-gray-950 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-yellow-400 h-2.5 rounded-full w-20"></div>
			</div>
			<div className="w-56 bg-gray-950 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-yellow-400 h-2.5 rounded-full w-40"></div>
			</div>
			<div className="w-56 bg-gray-950 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-yellow-400 h-2.5 rounded-full w-20"></div>
			</div>
			<div className="w-56 bg-gray-950 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-yellow-400 h-2.5 rounded-full w-10"></div>
			</div>
		</div>
	);
}
