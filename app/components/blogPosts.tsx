import Image from 'next/image';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface BlogPostsPageProps {
  posts: BlogPost[];
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
    <div className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {posts.map((post) => (
        <div key={post._id} className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
          <p className="text-gray-500 mb-4">{post.date}</p>
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
          )}
          <div
            className="prose max-w-none text-sm"
            dangerouslySetInnerHTML={{ __html: post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content }}
          />
          <a href={`/blog/${post._id}`} className="text-blue-600 hover:underline mt-4 block">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsPage;