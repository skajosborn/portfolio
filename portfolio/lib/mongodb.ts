import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your .env file');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

try {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      mongo: { conn: Promise<MongoClient> | null };
    };

    if (!globalWithMongo.mongo) {
      globalWithMongo.mongo = { conn: null };
    }

    if (!globalWithMongo.mongo.conn) {
      client = new MongoClient(uri, options);
      globalWithMongo.mongo.conn = client.connect();
    }
    clientPromise = globalWithMongo.mongo.conn;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} catch (error) {
  console.error('MongoDB connection error:', error);
  throw new Error('Failed to connect to MongoDB');
}

export default clientPromise; 