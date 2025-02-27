"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import LoginButton from './LoginButton';

export default function Navber() {
  const pathName = usePathname();
  console.log(pathName, pathName.includes("dashboard"))
  if(pathName.includes("dashboard")){ 
    return <></>
  } else {
    return (
      <div>
        <nav className='flex justify-center py-5'>
          <ul className="flex gap-4">
            <Link href={"/"}> <li className=""> Home </li> </Link>
            <Link href={"/products"}> <li className=""> Products </li> </Link>
            <Link href={"/posts"}> <li className=""> Posts </li> </Link>
            <Link href={"/meals"}> <li className=""> Meals </li> </Link>
            <Link href={"/services"}> <li className=""> Services </li> </Link>
            <Link href={"/about"}> <li className=""> About </li> </Link>
            <Link href={"/register"}> <li className=""> Register </li> </Link>
            <LoginButton />
            {/* <Register /> */}
          </ul>
        </nav>
      </div>
    )
  }
};