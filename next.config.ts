import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The legal pages moved to /privacy and /terms; keep the old URLs alive
      // because they were already published and linked externally. Since the
      // site is now served under /[locale], both the bare and the prefixed
      // forms have to be redirected.
      { source: "/legal/privacidad", destination: "/privacy", permanent: true },
      { source: "/legal/condiciones", destination: "/terms", permanent: true },
      {
        source: "/:locale(es|en|fr)/legal/privacidad",
        destination: "/:locale/privacy",
        permanent: true,
      },
      {
        source: "/:locale(es|en|fr)/legal/condiciones",
        destination: "/:locale/terms",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
