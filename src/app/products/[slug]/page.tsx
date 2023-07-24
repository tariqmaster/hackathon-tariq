import { useRouter } from 'next/router'
 
export default function Page({params}: {params:{slug: string}}) {
  
  return (
  <div>
    My category: {params.slug}
  </div>
  )
}