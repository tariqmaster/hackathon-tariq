import React from 'react'
import {FacebookIcon, LinkedinIcon, TwitterIcon} from 'lucide-react'
import Link from 'next/link';
import logo from 'public/Logo.webp'
import Image from 'next/image';


const Footer = () => {
  return (
<div>   
    <div className='wrapper  mt-4 '>
        <div className=' grid grid-cols-5 gap-8'>
            {/* 1st column */}
            <div className='grid col-span-2'>
                <Image src={logo} alt='logo' />
                <p className='mt-5 flex flex-wrap text-gray-500 text-sm' >Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <div className='mt-5 flex flex-justify gap-8 text-sm'>
                <span className='bg-gray-200 p-3  rounded-xl'><Link href='#'><FacebookIcon fill="#111"/></Link></span>
                <span className='bg-gray-200 p-3  rounded-xl'><Link href='#'><LinkedinIcon fill="#000"/></Link></span>
                <span className='bg-gray-200 p-3  rounded-xl'><Link href='#'><TwitterIcon fill="#000"/></Link></span>   
            
                </div>
                </div>
            {/* 2nd column */}
            <div className='text-sm'>
                <span className='font-bold text-black'>Company</span>
                <br /><Link href='#' className='text-gray-500' >About</Link>
                <br /><Link href='#' className='text-gray-500' >Terms of Use</Link>
                <br /><Link href='#' className='text-gray-500' >Privacy Policy</Link>
                <br /><Link href='#' className='text-gray-500' >How it Works</Link>
                <br /><Link href='#' className='text-gray-500' >Contact Us</Link>
            </div>
       {/* 3rd column */}
        <div className='text-sm'>
        <span className='font-bold text-black'>Support</span>
                <br /><Link href='#' className='text-gray-500' >Support Career</Link>
                <br /><Link href='#' className='text-gray-500' >24h Service</Link>
                <br /><Link href='#' className='text-gray-500' >Privacy Policy</Link>
                <br /><Link href='#' className='text-gray-500' >Quick Chat</Link>
            </div> 
            {/* 4th column */}
            <div className='text-sm'>
        <span className=' font-bold text-black'>Contact</span>
                <br /><Link href='#' className='text-gray-500' >Whatsapp</Link>
                <br /><Link href='#' className='text-gray-500' >Support 24h</Link>

            </div> 
            </div>


    </div>
    <div className='w-full mt-6 p-4 bg-white border-t border-gray-900 shadow '>
    <div className='wrapper grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
<div className='text-gray-500'>Copyright © 2022 <br/>Dine Market</div>
<div className=''><span className='text-gray-500'>Design by.<br/></span> <Link href='https://www.panaverse.co/'>Panaverse</Link></div>
<div className=''><span className='text-gray-500'>Code by. <br/></span> <Link href='https://github.com/tariqmaster'>tariqmaster</Link> on github</div>
</div>
</div>
</div>

)
}

export default Footer