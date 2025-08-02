import type { Metadata } from "next";
import { Space_Grotesk, Lato } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: '300'
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '300'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${lato.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
