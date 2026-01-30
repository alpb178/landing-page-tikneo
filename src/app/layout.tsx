import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tikneo",
  description:
    "La plataforma de gestión de tareas y proyectos que te permite optimizar tu productividad y aumentar tu rendimiento.",
  keywords:
    "gestión de tareas, gestión de proyectos, productividad, rendimiento, trabajo en equipo, colaboración",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tikneo",
    description:
      "La plataforma de gestión de tareas y proyectos que te permite optimizar tu productividad y aumentar tu rendimiento.",
    images: "/logo.png",
    type: "website",
    url: "https://tikneo.vercel.app",
    siteName: "Tikneo",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
