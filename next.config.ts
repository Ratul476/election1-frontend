import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for static site generation

  images: {
    domains: ["images.ajkerpatrika.com", "www.washingtonpost.com"],
    unoptimized: true, // Needed for `next export`
  },
};

export default nextConfig;
