'use client'

import { useRouter } from 'next/navigation';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  const router = useRouter();

  const handlePostClick = (postId: string) => {
    router.push(`/blog/${postId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-[500px]"
          onClick={() => handlePostClick(post._id)}
        >
          {post.imageUrl ? (
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
          ) : (
            <div className="h-48 w-full bg-gray-100 flex items-center justify-center text-gray-500">No Image Available</div>
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
              <button 
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
                Read
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;