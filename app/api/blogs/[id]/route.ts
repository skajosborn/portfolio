import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  try {
    const client = await connectDB();
    const db = client.db();

    // Validate ObjectId
    const objectId = new ObjectId(id);

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

    return NextResponse.json(transformedPost);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}