import Inferior from "./components/Inferior";
import Location from "./components/Location";

export default function SectionCardHomePage({
	location,
	nameRestaurant,
	imageRestaurant,
	openRestaurant,
	categories,
	numberOfScores,
	scores,
}) {
	console.log({
		location,
		nameRestaurant,
		imageRestaurant,
		openRestaurant,
		categories,
		numberOfScores,
		scores
	});

	const addressFormat = `${String(location).substring(0, 25)}...`;

	return (
		<div className="w-[208px] flex flex-col justify-between gap-4">
			<div className="relative h-[158px] drop-shadow-md">
				<img
					src={imageRestaurant}
					alt={nameRestaurant}
					className="rounded-lg object-cover object-center w-full h-full"
				/>
				<Inferior
					nameRestaurant={nameRestaurant}
					openRestaurant={openRestaurant}
					categories={categories || []}
					numberOfScores={numberOfScores}
					scores={scores}
				/>
			</div>
			<Location location={addressFormat} />
		</div>
	);
}
