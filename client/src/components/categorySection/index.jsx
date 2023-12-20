import { useEffect, useState } from "react";
import { getAllRestaurants } from "../../api/yumiverse_api";
import { useFetch } from "../../hooks/useFetch";
import Slider from "../sliders/section-slider";
import SectionCardHomePage from "../cards/homePage/sectionCard";
import { useRestaurantStore } from "../../stores/restaurants/useRestaurant.store";
import { formatAddress } from "../../helpers/formatAddress";


export default function CategorySection() {
    const [filteredSections, setFilteredSections] = useState([]);

    const { data: restaurantData, loading: restaurantLoading, error: restaurantError } = useFetch(getAllRestaurants);

    const [restaurantDataStore, setRestaurantDataStore] = useRestaurantStore(state => [state.restaurantDataStore, state.setRestaurantDataStore]);
    const categoryDataStore = useRestaurantStore(state => state.categoryDataStore);

    useEffect(() => {
        if (categoryDataStore && restaurantData) {
            const sections = categoryDataStore.map(category => {
                const restaurants = restaurantData.filter(restaurant =>
                    restaurant.categories.some(cat => cat._id === category._id)
                );

                return {
                    ...category,
                    restaurants
                };
            });
            setFilteredSections(sections);
            setRestaurantDataStore(restaurantData);
        }
    }, [categoryDataStore, restaurantData]);

    return (
        <div className="flex flex-col gap-8">
            {
                filteredSections?.map(section => {
                    if (section.restaurants.length <= 0) return null
                    return (
                        <Slider Slider key={section._id} data={section.restaurants} title={section.category} >
                            {item => (
                                <SectionCardHomePage
                                key={item._id}
                                    id={item._id}
                                    location={formatAddress(item.address)}
                                    nameRestaurant={item.name}
                                    imageRestaurant={item.imgBrand}
                                    categories={item.categories}
                                    openRestaurant={item.isOpen}
                                    numberOfScores={item.stars}
                                    scores={item.totalRating}
                                />
                            )}
                        </Slider>
                    )
                })
            }
        </div>
    )
}
