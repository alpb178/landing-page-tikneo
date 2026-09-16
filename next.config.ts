import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The legal pages moved to /privacy and /terms; keep the old URLs alive
      // because they were already published and linked externally.
      { source: "/legal/privacidad", destination: "/privacy", permanent: true },
      { source: "/legal/condiciones", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
