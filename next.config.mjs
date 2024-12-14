/** @type {import('next').NextConfig} */
const nextConfig = {
    // Base path for deployment under /ngmun
    basePath: '/ngmun',
  
    // Optimize for static site generation
    output: 'export',
  
    // Ensure proper handling of images
    images: {
      unoptimized: true, // Required for static builds
      domains: ['res.cloudinary.com']
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: '/ngmun',
    },
    publicRuntimeConfig: {
        basePath: '/ngmun',
      },
    };

  
  export default nextConfig;