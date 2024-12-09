'use client'

import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";


// export const metadata: Metadata = {
//   title: "hi",
//   description: "just for next study",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    fetch('http://localhost:9999/topics')
      .then(res => res.json())
      .then(data => {
      })

      const res = await fetch('http://localhost:9999/topics')
      const topics = await res.json()
  
  
  
  return (
    <html>
      <body className="p-2">
        <Link href='/'>
          <h1>WEB</h1>
        </Link>
        <ol>
            {topics.map((topic) => (
              <li><Link href={`/read/${topic.id}`}>{topic.id}</Link></li>
            ))}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update/:id">update</Link></li>
          <li><input type="button" value='delete'/></li>
        </ul>
      </body>
    </html>
  );
}
