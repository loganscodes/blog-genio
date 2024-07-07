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
        <head>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-LK4HDSF5HR`}
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LK4HDSF5HR');
            `,
            }}
          />
        </head>
        <body className={`${inter.className}`}>
          {children}
          <GoogleTagManager gtmId="GTM-W7R8Q5DT" />
          <GoogleAnalytics gaId='G-LK4HDSF5HR' />
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7R8Q5DT"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        </body>
      </html>
    </ViewTransitions>
  );
}
