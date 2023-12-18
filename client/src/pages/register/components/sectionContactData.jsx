import DropDownBtn from "./buttons/dropDownBtn";
import Input from "./buttons/input";
import SectionTitle from "./titles/sectionTitle";

export default function ContactData() {
	return (
		<SectionTitle title="Contacto">
			<div className="flex flex-col gap-2 -mt-2">
				<h2 className="leading-none">Horario</h2>
				<div className="flex items-center gap-2 text-texts">
					<div className="flex items-center gap-1">
						<DropDownBtn title="00:00 hs" />
						<span className="text-xs">a</span>
						<DropDownBtn title="00:00 hs" />
					</div>
					<div className="flex items-center gap-2">
						<div className="h-5 w-5 rounded-full flex justify-center items-center border border-texts">
							<div className="h-3 w-3 rounded-full bg-gradient-to-br from-principal via-white to-principal"></div>
						</div>
						<span className="text-xs w-auto">Horario cortado</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="direccion" className="leading-none">
					Dirección
				</label>
				<Input idFor="direccion" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="telefono" className="leading-none">
					Número de teléfono
				</label>
				<Input idFor="telefono" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="facebook" className="leading-none">
					Facebook
				</label>
				<Input idFor="facebook" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="instagram" className="leading-none">
					Instagram
				</label>
				<Input idFor="instagram" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="twitter" className="leading-none">
					X (Ex Twitter)
				</label>
				<Input idFor="twitter" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="whatsapp" className="leading-none">
					Whatsapp
				</label>
				<Input idFor="whatsapp" />
			</div>
		</SectionTitle>
	);
}
