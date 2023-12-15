import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useBearStore = create(

    persist(

        (set, get) => ({
            
            
            
        }),
        { name: 'restaurant-store' }

    )
)