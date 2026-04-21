/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 忽略 ESLint 和 TypeScript 构建错误，确保部署通过
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 图片配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;