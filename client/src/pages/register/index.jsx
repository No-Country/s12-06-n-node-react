import GeneralData from "./components/sectionGeneralData";
import ContactData from "./components/sectionContactData";
import PaymentMethods from "./components/sectionPaymentMethods";
import SectionProductsData from "./components/sectionProductsData";
import { useRestaurantStore } from "../../stores";
import { useFormStore } from "../../stores/restaurants/useForm.store";
import { postRestaurant } from "../../api/yumiverse_api";

export default function RegisterPage() {
	const formDataStore = useFormStore();

	const handleFormSubmit = async () => {
		// e.preventDefault();

		try {
			// const response = await postRestaurant({
			//     name: 'Papitas Ricas',
			//     description: formDataStore.description,
			//     phone: formDataStore.phone,
			//     email: formDataStore.email,
			// });
			// console.log('Respuesta del servidor: ', response.data);
			console.log("Enviando la información!!!");
		} catch (error) {
			console.error("Error al enviar la solicitud: ", error);
		}
	};

	const showBottomSheet = useRestaurantStore(state => state.showBottomSheet);

	return (
		<form className="bg-secundario h-full px-4 flex flex-col gap-6">
			<GeneralData />
			<ContactData />
			<PaymentMethods />
			<SectionProductsData handleFormSubmit={handleFormSubmit} showBottomSheet={showBottomSheet} />
		</form>
	);
}
