import Link from 'next/link'
import React from 'react'
import { getProducts } from '../actions/products/getProducts'


export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div className='container mx-auto'>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold"> Products Page </h2>
        <Link href={'/products/add'} className='bg-white text-black rounded-xl px-3 py-2'> Add Product </Link>
      </div>
      <div className="mt-5">
        <ul className="space-y-2">
          {data?.map((d) => {
            return <li key={d._id} className="border rounded-lg p-1">{d.productName}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
