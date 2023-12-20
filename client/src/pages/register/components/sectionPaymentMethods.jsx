import CheckButton from "./checkButton";
import SectionTitle from "./titles/sectionTitle";

const MethodsDataFC = [
	{ id: 1, name: "Efectivo" },
	{ id: 2, name: "Tarjeta de débito" },
	{ id: 3, name: "Tarjeta de crédito" },
	{ id: 4, name: "Código QR" },
	{ id: 5, name: "Transferencia" },
];
const MethodsDataSC = [
	{ id: 1, name: "Consumo en el local" },
	{ id: 2, name: "Entrega a Domicilio" },
	{ id: 3, name: "Retiro en el local" },
];

export default function PaymentMethods() {
	return (
		<SectionTitle title="Métodos de pago">
			<div className="flex justify-between -mt-2">
				<div className="flex flex-col gap-4">
					{MethodsDataFC.map(method => (
						<CheckButton key={method.id} checkName={method.name} />
					))}
				</div>
				<div className="flex flex-col gap-4">
					{MethodsDataSC.map(method => (
						<CheckButton key={method.id} checkName={method.name} />
					))}
				</div>
			</div>
		</SectionTitle>
	);
}
