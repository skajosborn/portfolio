// app/components/BlogPostsPage.tsx
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
    <div className={`max-w-4xl mx-auto p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {posts.map((post) => (
        <div key={post._id} className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.date}</p>
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg mb-8"
            />
          )}
          <div className="prose max-w-none">
            <p>{post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsPage;