const { MongoClient } = require("mongodb");
require("dotenv").config();

const url =
  process.env.MONGODB_URL ||
  // Local Connection
  "mongodb://localhost:27017/myresumedatabase";
  // Server Connection
  // "mongodb://root:oiIQAwrR9yhw0RPizMocARR8@myresumedatabase:27017/my-app?authSource=admin";
const client = new MongoClient(url);

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToMongo, client };
