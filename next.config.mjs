/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.fotmob.com',
            port: '',
            pathname: '/image_resources/**',
          },
        ],
      },
};

export default nextConfig;
