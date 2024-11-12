'use client';

import { useState } from 'react';
import Header from '@/app/components/header';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { BlogImage } from '@/app/components/blog-image';

// Dynamically import Quill without SSR
const Editor = dynamic(() => import('@/app/components/quillEditor'), { ssr: false });

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    setUploadError('');
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/blogs/uploadImage', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.url) {
        setImageUrl(data.url);
        setUploadError('');
      } else {
        throw new Error('No URL returned from upload');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadError('Failed to upload image. Please try again.');
      setImageUrl('');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      setUploadError('Please upload an image before submitting');
      return;
    }

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          imageUrl,
        }),
      });

      if (response.ok) {
        setTitle('');
        setContent('');
        setImageUrl('');
        setSuccessMessage('Post created successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      setSuccessMessage('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="mt-20 bg-gray-200 py-10">
        <div className="max-w-6xl mx-auto p-12 bg-white rounded-xl shadow-lg">
          <h2 className="text-5xl font-bold text-gray-800 mb-10 text-center">Create a New Post</h2>
          
          {successMessage && (
            <div className={`text-center p-4 mb-6 rounded ${
              successMessage.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="mb-8">
              <label className="block text-gray-700 text-3xl font-medium mb-3">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-6 py-6 text-3xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-3xl font-medium mb-3">Content</label>
              <div className="h-[700px]"> {/* Increased height for editor */}
                <Editor
                  onTextChange={setContent}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-3xl font-semibold mb-3">Image</label>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0])}
                  className="w-full px-6 py-4 text-3xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                />
                
                {isUploading && (
                  <div className="flex items-center text-3xl justify-center p-4 bg-gray-50 rounded-lg">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-500 mr-2"></div>
                    <span className="text-gray-600">Uploading image...</span>
                  </div>
                )}

                {uploadError && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                    {uploadError}
                  </div>
                )}

                {imageUrl && (
                  <div className="relative">
                    <BlogImage 
                      src={imageUrl}
                      alt="Blog post preview"
                      className="rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setImageUrl('')}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                      aria-label="Remove image"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className={`w-full ${
                isUploading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-teal-500 hover:bg-teal-600'
              } text-white text-4xl font-medium py-5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50`}
            >
              {isUploading ? 'Uploading...' : 'Add Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}