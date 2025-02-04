import React from 'react'
import ProductAddForm from './components/ProductAddForm'

export default function ProductAddPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className="text-2xl font-semibold pt-6"> Product Add Page </h2>
      <ProductAddForm />
    </div>
  )
}
