// app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import BlogPost from '@/models/BlogPost';

export async function GET() {
  await dbConnect();

  try {
    const posts = await BlogPost.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { title, content, imageUrl } = await request.json();
    const newPost = await BlogPost.create({ title, content, imageUrl, date: new Date() });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

