import Dropdown from "../../dropdown";
import Ratings from "./Ratings";
import DropdownItem from "../../dropdown/components/DropdownItem";
import DeleteIcon from "../../../icons/DeleteIcon";
import EditIcon from "../../../icons/EditIcon";
import DotMenuIcon from "../../../icons/DotMenuIcon";
import { formatCreatedAt } from "../../../helpers/formatCreatedAt";
import user from "../../../assets/images/user.webp";

export default function Commentary({ name, commentary, createdAt, scopes }) {
	const timeAgo = formatCreatedAt(createdAt);

	return (
		<div className="flex flex-row gap-4 w-[343px] desktop:w-full">
			<img src={user} alt={name} className="rounded-full h-10 w-10 object-cover object-center" />
			<div className="w-full">
				<div className="flex flex-row items-center justify-between gap-auto">
					<p className="text-texts text-sm font-medium">{name}</p>
					<div className="flex flex-row items-center justify-end gap-2">
						<p className="text-disabled text-xs ">{timeAgo}</p>
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
