import Button from "../../components/button/Button";
import qualifyIcon from "../../assets/icons/qualify.svg";
import Comments from "../../components/comments";
import BarProgress from "../../components/comments/components/BarProgress";
import starIcon from "../../assets/icons/star.svg";

export default function Ratings() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex gap-4">
       <div className="mt-5">
        <div className="flex justify-center">
           <img src={starIcon} alt="star icon" />
           <h1 className="font-semibold text-lg ml-2">3</h1>
        </div>
        <h2 className="font-semibold">22 opiniones</h2>
        </div>
        <BarProgress />
        <div className="mt-5">
        <Button text="Calificar" icon={qualifyIcon} alt="qualify icon" yellow rounded  />
        </div>
      </div>
      <Comments />
    </div>
  );
}