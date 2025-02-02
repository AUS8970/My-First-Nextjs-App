"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navber() {
  const pathName = usePathname();
  console.log(pathName, pathName.includes("dashboard"))
  if(pathName.includes("dashboard")){ return <></>; } else {
    return (
      <div>
        <nav className='flex justify-center py-5'>
          <ul className="flex gap-4">
            <Link href={"/"}> <li className=""> Home </li> </Link>
            <Link href={"/services"}> <li className=""> Services </li> </Link>
            <Link href={"/about"}> <li className=""> About </li> </Link>
          </ul>
        </nav>
      </div>
    )
  }
}
