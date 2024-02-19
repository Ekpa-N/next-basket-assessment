/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
            port: '',
            pathname: '/product-images/**', //https://cdn.dummyjson.com/product-images/1/1.jpg
          },
        ],
      },
};

export default nextConfig;
