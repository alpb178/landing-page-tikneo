import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tikneo - Control horario que simplifica tu negocio",
  description:
    "Optimiza la gestión de empleados ahorrando tiempo, esfuerzo y dinero. Control horario, gestión de turnos, planificación de tareas y mucho más.",
  keywords:
    "control horario, gestión de empleados, fichar, turnos, nóminas, recursos humanos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
