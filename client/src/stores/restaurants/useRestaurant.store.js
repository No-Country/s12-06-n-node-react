import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useRestaurantStore = create(

    persist(

        (set) => ({

            showBottomSheet: false,
            setShowBottomSheet: (show) => set({ showBottomSheet: show }),

        }),
        { name: 'restaurant-store' }

    )
)