import facebookIcon from "../../../../../assets/icons/facebook.svg";
import twitterIcon from "../../../../../assets/icons/twitter.svg";
import whatsappIcon from "../../../../../assets/icons/whatsapp.svg";
import instagramIcon from "../../../../../assets/icons/instagram.svg";
import phoneIcon from "../../../../../assets/icons/phone.svg";
import locationIcon from "../../../../../assets/icons/location.svg";
import clockIcon from "../../../../../assets/icons/clock.svg";
import pedidosYaIcon from "../../../../../assets/icons/pedidos-ya.svg";
import CategoryItem from "./CategoryItem";
import Item from "./Item";
import SocialItem from "./SocialItem";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../../../../icons/ArrowRightIcon";
import StarIcon from "../../../../../icons/StarIcon";

export default function ContactSection({
	id,
	categories,
	phoneNumber,
	schedule,
	location,
	stars,
	totalRatings,
}) {
	return (
		<section className="w-full">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="flex flex-col gap-1">
					<Item text={location} icon={locationIcon} />
					<Item text={schedule} icon={clockIcon} />
					<Item text={phoneNumber} icon={phoneIcon} />
				</div>
				<div className="flex flex-col items-end gap-4 justify-end">
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
					<div className="flex flex-row gap-2">
						{categories.map(category => (
							<CategoryItem key={category} text={category} />
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-start items-start gap-2 mt-2">
				<SocialItem nameSocialNetwort="facebook" icon={facebookIcon} />
				<SocialItem nameSocialNetwort="twitter" icon={twitterIcon} />
				<SocialItem nameSocialNetwort="whatsapp" icon={whatsappIcon} />
				<SocialItem nameSocialNetwort="instagram" icon={instagramIcon} />
				<SocialItem nameSocialNetwort="instagram" icon={pedidosYaIcon} bgRed />
			</div>
		</section>
	);
}
