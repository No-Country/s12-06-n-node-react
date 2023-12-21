import CategoryItem from "./CategoryItem";
import Item from "./Item";
import ClockIcon from "../../../../../icons/ClockIcon";
import PhoneIcon from "../../../../../icons/PhoneIcon";
import LocationIcon from "../../../../../icons/LocationIcon";
import SocialSection from "./SocialSection";
import ButtonRatings from "./ButtonRatings";

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
					<Item text={location} icon={<LocationIcon />} />
					<Item text={schedule} icon={<ClockIcon />} />
					<Item text={phoneNumber} icon={<PhoneIcon />} />
				</div>
				<div className="flex flex-col items-end gap-4 justify-end desktop:hidden">
					<ButtonRatings stars={stars} id={id} totalRatings={totalRatings} />
					<div className="flex flex-row gap-2">
						{categories.map(category => (
							<CategoryItem key={category} text={category} />
						))}
					</div>
				</div>
			</div>
			<div className="desktop:hidden">
				<SocialSection />
			</div>
		</section>
	);
}
