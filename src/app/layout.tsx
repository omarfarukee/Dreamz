/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
// import "aos/dist/aos.css";
import LenisSmoothScroll from "./LenisSmoothScroll";
import Loading from "./loading";
import ScrollProgressCircle from "@/components/ScrollProgressCircle";
import BottomToTop from "@/components/BottomToTop";
import { FooterTwo } from "@/components/shared/FooterTwo";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dreams",
  description: "Generated Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>
      <Loading>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />

          <ScrollProgressCircle />
          <BottomToTop/>
          <LenisSmoothScroll />
          <main>{children}</main>


          <FooterTwo/>


        </body>
      </Loading>

    </html>
  );
}
