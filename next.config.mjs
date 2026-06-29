/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Project Pages are served from https://193t1mes.github.io/amrita-academy/
// so a basePath is mandatory in production or every asset 404s.
const basePath = isProd ? "/amrita-academy" : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export has no image optimization server.
    unoptimized: true,
  },
  // Exposed so raw <video>/asset URLs in client code can resolve the basePath.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
