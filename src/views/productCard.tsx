'use client'

import React, { FC } from 'react'
import Image from "next/image";
import "@/app/layout";
import { urlForImage } from "../../sanity/lib/image";
import { Name, name } from 'drizzle-orm';
import { title } from 'process';




const ProductCard:FC<{item: any}> = ({item}) => {

    const handleAddToCart = async () => {
        const res = await fetch("/api/cart",{
            method: "POST",
            body: JSON.stringify({
                product_id: item._id
            })
        })
        
        const result = await res.json();
        // console.log(result);
        // console.log(res.ok);
    }

  return (
    <div>

      <div className='mt-8'>
        <Image 
        width={300}
        height={300}
        className='max-h-[300px] object-cover object-top'
        src={urlForImage(item.image).url()} alt="category" />
        <h2>{item.title}</h2>  
        <h2>{item.type}</h2>
        {/* <h2>{item.category}</h2> */}
        <h2>${item.price}</h2>
        {/* <h2>${item.price}</h2> */}
        {/* <h2>${item.title}</h2> */}
        <button onClick={()=>handleAddToCart()} className='border py-2 px-4 rounded text-white bg-blue-600'>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard;