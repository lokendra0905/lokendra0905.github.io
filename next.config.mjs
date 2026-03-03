/** @type {import('next').NextConfig} */

// For GitHub Pages project site: username.github.io/repo-name
// Set NEXT_PUBLIC_BASE_PATH to your repo name, e.g. "Verel-portfolio"
// For user/org site (username.github.io), leave unset or empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
