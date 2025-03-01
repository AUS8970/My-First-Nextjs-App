"use server"
import { collectionNames } from "@/app/lib/collectionNames";
import dbConnect from "@/app/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionNames.USERS).insertOne(payload)

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), 
    };
  } catch (error) {
    console.log(error)
    return null;
  }
}