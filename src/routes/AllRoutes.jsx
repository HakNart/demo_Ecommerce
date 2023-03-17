import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartPage, DashboardPage, HomeIndex, Login, OrderPage, PageNotFound, ProductDetail, ProductsIndex, Register } from '../pages'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeIndex/>}/>
        <Route path='products' element={<ProductsIndex/>} />
        <Route path='products/:id' element={<ProductDetail/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        {/* Todo: Implement protected route */}
        <Route path='cart' element={<CartPage/>}/>
        <Route path="order-summary" element={<OrderPage/>} />
        <Route path="dashboard" element={<DashboardPage/>} />

        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}
