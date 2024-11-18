import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: {
          background: '#ffffff',
          foreground: '#171717',
          primary: '#f3f4f6',
          secondary: '#e5e7eb'
        },
        dark: {
          background: '#0a0a0a', 
          foreground: '#ededed',
          primary: '#1f2937',
          secondary: '#374151'
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'dancing-script': '"Dancing Script", cursive',
        'mulish': '"Mulish", sans-serif',
        'windsong': '"WindSong", cursive',
        'mea-culpa': '"Mea Culpa", cursive',
        'league-script': '"League Script", cursive',
        'gwendolyn': '"Gwendolyn", cursive',
        'carattere': '"Carattere", cursive',
        'rouge-script': '"Rouge Script", cursive',
        'poppins': ['Poppins', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
};

export default config;