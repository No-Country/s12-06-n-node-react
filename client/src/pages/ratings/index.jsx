import Button from "../../components/button/Button";
import qualifyIcon from "../../assets/icons/qualify.svg";
import Comments from "../../components/comments";
import BarProgress from "../../components/comments/components/BarProgress";
import starIcon from "../../assets/icons/star.svg";

export default function Ratings() {
	return (
		<div className="flex items-center flex-col p-4 gap-6 min-w-[375px]">
			<div className="flex gap-4 items-center">
				<div>
					<div className="flex justify-center">
						<img src={starIcon} alt="star icon" />
						<p className="text-xl ml-2">3</p>
					</div>
					<h2 className="text-xs">22 opiniones</h2>
				</div>
				<BarProgress />
				<Button text="Calificar" icon={qualifyIcon} alt="qualify icon" yellow rounded />
			</div>
			<Comments />
		</div>
	);
}
