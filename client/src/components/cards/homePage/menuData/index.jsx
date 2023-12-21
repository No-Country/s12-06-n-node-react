import ButtonOpenOrClose from "../../../button/ButtonOpenOrClose";
import { useState } from "react";
import ContactSection from "./components/ContactSection";
import PaymentsDeliverySection from "./components/PaymentsDeliverySection";
import SocialSection from "./components/SocialSection";
import ButtonRatings from "./components/ButtonRatings";
import CategoryItem from "./components/CategoryItem";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";

export default function MenuData({
	id,
	categories,
	phoneNumber,
	schedule,
	openRestaurant,
	location,
	stars,
	totalRatings,
}) {
	const [showContact, setShowContact] = useState(true);

	const changeSection = isContact => {
		setShowContact(isContact);
	};

	return (
		<>
			<div className="items-start w-full justify-start flex-col gap-2 pt-6 p-4 tablet:hidden desktop:flex bg-secundario desktop:max-w-[1200px]">
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-2 h-5">
							<ButtonOpenOrClose disabled openRestaurant={openRestaurant} />
							<div className="flex flex-row gap-2">
								{categories.map(category => (
									<CategoryItem key={category} text={category} />
								))}
							</div>
						</div>
						<ContactSection
							id={id}
							categories={categories}
							phoneNumber={phoneNumber}
							schedule={schedule}
							location={location}
							stars={stars}
							totalRatings={totalRatings}
						/>
					</div>
					<SectionA />
					<SectionB />
					<div className="flex flex-col justify-center">
						<ButtonRatings stars={stars} id={id} totalRatings={totalRatings} />
					</div>
				</div>
				<SocialSection />
			</div>
			<div className="flex flex-col items-start justify-start p-4 desktop:hidden bg-secundario w-full">
				<div className="flex flex-row items-start justify-start gap-4 mb-5 w-full">
					<button onClick={() => changeSection(true)} className="text-sm/5 font-medium">
						Contacto{showContact && <div className="bg-principal h-1 rounded-lg mt-2"></div>}
					</button>
					<button onClick={() => changeSection(false)} className="text-sm/5 font-medium">
						Pago y entrega{!showContact && <div className="bg-principal h-1 rounded mt-2"></div>}
					</button>
					{showContact && (
						<div className="ml-auto">
							<ButtonOpenOrClose disabled openRestaurant={openRestaurant} />
						</div>
					)}
				</div>
				{showContact ? (
					<ContactSection
						id={id}
						categories={categories}
						phoneNumber={phoneNumber}
						schedule={schedule}
						location={location}
						stars={stars}
						totalRatings={totalRatings}
					/>
				) : (
					<PaymentsDeliverySection />
				)}
			</div>
		</>
	);
}
