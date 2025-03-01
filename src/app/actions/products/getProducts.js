"use server";

import dbConnect, { collectionNames } from "@/app/lib/dbConnect";

export const getProducts = async () => {
  try {
    const data = await dbConnect(collectionNames.TEST).find({}).toArray();
    return data;
  } catch (error) {
    console.error(error)
    return [];
  }
}