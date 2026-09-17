import proxyMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default proxyMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en|fr)/:path*"],
};
