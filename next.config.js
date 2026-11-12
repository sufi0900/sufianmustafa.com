// next.config.js - Without next-pwa
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize CSS and fonts
  optimizeFonts: true,
  
  images: {
    domains: ['your-sanity-domain.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io",
      port: "",
    }],
  },
  
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app'],
    },
    optimizeCss: true,
  },
  
  trailingSlash: false, // Changed to false for cleaner URLs
  
  async redirects() {
    return [
      {
        source: '/ai-tools',
        destination: 'https://doitwithai.tools/ai-tools',
        permanent: true,
      },
      {
        source: '/ai-tools/:path*',
        destination: 'https://doitwithai.tools/ai-tools/:path*',
        permanent: true,
      },
      {
        source: '/ai-code',
        destination: 'https://doitwithai.tools/ai-code',
        permanent: true,
      },
      {
        source: '/ai-code/:path*',
        destination: 'https://doitwithai.tools/ai-code/:path*',
        permanent: true,
      },
      {
        source: '/ai-learn-earn',
        destination: 'https://doitwithai.tools/ai-learn-earn',
        permanent: true,
      },
      {
        source: '/ai-learn-earn/:path*',
        destination: 'https://doitwithai.tools/ai-learn-earn/:path*',
        permanent: true,
      },
      {
        source: '/free-ai-resources',
        destination: 'https://doitwithai.tools/free-ai-resources',
        permanent: true,
      },
      {
        source: '/free-ai-resources/:path*',
        destination: 'https://doitwithai.tools/free-ai-resources/:path*',
        permanent: true,
      },
      {
        source: '/ai-news',
        destination: 'https://doitwithai.tools/ai-news',
        permanent: true,
      },
      {
        source: '/ai-news/:path*',
        destination: 'https://doitwithai.tools/ai-news/:path*',
        permanent: true,
      },
    ];
  },
  
 

  // Add headers for cache control
 
};

module.exports = nextConfig;