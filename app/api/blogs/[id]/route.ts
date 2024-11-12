// pages/api/blogs/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/db';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Check for GET method
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const client = await connectDB();
    const db = client.db();
    const objectId = new ObjectId(id as string);

    // Fetch the blog post
    const post = await db.collection('blogs').findOne({ _id: objectId });

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Transform the post for response
    const transformedPost = {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      date: new Date(post.createdAt).toLocaleDateString(),
      imageUrl: post.imageUrl,
    };

    res.status(200).json(transformedPost);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
}