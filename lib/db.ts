import mongoose from 'mongoose';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Initialize global mongoose cache if not already initialized
global.mongoose = global.mongoose || { conn: null };

async function dbConnect() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  try {
    await mongoose.connect(MONGODB_URI as string); // Type assertion after the null check
    global.mongoose.conn = mongoose.connection;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }

  return global.mongoose.conn;
}

export default dbConnect;