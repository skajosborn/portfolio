'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Header from '@/app/components/header';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); // Extract the blog post ID from the URL

  useEffect(() => {
    if (!id) {
      setError('Invalid blog post ID');
      return;
    }
  
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Fetch error:', response.status, errorText);
          throw new Error('Failed to fetch the post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Post not found');
      }
    };
  
    fetchPost();
  }, [id]);

  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  if (!post) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-00 min-h-screen py-12">
      <Header />
      <div className="max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-lg p-8">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover rounded-t-lg mb-6"
            width={800}
            height={400}
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <p className="text-gray-700 text-lg">{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPostPage;