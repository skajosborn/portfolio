'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogImage } from '@/app/components/blog-image';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      if (!params?.id) {
        setError('No blog ID provided');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/blogs/${params.id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }

        setPost(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch the post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>Post not found</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date}</p>
        {post.imageUrl && (
          <div className="relative w-full aspect-video mb-8">
            <BlogImage
              src={post.imageUrl}
              alt={post.title}
              priority={true}
              height={400}
            />
          </div>
        )}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} // Ensure content is safe HTML
        />
      </div>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Blog List
      </button>
    </div>
  );
}