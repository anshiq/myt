/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    backend_url:  "http://16.171.197.13:8080"},
  experimental: {
    appDir: true,
  },
  images: {  // propertes to set in next js to access files from other source
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8080',
        pathname:'/**' 
      },
    ],
  },
};

module.exports = nextConfig;
