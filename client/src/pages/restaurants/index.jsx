import React from 'react'
import MenuData from '../../components/cards/homePage/menuData'

import HeaderImage from '../../assets/images/imageCard.png'
import FoodTags from '../../components/foodTags'
import RestaurantCategory from '../../components/restaurantCategory'

export default function RestaurantPage() {
    return (
        <main>
            <div className='w-full h-44 flex items-center justify-center overflow-hidden'>
                <img src={HeaderImage} alt="Header image" className='w-full h-auto' />
            </div>
            <MenuData categories={["Pizza", "Grill"]} />
            <FoodTags />
            <RestaurantCategory />
        </main>
    )
}
