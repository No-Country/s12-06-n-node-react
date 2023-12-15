import { useRestaurantStore } from "../../stores"

export default function BottomSheet({ showBottomSheet }) {

    const setShowBottomSheet = useRestaurantStore(state => state.setShowBottomSheet)

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-secundario">
            <div className={`flex flex-col justify-end items-center text-texts fixed top-0 left-0 w-full h-full ${showBottomSheet ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all z-10`}>
                <div
                    onClick={() => setShowBottomSheet(!showBottomSheet)}
                    style={{ cursor: 'pointer' }}
                    className="fixed top-0 left-0 w-full h-full bg-texts opacity-25 -z-10"></div>

                {/* Content */}
                <div className={`bg-secundario w-full h-[416px] max-w-[375px] max-h-[90vh] pt-2 pb-4 px-4 rounded-t-xl relative ${showBottomSheet ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 flex flex-col gap-3`}>
                    {/* Header */}
                    <div className="flex justify-center items-center">
                        {/* Drag-icon */}
                        <div className={`${showBottomSheet ? 'cursor-grabbing' : 'cursor-grab'} select-none`}>
                            <span className="h-2 w-[152px] block bg-disabled rounded-full"></span>
                        </div>
                    </div>
                    {/* body */}
                    <div className="flex flex-col gap-5 overflow-y-auto h-full text-texts">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="w-full flex justify-between items-center">
                                <span className="cursor-pointer text-xs">Anterior</span>
                                <span className="cursor-pointer text-xs">Siguiente</span>
                            </div>
                            <div className="border border-black w-full max-w-[343px] h-[152px] rounded-lg">
                                {/* <img src="" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 flex flex-col gap-4 h-full overflow-y-auto scrollbar-none">
                        <div className="flex justify-between">
                            <h2 className="font-bold">Vinilo Beast</h2>
                            <h2 className="font-bold">$4.450</h2>
                        </div>
                        <div className="w-full h-full flex flex-col gap-3 text-sm">
                            <p>Pan artesanal de papa.
                                Doble medallón de carne vacuna, doble queso cheddar, doble queso danbo. Tomate, lechuga, chile braseado, salsa Tabasco.
                            </p>
                            <p>Incluye papas fritas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
