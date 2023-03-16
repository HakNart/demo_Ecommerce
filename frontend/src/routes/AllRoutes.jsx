import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeIndex, ProductsIndex } from '../pages'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeIndex/>}/>
        <Route path='/products' element={<ProductsIndex/>} />
      </Routes>
    </div>
  )
}
