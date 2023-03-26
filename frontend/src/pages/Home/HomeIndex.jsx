import React from 'react'
import { Faq } from './components/Faq'
import { FeaturedProduct } from './components/FeaturedProduct'
import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'

export function HomeIndex() {
  return (
    <main>
      <Hero/>
      <FeaturedProduct/>
      {/* Can have testimonial here. Not implement in this case */}
      {/* <Testimonials/> */}
      {/* FAQ */}
      <Faq/>
    </main>
  )
}






