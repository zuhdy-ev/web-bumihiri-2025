/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // basePath: '/2024',
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',
    path: 'http://localhost:3000',
    loaderFile: './src/components/loader.js',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost:1337',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
