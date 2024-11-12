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
    <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 p-12 ${darkMode ? 'text-white' : 'text-black'}`}>
      {posts.map((post) => (
        <div key={post._id} className={`rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-6 text-xl">{post.date}</p>
          {post.imageUrl && (
            <div className={`${darkMode ? '' : 'bg-white p-4 rounded-lg'} mb-6`}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
          )}
          <div
            className="prose max-w-none text-lg mb-6"
            dangerouslySetInnerHTML={{ __html: post.content.length > 200 ? `${post.content.substring(0, 200)}...` : post.content }}
          />
          <a href={`/blog/${post._id}`} className="text-blue-600 hover:underline mt-6 block text-xl font-medium">Read more →</a>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsPage;