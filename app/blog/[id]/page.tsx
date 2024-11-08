'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/app/components/header';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      setError('Invalid blog post ID');
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch the post');
        const data = await response.json();
        setPost(data);
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Post not found');
      }
    };

    fetchPost();
  }, [id]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) throw new Error('Failed to update post');

      const updatedPost = await response.json();
      setPost(updatedPost);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete post');

      router.push('/blog'); // Redirect to blog list after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (error) return <div className="text-center text-red-500 mt-20">{error}</div>;
  if (!post) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="bg-gray-100 text-black min-h-screen py-12">
      <Header />
      <div className="max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-lg p-8 min-h-[1000px] flex flex-col">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover rounded-t-lg mb-6"
            width={800}
            height={400}
          />
        )}
        {isEditing ? (
          <div className="flex flex-col flex-grow">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-2xl font-bold mb-4 border-b"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full text-lg mb-4 border p-2 flex-grow"
              rows={12}
            ></textarea>
            <div className="mt-auto">
              <button onClick={handleEditSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
                Save Changes
              </button>
              <button onClick={handleEditToggle} className="ml-4 text-gray-500">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="text-sm text-gray-500 mb-6">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <p className="text-gray-700 text-lg flex-grow">{post.content}</p>
            <div className="mt-auto">
              <button onClick={handleEditToggle} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                Edit
              </button>
              <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded ml-4 mt-4">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPostPage;