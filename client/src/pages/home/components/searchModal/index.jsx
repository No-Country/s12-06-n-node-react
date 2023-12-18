import React, { useEffect, useState } from 'react'
import SectionCardHomePage from '../../../../components/cards/homePage/sectionCard'
import FilterBar from '../../../../components/filterBar'
import { useSearch } from '../../../../stores/search/useSearch.store';
import { useRestaurantStore } from '../../../../stores/restaurants/useRestaurant.store';

export default function SearchModal({ className }) {

    const [searchResults, setSearchResults] = useState([]);
    const search = useSearch(state => state.search);
    const restaurantDataStore = useRestaurantStore(state => state.restaurantDataStore);

    useEffect(() => {
        const searchTerm = search.toLowerCase();
        const searchResults = restaurantDataStore.filter(restaurant => {
            const restaurantName = restaurant.name.toLowerCase();
            const restaurantDescription = restaurant.description.toLowerCase();

            if (
                restaurantName.includes(searchTerm) ||
                restaurantDescription.includes(searchTerm)
            ) {
                return true;
            }

            const categoriesMatch = restaurant.categories.some(cat =>
                cat.category.toLowerCase().includes(searchTerm)
            );
            return categoriesMatch;
        })

        setSearchResults(searchResults);
    }, [search, restaurantDataStore])

    const formatAddress = (address) => {
        const { street, city, state, country } = address;
        return `${street}, ${city}, ${state}, ${country}`;
    }

    return (
        <div className={`min-h-screen flex flex-col gap-4 ${className} px-4 sticky w-full`}>
            <div className='h-auto w-full flex justify-between items-center pb-4 text-texts'>
                <FilterBar results={searchResults.length} />
            </div>

            {searchResults.map(result =>
                <SectionCardHomePage
                    key={result.id}
                    id={result._id}
                    location={formatAddress(result.address)}
                    nameRestaurant={result.name}
                    imageRestaurant={result.url_img_restaurant}
                    categories={result.categories}
                    openRestaurant={result.isOpen}
                    numberOfScores={result.stars}
                    scores={result.totalRating}
                />
            )}
        </div>
    )
}
