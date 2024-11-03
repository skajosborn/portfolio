'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';
// import Image from 'next/image';

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
    <div className="bg-gray-100 min-h-screen">
      <Header />
      
      {/* Hero Image Section */}
      <div className="relative w-[900px] h-[600px] mx-auto">
        {/* <Image
          src="/images/.jpeg"
          alt="Blog Hero Image"
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
          <div className="text-center text-black">
            <h1 className="text-6xl font-bold mb-4">
              MY <span className="text-black">BLOG</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              Welcome to my blog! Here you will find my latest thoughts, projects, and tutorials on web development, design, and more.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handlePostClick(post._id)}
            >
              {post.imageUrl && (
                <div className="h-48 w-full bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-500 mb-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <p className="text-gray-700 mb-6">
                  {post.content.length > 100
                    ? `${post.content.substring(0, 100)}...`
                    : post.content}
                </p>
                <button className="text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;