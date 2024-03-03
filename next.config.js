/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export", 
    distDir:"dist",
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my-loader.ts',
    //   },
    images:{
      unoptimized: true,
    }
};

// export default nextConfig;
module.exports = nextConfig;