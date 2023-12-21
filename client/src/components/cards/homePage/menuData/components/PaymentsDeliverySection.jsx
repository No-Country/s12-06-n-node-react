import SectionA from "./SectionA";
import SectionB from "./SectionB";

export default function PaymentsDeliverySection() {
	return (
		<section className="flex flex-row justify-between w-full">
			<SectionA />
			<SectionB />
		</section>
	);
}

