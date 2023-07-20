import Image from 'next/image';
import Hero from '@/views/hero';
// import Promotion from '@/views/promotion';
import {client} from '@/lib/sanityClient'
import {Image as IImage} from 'sanity'
import ProductCard from '@/views/productCard';



const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    description,
    title,
    image,
    category,
  }`);
  return res
}


interface IProduct {
  title: string,
  _id: string,
  description: string,
  price: number,
  image: IImage,
  category: {
    name: string,
  }
}



export default async function Home() {

  const data: IProduct[] = await getProductData()

  return (
    <div>Hello
      <Hero />
      {/* <Promotion /> */}
      <div className='flex items-center justify-center font-extrabold text-blue-800'>
            PRODUCTS
        </div>
        <div className='flex items-center justify-center text-4xl font-bold'>
            Check What We have
        </div>
      <div className='p-10 grid grid-cols-[auto,auto,auto] justify-center gap-x-5'>
      {data.map((item, ind) => (
        <div key={ind}>
        <ProductCard item={item} />
        </div>
      ))}
    </div>
      </div>
  )
}
