import { useRestaurantStore } from "../../../stores";
import AddBtn from "./buttons/addBtn";
import Input from "./buttons/input";
import CheckButton from "./checkButton";

export default function RegisterBottomSheet({ showBottomSheet }) {
	const setShowBottomSheet = useRestaurantStore(state => state.setShowBottomSheet);
	const handleAddProduct = () => {
		setShowBottomSheet(!showBottomSheet);
	};

	return (
		<div
			className={`fixed bottom-0 left-0 w-full h-screen ${
				showBottomSheet ? "z-10" : "-z-10"
			} bg-transparent`}
		>
			<div
				onClick={handleAddProduct}
				className={`relative w-full h-full bg-texts opacity-25 ${
					showBottomSheet ? "z-10" : "-z-10"
				}`}
			></div>

			<div
				className={`absolute bottom-0 z-10 left-0 h-[90%] pt-2 pb-4 px-4 w-full rounded-t-xl bg-white ${
					showBottomSheet ? "translate-y-0" : "translate-y-full"
				} transition-transform duration-300 overflow-y-auto scrollbar-none`}
			>
				<div className="w-full flex flex-col gap-4">
					<div className="flex justify-between items-center">
						<span className="font-medium">Añadir producto</span>
						<span className="text-sm">Cerrar X</span>
					</div>
					<div className="w-full grid grid-cols-3 h-40 gap-2">
						<div className="flex justify-center items-center h-full w-full border border-principal rounded">
							<AddBtn title="Añadir" />
						</div>
						<div className="flex justify-center items-center h-full w-full border border-principal rounded">
							<AddBtn title="Añadir" />
						</div>
						<div className="flex justify-center items-center h-full w-full border border-principal rounded">
							<AddBtn title="Añadir" />
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<label htmlFor="productCategory" className="leading-none">
							Categoría del producto <span className="italic">(Ej: Hamburguesa)</span>
						</label>
						<Input idFor="productCategory" />
					</div>
					<div className="flex flex-col gap-4">
						<label htmlFor="productName" className="leading-none">
							Nombre del producto
						</label>
						<Input idFor="productName" />
					</div>
					<div className="flex gap-6">
						<div className="flex flex-col gap-4 max-w-[156px]">
							<label htmlFor="price" className="leading-none">
								Precio
							</label>
							<Input idFor="price" />
						</div>
						<div className="flex flex-col gap-4">
							<CheckButton checkName="Sólo de temporada" />
							<div className="flex items-center gap-3">
								<span className="text-xs">¿Disponible?</span>
								<div className="flex justify-start items-center w-[58px] h-6 border border-principal rounded-full px-[3px]">
									<div className="h-[18px] w-[18px] border border-texts rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<label htmlFor="description" className="leading-none">
							Precio
						</label>
						<textarea className="min-h-[127px] w-full p-2 border border-principal rounded-lg outline-none overflow-y-auto" />
					</div>
				</div>
			</div>
		</div>
	);
}
