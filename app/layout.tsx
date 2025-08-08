import type { Metadata } from "next";
import '/app/globals.css'



export const metadata: Metadata = {
  title: "Resultados Electorales",
  description: "Resultados electorales Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
