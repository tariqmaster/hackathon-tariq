import React from 'react'
import ProductList from '@/views/productList'

const Products = () => {
  return (
    <div>
              <div className='flex items-center justify-center font-extrabold text-blue-800'>
            All PRODUCTS
        </div>
        <div className='flex items-center justify-center text-4xl font-bold'>
            Check What We have
        </div>
        <ProductList />
    </div>
  )
}

export default Products