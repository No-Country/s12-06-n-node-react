import { create } from 'zustand'

export const useRestaurantStore = create(

    (set) => ({

        restaurandDataStore: [],
        setRestaurantDataStore: (restaurandDataStore) => set({ restaurandDataStore: restaurandDataStore }),

        categoryDataStore: [],
        setCategoryDataStore: (categoryDataStore) => set({ categoryDataStore: categoryDataStore }),
        // toggleCoverageRunRedLight: false,
        // onToggleCoverageRunRedLight: () => set((state) => ({ toggleCoverageRunRedLight: !state.toggleCoverageRunRedLight })),

        restaurantName: '',
        setRestaurantName: (name) => set({ restaurantName: name }),

        showBottomSheet: false,
        setShowBottomSheet: (show) => set({ showBottomSheet: show }),

        hideRegisterSection: false,
        setHideRegisterSection: (hide) => set({ hideRegisterSection: hide }),
    }),
    // (prev, current) => prev.categoryDataStore === current.categoryDataStore
    // { name: 'restaurant-store' }

)