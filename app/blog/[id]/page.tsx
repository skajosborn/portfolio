// app/blog/[id]/page.tsx
import { notFound } from 'next/navigation';
import BlogPostPage from '@/app/components/blogPost';
import connectDB from '@/lib/db';
import { ObjectId } from 'mongodb';

export default async function BlogPostServerPage({ params }: { params: { id: string } }) {
  const { id } = params;

  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch (error) {
    return notFound();
  }

  const client = await connectDB();
  const db = client.db();
  const post = await db.collection('blogs').findOne({ _id: objectId });

  if (!post) {
    return notFound();
  }

  const transformedPost = {
    _id: post._id.toString(),
    title: post.title,
    content: post.content,
    date: new Date(post.createdAt).toLocaleDateString(),
    imageUrl: post.imageUrl,
  };

  return <BlogPostPage post={transformedPost} darkMode={false} />;
}