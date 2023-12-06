import ButtonOpenOrClose from "../../../button/ButtonOpenOrClose";
import { useState } from "react";
import ContactSection from "./components/ContactSection";
import PaymentsDeliverySection from "./components/PaymentsDeliverySection";

export default function MenuData({ categories, phoneNumber, schedule, openRestaurant, location }) {
	const [showContact, setShowContact] = useState(true);

	const changeSection = isContact => {
		setShowContact(isContact);
	};

	return (
		<div className="flex flex-col items-start justify-start p-4 w-[375px]">
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
					categories={categories}
					phoneNumber={phoneNumber}
					schedule={schedule}
					location={location}
				/>
			) : (
				<PaymentsDeliverySection />
			)}
		</div>
	);
}
