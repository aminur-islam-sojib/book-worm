import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET() {
  try {
    // Try to connect to MongoDB
    const usersCollection = await dbConnect(collections.USERS);

    // Attempt a simple query
    const count = await usersCollection.countDocuments();

    return Response.json({
      status: "✅ Connected to MongoDB",
      usersCount: count,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    return Response.json(
      {
        status: "❌ Failed to connect to MongoDB",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
