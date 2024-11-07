// app/api/blogs/[id]/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import mongoose from 'mongoose';

export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 });
  }

  const post = await BlogPost.findById(id);
  if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json(post);
}

export async function PUT(request: Request, { params: { id } }: { params: { id: string } }) {
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 });
  }

  const { title, content } = await request.json();

  const updatedPost = await BlogPost.findByIdAndUpdate(
    id,
    { title, content },
    { new: true }
  );

  if (!updatedPost) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json(updatedPost);
}

export async function DELETE(request: Request, { params: { id } }: { params: { id: string } }) {
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 });
  }

  const deletedPost = await BlogPost.findByIdAndDelete(id);

  if (!deletedPost) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json({ message: 'Post deleted successfully' });
}