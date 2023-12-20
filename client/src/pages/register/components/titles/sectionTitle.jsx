import { useRestaurantStore } from "../../../../stores";
import ArrowDownIcon from "../../assets/arrowDownIcon";

export default function SectionTitle({ title, children }) {
	const hideRegisterSection = useRestaurantStore(state => state.hideRegisterSection);
	const setHideRegisterSection = useRestaurantStore(state => state.setHideRegisterSection);

	const handleHideRegisterSection = () => {
		setHideRegisterSection(!hideRegisterSection);
	};

	return (
		<section className="flex flex-col gap-6 text-texts">
			<div
				onClick={handleHideRegisterSection}
				className="flex justify-between border-y-2 border-principal"
			>
				<h2 className="font-bold">{title}</h2>
				<ArrowDownIcon />
			</div>
			{children}
		</section>
	);
}
