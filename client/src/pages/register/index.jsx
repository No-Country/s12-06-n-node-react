import GeneralData from "./components/sectionGeneralData";
import ContactData from "./components/sectionContactData";
import PaymentMethods from "./components/sectionPaymentMethods";
import SectionProductsData from "./components/sectionProductsData";
import { useRestaurantStore } from "../../stores";


export default function RegisterPage() {

    const showBottomSheet = useRestaurantStore(state => state.showBottomSheet)

    return (
        <form className="bg-secundario h-full px-4 flex flex-col gap-6">
            <GeneralData />
            <ContactData />
            <PaymentMethods />
            <SectionProductsData showBottomSheet={showBottomSheet} />
        </form>
    )
}
