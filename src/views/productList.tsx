import React from 'react';

const ProductList = () => {
  return (
    <div className='py-6 px-6'>
           <div className='flex items-center justify-center font-extrabold text-blue-800'>
            PRODUCTS
        </div>
        <div className='flex items-center justify-center text-4xl font-bold'>
            Check What We have
        </div>

    <div className='mt-4 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
       <div> 
        <div className='bg-blue-300'>
a
        </div>
        <div className='bg-red-300'>
            b
            </div>
            </div>
            <div className=' grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
            <div className='bg-green-300'>
       c     
            </div>
            <div className='bg-black'>
           d 
            </div>
            </div>
    </div>
    </div>
  )
}

export default ProductList;