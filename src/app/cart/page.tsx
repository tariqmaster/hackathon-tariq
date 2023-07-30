import React from 'react'

const Cart = () => {
  return (
    <div className='mt-[50px] md-[100px]'>
       
       <div className='grid lg:grid-cols-3 grid-cols-1'>
 {/* items */}
 <div className='col-span-2'>
    items
 </div>
      
       {/* summary */}
       <div className='bg-gray-200 p-5 rounded-xl'>
            <h2  className="scroll-m-20 text-xl font-medium tracking-tight uppercase">Order summary</h2>
            <div className="divider"></div> 
       </div> 
       </div>
    </div>
  )
}

export default Cart