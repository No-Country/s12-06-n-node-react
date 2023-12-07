export default function Dropdown({ icon }) {
	return (
		<button className="rounded-full bg-secundario shadow-3xl flex justify-center items-center w-6 h-6">
			<img src={icon} alt="menu icon" />
		</button>
	);
}
