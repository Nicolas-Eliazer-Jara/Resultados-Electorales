import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resultados Electorales",
  description: "Resultados electorales Argentina",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gray-300">
        {children}
      </body>
    </html>
  );
}
