import { Link } from "react-router-dom";
import ArrowRightIcon from "../../../../../icons/ArrowRightIcon";
import StarIcon from "../../../../../icons/StarIcon";

function ButtonRatings({ id, totalRatings, stars }) {
	return (
		<Link
			to={`/restaurant/${id}/ratings`}
			className="flex flex-row items-center justify-between gap-1 px-1 py-0.5 bg-principal shadow-3xl rounded stroke-secundario"
		>
			<StarIcon />
			<p className="font-medium text-xs text-texts">
				{stars} <span className="text-[10px]">({totalRatings})</span>
			</p>
			<ArrowRightIcon className="w-4 h-4" />
		</Link>
	);
}

export default ButtonRatings;
