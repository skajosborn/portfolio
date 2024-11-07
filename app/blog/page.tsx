'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  // Add other fields as needed
}

interface PaginatedResponse {
  posts: BlogPost[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch('/api/blogs');
        const data: PaginatedResponse = await response.json();
        
        // Ensure we're getting the posts array from the response
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center text-red-600">
          <h2 className="text-2xl font-bold">{error}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto p-8">
        {posts.length === 0 ? (
          <div className="text-center text-gray-600">
            <h2 className="text-xl">No blog posts found</h2>
          </div>
        ) : (
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link 
                href={`/blog/${post._id}`} 
                key={post._id}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-[500px]">
                  <div className="p-6 flex-grow">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 line-clamp-4">{post.content}</p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50">
                    <time className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}