import bankIcon from "../../../../../assets/icons/bank.svg";
import cutleryIcon from "../../../../../assets/icons/cutlery.svg";
import deliveryIcon from "../../../../../assets/icons/delivery.svg";
import shopIcon from "../../../../../assets/icons/shop.svg";
import cashIcon from "../../../../../assets/icons/cash.svg";
import qrCodeIcon from "../../../../../assets/icons/qr-code.svg";
import creditsCardsIcon from "../../../../../assets/icons/credits-cards.svg";
import Item from "./Item";

export default function PaymentsDeliverySection() {
	return (
		<section className="flex flex-row justify-between w-full">
			<div className="flex flex-col gap-2">
				<Item text="Efectivo" icon={cashIcon} />
				<Item text="Débito" icon={creditsCardsIcon} />
				<Item text="Crédito" icon={creditsCardsIcon} />
				<Item text="Código Qr" icon={qrCodeIcon} />
				<Item text="Transferencia" icon={bankIcon} />
			</div>
			<div className="flex flex-col gap-2">
				<Item text="Consumo en el local" icon={cutleryIcon} />
				<Item text="Entrega a domicilio" icon={deliveryIcon} />
				<Item text="Retiro en tienda" icon={shopIcon} />
			</div>
		</section>
	);
}
