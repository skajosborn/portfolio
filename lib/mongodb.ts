import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  const globalWithMongo = global as typeof globalThis & {
    mongo: {
      conn: Promise<MongoClient> | null;
    };
  };

  if (!globalWithMongo.mongo.conn) {
    client = new MongoClient(uri, options);
    globalWithMongo.mongo.conn = client.connect();
  }
  clientPromise = globalWithMongo.mongo.conn;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise; 