import dbConnect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const param = await params;
  const singleData = await dbConnect("test")
    .findOne({ _id: new ObjectId(param.id) });
  return Response.json(singleData);
};

export async function DELETE(req, { params }) {
  const param = await params;
  const deleteData = await dbConnect("test")
    .deleteOne({ _id: new ObjectId(param.id) });
  return Response.json(deleteData);
};

export async function PATCH(req, { params }) {
  const param = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(param.id) }
  const updateData = await dbConnect("test")
    .updateOne(
      filter, 
      { $set : { 
          ...postedData 
      }}, { 
        upsert: true 
      }
    );
  return Response.json(updateData);
};