import Link from 'next/link'
import React from 'react'

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache"
  })
  const data = await res.json();

  return (
    <div className='container mx-auto'>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold"> Products Page </h2>
        <Link href={'/products/add'} className='bg-white text-black rounded-xl px-3 py-2'> Add Product </Link>
      </div>
      <div className="">
        <ul className="">
          {data?.map((d) => {
            return <li key={d._id} className="">{d.productName}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
