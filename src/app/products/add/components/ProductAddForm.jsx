"use client";

export default function ProductAddForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload ={productName}
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type" : "application/json"
      }
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    alert("product added");
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