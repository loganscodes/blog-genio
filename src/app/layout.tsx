import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noticias México",
  description: "Test genio.fm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body className={`${inter.className}`}>
          {children}
          <GoogleTagManager gtmId="GTM-W7R8Q5DT" />
          <GoogleAnalytics gaId='G-LK4HDSF5HR' />
        </body>
      </html>
    </ViewTransitions>
  );
}
