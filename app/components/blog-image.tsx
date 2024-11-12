'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  height?: number;
}

export function BlogImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  height = 400
}: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div 
      className={`relative w-full ${className}`} 
      style={{ 
        height: `${height}px`
      }}
    >
      <Image
        src={error ? '/images/fallback.jpg' : src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`object-cover rounded-lg transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-500"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
}