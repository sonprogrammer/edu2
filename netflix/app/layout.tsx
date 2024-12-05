'use client'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)

    // 아래와 같이 해주는 이유는 이벤트가 발생할때마다 리스너이벤트가 계속 발생해 메모리 누구사 발생함 그걸 방지하기위해
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={`flex gap-5 p-5 px-7 justify-between fixed top-0 right-0 left-0 z-20 text-xl ${isScrolled ? "bg-black" : "bg-transparent"}`}>
          <div className="flex gap-4">
            <Link href='/' className="text-red-600 text-2xl font-bold">NETFLIX</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Tv show</Link>
            <Link href='/'>Movies</Link>
          </div>
          <div className="flex gap-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white w-[20px]"/>
            <Link href='/kids'>Kids</Link>
            <FontAwesomeIcon icon={faBell} className="w-[20px]"/>
            <FontAwesomeIcon icon={faUser} className="w-[20px]"/>
          </div>
        </div>

        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
