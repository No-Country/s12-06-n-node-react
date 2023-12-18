import ArrowDown from "../../assets/icons/arrow-down";
import SearchIcon from "../../assets/icons/searchIcon";
import { useRestaurantStore } from "../../stores/restaurants/useRestaurant.store";
import Dropdown from "../dropdown";
import Checkbox from "../dropdown/components/Checkbox";
import DropdownItem from "../dropdown/components/DropdownItem";

export default function FilterBar({ results }) {

    const categoryDataStore = useRestaurantStore(state => state.categoryDataStore)

    return (
        <>
            <span className="text-sm">{results} resultados</span>
            <div className="inline-block w-auto">
                <Dropdown yellow dropdownTitle='Filtro' icon={<ArrowDown />}>
                    <div className="w-[185px] flex flex-col gap-4 px-4">
                        <DropdownItem title='Categorías' icon={<SearchIcon />} />
                        <div className="flex flex-col gap-2">
                            {
                                categoryDataStore.length > 0 && categoryDataStore.map(cat =>
                                    < Checkbox checkboxTitle={cat.category} />
                                )
                            }
                        </div>
                    </div>
                </Dropdown>
            </div>
        </>
    )
}
