'use client';

import { useState } from 'react';
import Header from '@/app/components/header';
import Image from 'next/image';

function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'blog_uploads');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setImageUrl(data.secure_url);
      } else {
        console.error('Cloudinary response:', data);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!imageUrl) {
      console.error('No image URL available. Ensure the image is uploaded before submitting.');
      return;
    }
  
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, imageUrl }), // Ensure imageUrl is included
    });
  
    if (response.ok) {
      setTitle('');
      setContent('');
      setImageUrl('');
      setSuccessMessage('Post created successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      console.error('Error creating post');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Grey background and spacing */}
      <div className="mt-20 bg-gray-200 py-10"> {/* Added margin-top and padding */}
        <div className="max-w-4xl mx-auto p-10 bg-white rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Create a New Post</h2>
          {successMessage && <div className="text-green-600 font-medium mb-6 text-center text-lg">{successMessage}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-3">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-5 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-3">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-5 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                rows={10}
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-3">Image</label>
              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0])}
                  className="w-full px-5 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                />
                {isUploading && <div className="text-teal-600">Uploading image...</div>}
                {imageUrl && (
                  <div className="relative">
                    <Image src={imageUrl} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => setImageUrl('')}
                      className="absolute top-2 right-2 bg-red-500 text-black p-2 rounded-full hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className={`w-full ${
                isUploading ? 'bg-gray-400' : 'bg-teal-500 hover:bg-teal-600'
              } text-white text-lg font-medium py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg`}
            >
              {isUploading ? 'Uploading...' : 'Add Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;