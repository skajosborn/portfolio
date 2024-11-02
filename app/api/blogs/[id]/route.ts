import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';

export async function GET(
  _request: Request,
  context: unknown // Use `unknown` and cast to the desired structure inside the function
) {
  // Ensure database connection
  await dbConnect();

  // Dynamically import the model
  const BlogPost = (await import('@/models/BlogPost')).default;

  // Cast `context` to the expected structure
  const { id } = (context as { params: { id: string } }).params;

  try {
    const post = await BlogPost.findById(id);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}