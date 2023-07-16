import React from 'react'

const Promotion = () => {
  return (
    <div>
        <div className='flex items-center justify-center font-extrabold text-blue-800'>
            PROMOTIONS
        </div>
        <div className='flex items-center justify-center text-4xl font-bold'>
            Ours Promotions Events
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

export default Promotion