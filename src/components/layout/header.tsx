import React from 'react';
import logo from "public/Logo.webp";
import Image from "next/image";
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import {Input} from "@/components/ui/input"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

const Header = () => {
  return (
    <div className='wrapper py-6 flex justify-between items-center'>
        <Link href="/"><Image src={logo}  alt="logo" className='w-40'/></Link>
        <div className='hidden md:block'>
        <ul className='flex gap-x-5'>
            <li className='text-lg'><Link href="/category/${cat}">Female</Link></li>
            <li className='text-lg'><Link href="/category/${cat}">Male</Link></li>
            <li className='text-lg'><Link href="/category/${cat}">Kids</Link></li>
            <li className='text-lg'><Link href="/category">All Products</Link></li>
        </ul>
        </div> 
<div className='hidden md:block'>
<div className="flex w-full max-w-sm items-center space-x-3 ">
      <Input type="text" placeholder="What you lookin for..." />
    </div>
</div>

       <Link href="/cart"><div className='flex justify-center items-center h-10 w-10 rounded-full bg-gray-200'>
         <ShoppingCart />
        </div></Link> 
        <div className='md:hidden'>
        <Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
        <ul className='flex gap-x-5'>
            <li className='text-lg'><Link href="/">Female</Link></li>
            <li className='text-lg'><Link href="/">Male</Link></li>
            <li className='text-lg'><Link href="/">Kids</Link></li>
            <li className='text-lg'><Link href="/">All Products</Link></li>
        </ul>
  </SheetContent>
</Sheet>
</div>
    

    </div>
  )
}

export default Header