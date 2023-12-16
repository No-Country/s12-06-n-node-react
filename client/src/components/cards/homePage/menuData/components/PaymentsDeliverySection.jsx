import Item from "./Item";
import BankIcon from "../../../../../icons/BackIcon";
import QrIcon from "../../../../../icons/QrIcon";
import CashIcon from "../../../../../icons/CashIcon";
import CardsIcon from "../../../../../icons/CardsIcon";
import ShopIcon from "../../../../../icons/ShopIcon";
import DeliveryIcon from "../../../../../icons/DeliveryIcon";
import CutleryIcon from "../../../../../icons/CutleryIcon";

export default function PaymentsDeliverySection() {
	return (
		<section className="flex flex-row justify-between w-full">
			<div className="flex flex-col gap-2">
				<Item text="Efectivo" icon={<CashIcon />} />
				<Item text="Débito" icon={<CardsIcon />} />
				<Item text="Crédito" icon={<CardsIcon />} />
				<Item text="Código Qr" icon={<QrIcon />} />
				<Item text="Transferencia" icon={<BankIcon />} />
			</div>
			<div className="flex flex-col gap-2">
				<Item
					text="Consumo en el local"
					icon={<CutleryIcon className="stroke-none fill-texts" />}
				/>
				<Item
					text="Entrega a domicilio"
					icon={<DeliveryIcon className="stroke-none fill-texts" />}
				/>
				<Item text="Retiro en tienda" icon={<ShopIcon />} />
			</div>
		</section>
	);
}
