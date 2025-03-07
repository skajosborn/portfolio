import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    
    const posts = await db.collection("blogs")
      .find({})
      .sort({ date: -1 })
      .toArray();

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
} 