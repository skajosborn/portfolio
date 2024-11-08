'use client';
import { useState, useEffect } from 'react';
import BlogPosts from "@/app/components/blogPost";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  date: string; // Added missing date field
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
        
        // Map the response data to include the required date field
        const postsWithDate = data.posts.map(post => ({
          ...post,
          date: new Date(post.createdAt).toLocaleDateString() // Convert createdAt to date string
        }));
        
        setPosts(postsWithDate || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const postsPerPage = 6;
  const totalPages = posts && posts.length ? Math.ceil(posts.length / postsPerPage) : 0;

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
    <div className="relative min-h-screen bg-gray-200 font-poppins text-xl overflow-hidden">
      <div className="mt-20">
        <h2 className="text-4xl text-black font-bold text-center pt-6 mb-20">My Blog</h2>
        <div className="relative w-[1600px] h-auto mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-xl text-black font-medium text-center mb-12 mt-8">
            Welcome to my blog! Here I share my thoughts and experiences about software development, web3 technologies, 
            and my journey transitioning from education to tech. Feel free to explore my posts below.
          </div>
          <BlogPosts posts={posts} />
          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-12 mb-12">
            {Array.from({length: totalPages}, (_, index) => (
              <button
                key={index}
                className="bg-gray-100 h-[30px] w-[80px] sm:h-[40px] sm:w-[90px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
                style={{
                  transition: 'all 0.3s ease',
                  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 10px rgba(255, 255, 255, 0.6), 
                    0 0 20px rgba(255, 255, 255, 0.5), 
                    0 0 30px rgba(255, 255, 255, 0.4),
                    inset 0 0 10px rgba(255, 255, 255, 0.3),
                    inset 0 0 20px rgba(255, 255, 255, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}