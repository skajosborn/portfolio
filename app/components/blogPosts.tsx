import Image from 'next/image';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface BlogPostsPageProps {
  posts: BlogPost[]; // Array of posts
  darkMode: boolean;
}

const BlogPostsPage = ({ posts, darkMode }: BlogPostsPageProps) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center mt-40 p-8">
        <p className="text-red-500 text-xl">No blog posts available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className={`p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
            }`}
          >
            {post.imageUrl && (
              <div className="relative w-full h-48 mb-4 bg-white">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  style={{ backgroundColor: 'transparent' }} // Ensuring transparent background for the image
                />
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-2 text-sm">{post.date}</p>
            <div className="prose max-w-none text-sm mb-4">
              <p>{post.content.length > 80 ? `${post.content.substring(0, 80)}...` : post.content}</p>
            </div>
            <button
              className="text-blue-500 hover:text-blue-700 text-sm"
              onClick={() => window.location.href = `/blog/${post._id}`}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;