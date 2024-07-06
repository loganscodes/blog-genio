import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ViewTransitions } from "next-view-transitions";

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
      <html lang="en">
        <GoogleTagManager gtmId="GTM-W7R8Q5DT" />
        <body className={`${inter.className} bg-gray-200`}>
          {children}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7R8Q5DT"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        </body>
      </html>

    </ViewTransitions>

  );
}
