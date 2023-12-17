import React from 'react'
import CategoryList from '../../../../components/categoryList'
import CategorySection from '../../../../components/categorySection'

export default function GeneralHome({ className }) {
  return (
    <div className={`min-h-screen flex flex-col gap-8 ${className}`}>
      <CategoryList />
      <CategorySection />
    </div>
  )
}
