import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();
  return data;
}

export const metadata = {
  title: "All Posts",
  description: "Loading JSON placeholder posts useing server components",
};

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-5"> Posts Page </h2>
      <div className="grid gap-5 grid-cols-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border p-4 text-center">
              <h6 className="font-bold text-md uppercase"> {post.title} </h6>
              <p className="text-sm text-gray-400 pb-3"> {post.body} </p>
              <Link href={`/posts/${post.id}`} className="bg-white text-black px-2 py-1 rounded-sm"> Details </Link>
            </div>
          );
        })};
      </div>
    </div>
  )
}
