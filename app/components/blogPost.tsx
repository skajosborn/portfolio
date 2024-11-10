'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
  darkMode: boolean;
}

// Updated BlogPosts component
const BlogPosts = ({ posts, darkMode }: BlogPostsProps) => {
    const router = useRouter();
    const defaultImageUrl = '/images/beach3.webp'; 
  
    const handlePostClick = (postId: string) => {
      router.push(`/blog/${postId}`);
    };
  
    return (
      <div className={`max-w-7xl mx-auto p-8 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${darkMode ? 'bg-gray-900' : 'bg-gray-00'}`}>
        {posts.map((post) => (
          <div
            key={post._id}
            className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-[500px] ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            onClick={() => handlePostClick(post._id)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.imageUrl || defaultImageUrl} // Use the fallback if imageUrl is missing
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL={defaultImageUrl} // Placeholder for loading effect
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{post.title}</h2>
              <div className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
              </p>
              <div className="mt-auto">
                <button
                  className={`h-[30px] w-[80px] sm:h-[40px] sm:w-[90px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md shadow-md hover:shadow-lg ${darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents parent div click event
                    handlePostClick(post._id);
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