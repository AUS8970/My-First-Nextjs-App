import React from 'react'

export default async function AboutSlugPages({ params }) {
  const p = await params;
  console.log(p);

  return (
    <div>
      <h2 className=""> About Slug Pages </h2>
    </div>
  )
}
