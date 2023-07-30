import React from 'react'
import ProductList from '@/views/productList'

const Category = () => {
  return (
    <div>
              <div className='flex items-center justify-center font-extrabold text-blue-800'>
            All Category
        </div>
        <div className='flex items-center justify-center text-4xl font-bold'>
            Check What We have
        </div>
        <ProductList />
    </div>
  )
}

export default Category