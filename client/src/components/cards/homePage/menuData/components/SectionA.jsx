import Item from "./Item";
import BankIcon from "../../../../../icons/BackIcon";
import QrIcon from "../../../../../icons/QrIcon";
import CashIcon from "../../../../../icons/CashIcon";
import CardsIcon from "../../../../../icons/CardsIcon";

function SectionA() {
	return (
		<div className="flex flex-col gap-2">
			<Item text="Efectivo" icon={<CashIcon />} />
			<Item text="Débito" icon={<CardsIcon />} />
			<Item text="Crédito" icon={<CardsIcon />} />
			<Item text="Código Qr" icon={<QrIcon />} />
			<Item text="Transferencia" icon={<BankIcon />} />
		</div>
	);
}

export default SectionA;
