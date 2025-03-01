"use server"
import dbConnect, { collectionNames } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postProduct = async (postedData) => {
  try {
    const result = await dbConnect(collectionNames.TEST).insertOne(postedData);
    revalidatePath("/products")
    return { acknowledged: result.acknowledged, insertedId: result.insertedId.toString() };
  } catch (error) {
    console.log(error)
    return null;
  }
}