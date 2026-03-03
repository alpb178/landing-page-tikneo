import type { Metadata } from "next";
import { Inter, Arvo, DM_Mono } from "next/font/google";
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

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
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
    url: "https://tikneo.corpsc.com/",
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
    <html lang="es" className={`${inter.variable} ${arvo.variable} ${dmMono.variable}`}>
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
