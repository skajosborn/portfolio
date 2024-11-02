// // next.config.ts
// // import { Configuration } from 'webpack';
// // import { NextConfig } from 'next';

// const config = {
//   webpack: ({isServer}) => {
//     if (!isServer) {
//       config.watchOptions = {
//         ignored: /node_modules/, // Ignore unnecessary files/folders
//       };
//     }
//     return config;
//   },
// };

// export default config

// next.config.ts
// import { Configuration } from 'webpack';
// import { NextConfig } from 'next';

// const config: NextConfig = {
//   webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
//     if (!isServer) {
//       config.watchOptions = {
//         ignored: /node_modules/, // Ignore unnecessary files/folders
//       };
//     }
//     return config;
//   },
// };

// module.exports = config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "lh3.googleusercontent.com",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "res.cloudinary.com",
  //       pathname: "/**",
  //     },
  //   ],
  // },
};

export default nextConfig;
