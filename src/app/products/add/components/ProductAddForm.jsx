"use client";
import { postProduct } from "@/app/actions/products/postProduct";
import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload ={productName};
    const result = await postProduct(payload);
    console.log(result);
    form.reset();
    router.push('/products')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-6">
        <input type="text" name="productName" placeholder='Product Name' className="px-2 text-black py-2 rounded-xl" />
        <button type="submit" className='bg-white text-black rounded-xl px-3 py-1'> Submit </button>
      </form>
    </div>
  )
}