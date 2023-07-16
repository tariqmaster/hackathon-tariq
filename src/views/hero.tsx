import React from 'react'
import {Badge} from "@/components/ui/badge"
import { Heart, Menu, ShoppingCart } from "lucide-react";
import Heroimage from "public/hero.jpg";
import { Button } from '@/components/ui/button';
import Image from "next/image";

const hero = () => {
  return (
    <div className=' grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
    <div className='py-10'>
        <Badge className=' font-bold bg-blue-100 text-blue-700 px-3 py-2 text-lg rounded-2xl'>Sale 70%</Badge>
        <br /> <br />
        <h1 className=" text-4xl font-bold lg:text-6xl">
        An Industrial Take on Streetwear
        </h1> <br />
        <p className="mt-6">
        Anyone can beat you but no one can beat your outfit<br/> as long as you wear Dine outfits.
        </p> <br />
        <Button className="bg-black rounded-4xl text-white mt-4 px-9 py-9 text-lg rounded-lg"><ShoppingCart className="mr-2 h-6 w-6 " />Start <br/>Shopping</Button>
   </div>
   
    <div className='rounded-full bg-red-200'>
    <Image src={Heroimage} alt="image"  />
    </div>

    </div>
       
  

    
  )
}

export default hero;