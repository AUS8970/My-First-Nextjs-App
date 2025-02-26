"use server"
import dbConnect from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postProduct = async (postedData) => {
  try {
    const result = await dbConnect("test").insertOne(postedData);
    revalidatePath("/products")
    return { acknowledged: result.acknowledged, insertedId: result.insertedId.toString() };
  } catch (error) {
    console.log(error)
    return null;
  }
}