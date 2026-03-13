/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/summit-dental-care",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;