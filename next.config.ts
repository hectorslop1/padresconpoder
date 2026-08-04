import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /get-support was the old combined contact page. The plan renames it to
      // /contact, so keep the old URL working for anything already linking to it.
      { source: "/get-support", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
