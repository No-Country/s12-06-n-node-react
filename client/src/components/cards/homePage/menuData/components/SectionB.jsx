import ShopIcon from "../../../../../icons/ShopIcon";
import DeliveryIcon from "../../../../../icons/DeliveryIcon";
import CutleryIcon from "../../../../../icons/CutleryIcon";
import Item from "./Item";

function SectionB() {
	return (
		<div className="flex flex-col gap-2">
			<Item text="Consumo en el local" icon={<CutleryIcon className="stroke-none fill-texts" />} />
			<Item text="Entrega a domicilio" icon={<DeliveryIcon className="stroke-none fill-texts" />} />
			<Item text="Retiro en tienda" icon={<ShopIcon />} />
		</div>
	);
}

export default SectionB;
