import { create } from 'zustand'

export const useSearch = create(

    (set) => ({

        search: '',
        setSearch: (search) => set({ search: search }),

        isExpanded: false,
        setIsExpanded: (isExpanded) => set({ isExpanded: isExpanded }),

        searchData: '',
        setSearchData: (searchData) => set({ searchData: searchData }),
    })

)