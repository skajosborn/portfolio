import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId, Filter, Document } from 'mongodb';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    
    let query: Filter<Document>;
    try {
      query = { _id: new ObjectId(params.id) };
    } catch {
      query = { slug: params.id };
    }
    
    const project = await db.collection("projects").findOne(query);

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
} 