'use client';

import { useEffect, useState } from 'react';
import { useDarkMode } from '../components/darkMode';
import BlogPostsPage from '../components/blogPosts';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Fetch all blog posts
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts || []);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} mt-8`}>
      <BlogPostsPage posts={posts} darkMode={darkMode} />
    </div>
  );
}