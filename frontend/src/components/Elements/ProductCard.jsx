import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = () => {
  return (
    <div className='m-3 w-96 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <Link className='relative'>
        <img className='rounded-t-lg w-full h-64' src='src/assets/images/items/item1001.jpg'/>
      </Link>
      <div className='p-5'>
        <Link>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Product tile</h5>
        </Link>
        
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Lorem ipsum abore et dolore magna aliqua</p>
        <div className='flex items-center my-2'>
          <i className='text-lg bi bi-star-fill text-yellow-500 mr-1'></i>
          <i className='text-lg bi bi-star-fill text-yellow-500 mr-1'></i>
          <i className='text-lg bi bi-star-fill text-yellow-500 mr-1'></i>
          <i className='text-lg bi bi-star-fill text-yellow-500 mr-1'></i>
          <i className='text-lg bi bi-star text-yellow-500 mr-1'></i>
        </div>
        <p className='flex justify-between items-center'>
          <span className='text-2xl dark:text-gray-200'>
            <span>$</span><span>40</span>
          </span>
          <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg--blue-800'>Add to cart <i className='ml-1 bi bi-plus-lg'></i></button>
        </p>
      </div>
    </div>
  )
}
