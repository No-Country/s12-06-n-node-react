import { getAllCategories } from "../../api/yumiverse_api";
import categoryIcons from "../../helpers/categoryIcons";
import { useFetch } from "../../hooks/useFetch";
import { useRestaurantStore } from "../../stores/restaurants/useRestaurant.store";
import { useSearch } from "../../stores/search/useSearch.store";
import CategoryCard from "../cards/homePage/categoryCard";
import Slider from "../sliders/section-slider";

const handleMapCategoryIcon = (categoryId) => {
    return categoryIcons[categoryId];
};

export default function CategoryList() {

    const setIsExpanded = useSearch(state => state.setIsExpanded);
    const setSearch = useSearch(state => state.setSearch);
    const setCategoryDataStore = useRestaurantStore(state => state.setCategoryDataStore);
    const categoryDataStore = useRestaurantStore(state => state.categoryDataStore);

    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(getAllCategories);

    const handleCategoryClick = (categoryName) => {
        setSearch(categoryName);
        setIsExpanded(true);
    }

    if (categoryLoading) {
        return <p>Loading...</p>
    }

    if (!categoryError && !categoryLoading && categoryData) {
        setCategoryDataStore(categoryData);
    }

    // console.log({ setCategoryDataStore });

    console.log('Hola desde category');
    console.log({ categoryDataStore });

    return (
        <>
            {
                <Slider data={categoryData}>
                    {
                        item => handleMapCategoryIcon(item._id) &&
                            <CategoryCard
                                title={item.category}
                                onClick={() => handleCategoryClick(item.category)}
                                Icon={handleMapCategoryIcon(item._id)} />
                    }
                </Slider>
            }
        </>
    )
}
