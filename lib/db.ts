import mongoose from 'mongoose';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Extend the global type to include mongoose connection and promise properties
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Initialize global mongoose cache if not already initialized
global.mongoose = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    // MONGODB_URI is guaranteed to be string at this point
    global.mongoose.promise = mongoose.connect(MONGODB_URI as string)
      .then((mongoose) => mongoose.connection);
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }

  return global.mongoose.conn;
}

export default dbConnect;