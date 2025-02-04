import React from 'react'

export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {

  const param = await params;
  const post = await getSinglePost(param.id)

  return {
    title: post.title,
    description: post.body
  }
}

export default async function SinglePostPage({ params }) {

  const param = await params;
  const post = await getSinglePost(param.id)

  console.log(post)

  return (
    <div className='w-96 border rounded-lg p-3 flex flex-col text-center justify-center items-center mx-auto'>
      <div className="flex gap-5">
        <p className=""> User Id: {post?.userId} </p>
        <p className=""> Post id: {post.id} </p>
      </div>
      <h6 className="font-bold text-lg uppercase"> {post.title} </h6>
      <p className="text-sm text-gray-400 pb-3"> {post.body} </p>
    </div>
  )
}
