const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '100%'
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'lora': ['var(--font-lora)', 'serif'],
      },
    }
  },
  plugins: [],
}); 