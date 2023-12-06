import Button from "../../components/button/Button";
import qualifyIcon from "../../assets/icons/qualify.svg";
import Comments from "../../components/comments";
import BarProgress from "../../components/comments/components/BarProgress";
import starIcon from "../../assets/icons/star.svg";

export default function Ratings() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex gap-4">
        <BarProgress />
        <Button text="Calificar" icon={qualifyIcon} alt="qualify icon" yellow rounded />
      </div>
      <Comments />
    </div>
  );
}