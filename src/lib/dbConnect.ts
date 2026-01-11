import { MongoClient, ServerApiVersion } from "mongodb";

export const collections = {
  USERS: "users",
};

const uri = process.env.MONGO_URI;
const dname = process.env.DB_NAME;

// here code changes
if (!uri) {
  throw new Error("❌ Please add MONGO_URI to .env.local");
}

// here code changes
if (!dname) {
  throw new Error("❌ Please add DB_NAME to .env.local");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let isConnected = false;

export const dbConnect = async (cname: string) => {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  }
  return client.db(dname).collection(cname);
};
