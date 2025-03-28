import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      components: {
        Navbar: {
          defaultProps: {
            className: "block w-full fixed top-0 left-0 right-0 bg-gray-300 shadow-md z-[9999]",
            fullWidth: true,
          },
          styles: {
            base: {
              navbar: {
                initial: {
                  display: "block",
                  position: "fixed",
                  width: "100vw",
                  maxWidth: "100vw",
                  inset: "0px",
                  zIndex: "9999",
                  padding: "0",
                  margin: "0",
                }
              }
            }
          }
        }
      },
      maxWidth: {
        'screen-2xl': '100%'
      }
    }
  },
  plugins: [],
};

export default withMT(config);