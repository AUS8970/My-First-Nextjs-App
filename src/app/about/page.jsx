"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if(isLoggedIn){
      router.push("/about/address")
    } else {
      router.push("/")
    }
  }
  return (
    <div>
      <p className='font-bold text-center'> About Page </p>
      <button type='button' onClick={handleNavigation} className=""> Address Page </button>
    </div>
  )
}
