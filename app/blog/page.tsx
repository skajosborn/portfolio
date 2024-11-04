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
    <div className="bg-gray-50 pt-20 min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/desk2.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-5xl mt-44 md:text-6xl font-extrabold mb-8">
            MY <span className="text-mountain-meadow-400">BLOG</span>
          </h1>
          <p className="text-xl mt-32 md:text-2xl max-w-3xl mx-auto px-4">
            Welcome to my blog! Discover my latest thoughts, projects, and tutorials on web development, design, and more.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto p-8 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-[500px]"
            onClick={() => handlePostClick(post._id)}
          >
            {post.imageUrl ? (
              <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            ) : (
              <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-gray-500">No Image Available</div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <p className="text-gray-700">
                {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
              </p>
              <div className="mt-auto">
                <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-800 transition-colors duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl active:translate-y-0.5 active:shadow-md border-b-4 border-gray-600 hover:border-gray-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;