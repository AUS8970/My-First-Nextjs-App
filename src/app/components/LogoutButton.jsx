"use client"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return ( <div><button onClick={() => signOut()}> Log Out </button></div> )
};