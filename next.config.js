/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 's3.amazonaws.com', 'www.nvidia.com']
  }
}
