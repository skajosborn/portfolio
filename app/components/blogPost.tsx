// app/components/blogPost.tsx
import Image from 'next/image';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface BlogPostPageProps {
  post: BlogPost; // Adjusted to expect a single post object
  darkMode: boolean;
}

const BlogPostPage = ({ post, darkMode }: BlogPostPageProps) => {
  if (!post) {
    return (
      <div className="text-center mt-40 p-8">
        <p className="text-red-500 text-xl">Error: Blog post data is unavailable.</p>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl mb-10 mt-20 mx-auto p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
      )}
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPostPage;