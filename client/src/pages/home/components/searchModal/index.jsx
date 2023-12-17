import React from 'react'
import SectionCardHomePage from '../../../../components/cards/homePage/sectionCard'
import FilterBar from '../../../../components/filterBar'

export default function SearchModal({ className }) {
    return (
        <div className={`min-h-screen ${className} px-4 sticky w-full`}>
            <div className='h-8 w-full text-texts'>
                <FilterBar results={12} />
            </div>
            <SectionCardHomePage />
        </div>
    )
}
