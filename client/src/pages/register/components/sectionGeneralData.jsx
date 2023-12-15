import AddIcon from "../assets/addIcon";
import AddBtn from "./buttons/addBtn";
import DropDownBtn from "./buttons/dropDownBtn";
import Input from "./buttons/input";

export default function GeneralData() {
    return (
        <section className="flex flex-col gap-6">
            {/* Fotos de portada */}
            <div className="flex flex-col gap-2 mt-6">
                <div className="flex items-center gap-4">
                    <h2 className="leading-none">Fotos de portada</h2>
                    <p className="h-4 text-[10px] bg-disabled px-2 rounded-[4px]">Podés subir hasta 3 fotos</p>
                </div>
                <div className="w-full flex gap-2">
                    <div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
                        <AddBtn title='Añadir' />
                    </div>
                    <div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
                        <AddBtn title='Añadir' />
                    </div>
                    <div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
                        <AddBtn title='Añadir' />
                    </div>
                </div>
            </div>
            {/* Nombre del comercio */}
            <div className="flex flex-col gap-2">
                <label htmlFor="nombreComercio" className="leading-none">Nombre del comercio</label>
                <div className="w-full h-auto">
                    <Input idFor='nombreComercio' />
                    <p className="text-xs italic">No utilices símbolos ni carácteres especiales.</p>
                </div>
            </div>
            {/* Categorías */}
            <div className="flex flex-col gap-2">
                <h2 className="leading-none">Categorías <span className="font-bold">(Podés elegir 2)</span></h2>
                <div className="flex items-center gap-[18px]">
                    <DropDownBtn title='Seleccionar' />
                    <div className="justify-center items-center bg-principal w-10 h-8 rounded-lg px-2 py-1 flex"><AddIcon /></div>
                </div>
            </div>
        </section>
    )
}
