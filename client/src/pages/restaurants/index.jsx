import React from 'react'
import MenuData from '../../components/cards/homePage/menuData'

export default function RestaurantPage() {
    return (
        <main>
            <MenuData categories={["Pizza", "Grill"]} />
        </main>
    )
}
