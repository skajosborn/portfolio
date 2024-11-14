import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  // Check if ID is provided
  if (!id) {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  // Check if ID is a valid ObjectId
  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
  }

  try {
    const client = await connectDB();
    const db = client.db();

    // Fetch the blog post
    const post = await db.collection('blogs').findOne({ _id: objectId });

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Transform the post for response
    const transformedPost = {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      date: new Date(post.createdAt).toLocaleDateString(),
      imageUrl: post.imageUrl,
    };

    // Add CORS headers for external requests
    const response = NextResponse.json(transformedPost);
    response.headers.set('Access-Control-Allow-Origin', 'https://portfolio-yck1.vercel.app/'); 
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

// Handle OPTIONS method for CORS preflight
export async function OPTIONS() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', 'https://portfolio-yck1.vercel.app/'); // Adjust for your domain
  headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return new NextResponse(null, { headers });
}