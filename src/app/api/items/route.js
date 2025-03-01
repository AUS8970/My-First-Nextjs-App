// import { collectionNames, dbConnect } from "@/app/lib/dbConnect";
// import { revalidatePath } from "next/cache";

// export async function GET() {
//   const data = await dbConnect(collectionNames.TEST).find({}).toArray();
//   return Response.json(data);
// };

// export async function POST(req) {
//   const postedData = await req.json();
//   const result = await dbConnect(collectionNames.TEST).insertOne(postedData);
//   revalidatePath("/products")
//   return Response.json(result);
// };