import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unoptimized in dev prevents WASM/Turbopack image optimizer hangs
    unoptimized: process.env.NODE_ENV === "development",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
