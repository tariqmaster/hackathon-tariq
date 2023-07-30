
import ProductCard from '@/views/productCard'
import {client} from '@/lib/sanityClient'
import {Image as IImage} from 'sanity'

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



// const getProductTypesByCategory = (category: string)=>{
//   Product.filter(Products.category)=> Products.category ===category
// }
// export default function Page({params}: {params:{slug: string}}) {

export default async function Page({params}:{params:{slug: string}}) {

  const data: IProduct[] = await getProductData()

// const getProductTypesByCategory = (category: string)=>{
// return data.filter((data) => params.slug ===data.category)
// }
  // const result = getProductTypesByCategory(params.slug)
  return (
    <div>

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
