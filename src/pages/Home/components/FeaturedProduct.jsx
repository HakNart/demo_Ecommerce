import React from 'react'
import { ProductCard } from '../../../components/Elements/ProductCard'

export const FeaturedProduct = () => {
  return (
    <section className='my-20'>
      <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8'>
        Featured Products
      </h1>
      <div className='flex flex-wrap justify-center lg:flex-row'>
        {/* Product Card */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  )
}
