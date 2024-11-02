import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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