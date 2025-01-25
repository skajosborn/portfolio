'use client';

import Link from 'next/link';
import { useDarkMode } from './darkMode';

const BackHomeButton = () => {
  const { darkMode } = useDarkMode();
  
  return (
    <div className="flex justify-center">
      <Link 
        href="/"
        className={`bg-gray-100 px-6 py-8 rounded-md text-2xl font-inter font-light flex items-center justify-center transform hover:scale-105 ${
          darkMode ? 'text-black' : 'text-black'
        }`}
        style={{
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7), 0 0 50px rgba(255,255,255,0.4), 3px 3px 8px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.3)';
        }}
      >
        ← Back Home
      </Link>
    </div>
  );
};

export default BackHomeButton; 