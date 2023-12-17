import React from 'react'
import SectionCardHomePage from '../../../../components/cards/homePage/sectionCard'

export default function SearchModal({ className }) {
    return (
        <div className={`min-h-screen ${className} bg-sky-50 px-4 sticky w-full`}>
            <div className='h-8 w-full border'></div>
            <SectionCardHomePage />
        </div>
    )
}
