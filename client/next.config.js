/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    backend_url:  "http://16.171.34.66:6225"},
  experimental: {
    appDir: true,
  },
  images: {  // propertes to set in next js to access files from other source
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '16.171.34.66',
        port: '6225',
        pathname:'/**' 
      },
    ],
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env:{
//     backend_url:  "http://127.0.0.1:6225"},
//   experimental: {
//     appDir: true,
//   },
//   images: {  // propertes to set in next js to access files from other source
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: '127.0.0.1',
//         port: '6225',
//         pathname:'/**' 
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
