import { create } from 'zustand'

export const useRestaurantStore = create(

    (set) => ({

        restaurantName: '',
        setRestaurantName: (name) => set({ restaurantName: name }),

        showBottomSheet: false,
        setShowBottomSheet: show => set({ showBottomSheet: show }),

        hideRegisterSection: false,
        setHideRegisterSection: (hide) => set({ hideRegisterSection: hide }),

        categoryDataStore: [],
        setCategoryDataStore: (data) => set({ categoryDataStore: data }),

        restaurantDataStore: [],
        setRestaurantDataStore: (data) => set({ restaurantDataStore: data }),
    })
)