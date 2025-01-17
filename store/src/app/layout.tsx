import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "cloudset",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased h-screen flex flex-col items-center`}
      >
        <div className="flex flex-col h-full w-[393px] relative">
          <div className="navbar">
            <Link href='/'>
              <img src="./logo7.png" alt="logo" className="h-10" />
            </Link>
          </div>
          <div className="main">
            {children}
          </div>
          <div className="footer">
            <Link href='/'>메인</Link>
            <p>|</p>
            <Link href='/map'>지도</Link>
            <p>|</p>
            <Link href='/record'>내 옷장</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
