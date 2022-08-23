/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    rewrites: async () => [
        {
            source: '/rewriteFrom',
            destination: '/rewriteTo',
        }]
}


module.exports = nextConfig
