import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  turbopack: {
    root: "/Users/manuarora/Documents/personal/renderlab",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {},
});

export default withMDX(nextConfig);
