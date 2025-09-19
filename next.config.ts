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
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "/**",
            },
        ],
    },
    //   reactStrictMode: true, 
    //   swcMinify: true,       
};

export default nextConfig;
