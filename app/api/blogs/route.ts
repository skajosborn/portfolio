import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Connect to MongoDB
    const client = await connectDB();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    
    // Fetch all blog posts
    const blogs = await db.collection('blogs')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    console.log('Found blogs:', blogs.length);

    // Transform the posts
    const transformedPosts = blogs.map(post => ({
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      date: new Date(post.createdAt).toLocaleDateString(),
      imageURL: post.imageUrl,
      imageUrl: post.imageUrl
    }));

    return NextResponse.json({ 
      posts: transformedPosts,
      pagination: {
        total: transformedPosts.length,
        page: 1,
        limit: 10,
        pages: Math.ceil(transformedPosts.length / 10)
      }
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await connectDB();
    console.log('Connected to MongoDB');

    const db = client.db();
    
    // Parse the request body
    const { title, content, imageUrl } = await request.json();

    // Validate input
    if (!title || !content || !imageUrl) {
      return NextResponse.json({ error: 'Title, content, and image URL are required.' }, { status: 400 });
    }

    // Create a new blog post
    const result = await db.collection('blogs').insertOne({
      title,
      content,
      imageUrl,
      createdAt: new Date(),
    });

    console.log('Blog post created:', result.insertedId);

    return NextResponse.json({ message: 'Blog post created successfully', postId: result.insertedId }, { status: 201 });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}