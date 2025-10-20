import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SesameTime - Time tracking that simplifies your business",
  description:
    "Optimize employee management saving time, effort and money. Time tracking, shift management, task planning and much more.",
  keywords:
    "time tracking, employee management, clock in, shifts, payroll, human resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
