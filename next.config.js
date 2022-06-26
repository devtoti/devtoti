/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://stackoverflow.com/posts/66662033',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
