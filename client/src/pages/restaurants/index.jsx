import { useParams } from 'react-router-dom'
import MenuData from '../../components/cards/homePage/menuData'


import HeaderImage from '../../assets/images/imageCard.png'
import FoodTags from '../../components/foodTags'
import RestaurantCategory from '../../components/restaurantCategory'
import BottomSheet from '../../components/bottomSheet'
import { useState } from 'react'
import { useRestaurantStore } from '../../stores'

export default function RestaurantPage() {
    const { restaurant_id } = useParams();

    const showBottomSheet = useRestaurantStore(state => state.showBottomSheet)

    const handleCardClick = () => {
        setShowBottomSheet(!showBottomSheet)
    }

    return (
        <main>
            <div className='w-full h-44 flex items-center justify-center overflow-hidden'>
                <img src={HeaderImage} alt="Header image" className='w-full h-auto' />
            </div>
            <MenuData categories={["Pizza", "Grill"]} />
            <FoodTags />
            <RestaurantCategory showBottomSheet={showBottomSheet} />
            <BottomSheet showBottomSheet={showBottomSheet} />
        </main>
    )
}
