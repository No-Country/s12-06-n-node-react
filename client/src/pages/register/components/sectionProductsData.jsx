import { useRestaurantStore } from "../../../stores";
import RegisterBottomSheet from "./bottomSheet";
import AddBtn from "./buttons/addBtn";
import SectionTitle from "./titles/sectionTitle";

export default function SectionProductsData({ showBottomSheet, handleFormSubmit }) {
    const setShowBottomSheet = useRestaurantStore(state => state.setShowBottomSheet)

    const handleAddProduct = () => {
        setShowBottomSheet(!showBottomSheet)
    }

    return (
        <SectionTitle title="Productos">
            <div className="flex flex-col gap-[76px] pb-[76px]">
                <div
                    onClick={handleAddProduct}
                    className="w-full h-36 flex justify-center items-center border border-texts rounded"
                >
                    <AddBtn title="Añadir" />
                </div>
                <div className="h-auto w-full flex justify-center">
                    <AddBtn handleFormSubmit={handleFormSubmit} type='submit' title="Publicar Tienda" storeIcon />
                </div>
            </div>
            <RegisterBottomSheet showBottomSheet={showBottomSheet} />
        </SectionTitle>
    )
}