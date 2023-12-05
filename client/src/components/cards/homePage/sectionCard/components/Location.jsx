import locationIcon from "../../../../../assets/icons/location.svg";

export default function Location({ location }) {
	return (
		<div className="bg-texts/90 px-2 h-[26px] flex flex-row items-center gap-2 rounded-lg drop-shadow-md">
			<img src={locationIcon} alt="Location Icon" />
			<p className="text-secundario text-xs capitalize">{location}</p>
		</div>
	);
}
