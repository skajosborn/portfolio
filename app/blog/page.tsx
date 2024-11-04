// pages/blog.tsx
'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostClick = (postId: string) => {
    router.push(`/blog/${postId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            MY <span className="text-yellow-400">BLOG</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
            Welcome to my blog! Discover my latest thoughts, projects, and tutorials on web development, design, and more.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto p-8 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
            onClick={() => handlePostClick(post._id)}
          >
            {post.imageUrl ? (
              <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            ) : (
              <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-gray-500">No Image Available</div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <p className="text-gray-700 mb-6">
                {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
              </p>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;