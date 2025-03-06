/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "aos/dist/aos.css";
import LenisSmoothScroll from "./LenisSmoothScroll";
import Loading from "./loading";
import ScrollProgressCircle from "@/components/ScrollProgressCircle";
import BottomToTop from "@/components/BottomToTop";
import { FooterTwo } from "@/components/shared/FooterTwo";
import NavbarTwo from "@/components/shared/NavbarTwo";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DREAMS Instrument technology",
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
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <Loading>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavbarTwo />
          <ScrollProgressCircle />
          <BottomToTop />
          <LenisSmoothScroll />
          <main>{children}</main>


          <FooterTwo />


        </body>
      </Loading>

    </html>
  );
}
