import facebookIcon from "../../../../../assets/icons/facebook.svg";
import twitterIcon from "../../../../../assets/icons/twitter.svg";
import whatsappIcon from "../../../../../assets/icons/whatsapp.svg";
import instagramIcon from "../../../../../assets/icons/instagram.svg";
import phoneIcon from "../../../../../assets/icons/phone.svg";
import locationIcon from "../../../../../assets/icons/location.svg";
import clockIcon from "../../../../../assets/icons/clock.svg";
import starIcon from "../../../../../assets/icons/star.svg";
import navArrowRightIcon from "../../../../../assets/icons/nav-arrow-right.svg";
import CategoryItem from "./CategoryItem";
import Item from "./Item";
import SocialItem from "./SocialItem";
import { Link } from "react-router-dom";

export default function ContactSection({ categories, phoneNumber, schedule, location }) {
	return (
		<section className="w-full">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="flex flex-col gap-1">
					<Item text={location} icon={locationIcon} />
					<Item text={schedule} icon={clockIcon} />
					<Item text={phoneNumber} icon={phoneIcon} />
				</div>
				<div className="flex flex-col items-end gap-4 justify-end">
					<Link to="/calificaciones" className="flex flex-row items-center justify-between gap-1">
						<div className="flex flex-row items-center justify-between gap-1 shadow-3xl bg-texts px-0.5 py-1 rounded">
							<img src={starIcon} alt="Star Icon" />
							<p className="font-medium text-xs text-secundario">
								3 <span className="text-[10px]">(22)</span>
							</p>
							<img src={navArrowRightIcon} alt="Arrow right" className="h-4 w-4" />
						</div>
					</Link>
					<div className="flex flex-row gap-2">
						{categories.map(category => (
							<CategoryItem text={category} />
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-start items-start gap-2 mt-2">
				<SocialItem nameSocialNetwort="facebook" icon={facebookIcon} />
				<SocialItem nameSocialNetwort="twitter" icon={twitterIcon} />
				<SocialItem nameSocialNetwort="whatsapp" icon={whatsappIcon} />
				<SocialItem nameSocialNetwort="instagram" icon={instagramIcon} />
			</div>
		</section>
	);
}
