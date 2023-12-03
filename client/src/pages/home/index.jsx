import React from 'react'
import SectionSlider from '../../components/sliders/section-slider'

export default function HomePage() {
    return (
        <main className='flex flex-col gap-8 overflow-hidden'>
            <SectionSlider categoryCard />
            <SectionSlider title={"Cerca de tí"} />
        </main>
    )
}
