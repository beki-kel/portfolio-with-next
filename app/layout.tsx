import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bereket Kelay",
  description: "Bereket Kelay",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
        <link rel="manifest" href="../public/site.webmanifest"/>
      </Head>
      <body className={space_Grotesk.className}>
        
        {children}

        </body>
    </html>
  );
}
