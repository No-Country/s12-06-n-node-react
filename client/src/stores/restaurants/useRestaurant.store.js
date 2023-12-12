import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useRestaurantStore = create(

    (set) => ({

        showBottomSheet: false,
        setShowBottomSheet: (show) => set({ showBottomSheet: show }),

        hideRegisterSection: false,
        setHideRegisterSection: (hide) => set({ hideRegisterSection: hide }),
    }),
    { name: 'restaurant-store' }

)