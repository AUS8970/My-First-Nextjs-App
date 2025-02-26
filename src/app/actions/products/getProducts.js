"use server";
import dbConnect from "@/app/lib/dbConnect";

export const getProducts = async () => {
  try {
    const data = await dbConnect("test").find({}).toArray();
    return data;
  } catch (error) {
    console.error(error)
    return [];
  }
}