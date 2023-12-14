import { useParams } from 'react-router-dom'
import MenuData from '../../components/cards/homePage/menuData'


import HeaderImage from '../../assets/images/imageCard.png'
import FoodTags from '../../components/foodTags'
import RestaurantCategory from '../../components/restaurantCategory'
import BottomSheet from '../../components/bottomSheet'
import { useRestaurantStore } from '../../stores'
import { getRestaurantById } from '../../api/yumiverse_api'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'


export default function RestaurantPage() {
    const { restaurantId } = useParams();
    const showBottomSheet = useRestaurantStore(state => state.showBottomSheet)
    const setRestaurantName = useRestaurantStore(state => state.setRestaurantName);
    const restaurantName = useRestaurantStore(state => state.restaurantName);


    const { data = {}, loading, error } = useFetch(() => getRestaurantById(restaurantId));
    const { name, description, categories, phone, isOpen, stars, totalRatings } = data;

    useEffect(() => {
        setRestaurantName(name);
    }, [setRestaurantName, name])

    return (
        <main className='flex flex-col'>
            <div className='w-full h-44 flex items-center justify-center overflow-hidden'>
                <img src={HeaderImage} alt="Header image" className='w-full h-auto' />
            </div>
            <MenuData phoneNumber={phone} categories={["Pizza", "Grill"]} openRestaurant={isOpen} stars={stars} totalRatings={totalRatings} />
            <FoodTags />
            <RestaurantCategory showBottomSheet={showBottomSheet} />
            <BottomSheet showBottomSheet={showBottomSheet} />
        </main>
    )
}
