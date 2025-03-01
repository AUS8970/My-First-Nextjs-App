import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNames = {
  USERS: "users",
  TEST: "test"
}

function dbConnect (collectionName) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
}

export default dbConnect;

// "use server"
// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export async function dbConnect(collection) {
//   try {
//     await client.connect();
//     return client.db(process.env.DB_NAME).collection(collection);
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw new Error("Failed to connect to database");
//   }
// }