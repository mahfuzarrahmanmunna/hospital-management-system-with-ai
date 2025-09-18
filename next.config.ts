import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "*",

            },
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com"
            }
        ],
    },
//   reactStrictMode: true, 
//   swcMinify: true,       
};

export default nextConfig;
