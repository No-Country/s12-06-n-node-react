import Dropdown from "../../dropdown";
import Ratings from "./Ratings";
import DropdownItem from "../../dropdown/components/dropdownItem";
import DeleteIcon from "../../../icons/DeleteIcon";
import EditIcon from "../../../icons/EditIcon";
import DotMenuIcon from "../../../icons/DotMenuIcon";

export default function Commentary({ name, image, commentary, createdAt, scopes }) {
	return (
		<div className="flex flex-row gap-4 w-[343px]">
			<img src={image} alt={name} className="rounded-full h-10 w-10 object-cover object-center" />
			<div>
				<div className="flex flex-row items-center justify-between gap-auto">
					<p className="text-texts text-sm font-medium">{name}</p>
					<div className="flex flex-row items-center justify-end gap-2">
						<p className="text-disabled text-xs ">{createdAt}</p>
						<Dropdown white icon={<DotMenuIcon />} circularButton>
							<DropdownItem title="Eliminar" icon={<DeleteIcon />} />
							<DropdownItem title="Editar" icon={<EditIcon />} />
						</Dropdown>
					</div>
				</div>
				<Ratings scopes={scopes} />
				<p className="text-texts text-sm mt-2">{commentary}</p>
			</div>
		</div>
	);
}
