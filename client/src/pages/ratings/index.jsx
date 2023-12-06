import Button from "../../components/button/Button";
import qualifyIcon from "../../assets/icons/qualify.svg";
import Comments from "../../components/comments";

export default function Ratings() {
	return (
		<div className="flex flex-col p-4 gap-6">
			<div className="flex gap-4">
				<Button text="Calificar" icon={qualifyIcon} alt="qualify icon" yellow rounded />
			</div>
			<Comments />
		</div>
	);
}
