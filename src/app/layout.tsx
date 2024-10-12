import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head"; // Import Head from next/head

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidyadhar-Portfolio",
  description: "Developed by Vidyadhar Dinde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <Head>
        <link rel="icon" href="/assets/Siddhivinayak-Engineers.ico" />
        <meta name="description" content="Developed by Vidyadhar Dinde" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other meta tags as needed */}
      </Head>
      <body className={twMerge(outfit.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
