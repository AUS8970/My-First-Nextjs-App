"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Head from "next/head";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      {/* Client-side এ মেটাডাটা সেট করা */}
      <Head>
        <title>About | First Next App</title>
        <meta name="description" content="This is the About Page" />
      </Head>

      <p className="font-bold text-center">About Page</p>
      <button type="button" onClick={handleNavigation} className="">
        Address Page
      </button>
    </div>
  );
}