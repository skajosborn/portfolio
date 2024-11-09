import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/app/components/header'

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
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div
          style={{
            transform: 'scale(0.8)', // Adjust this scale as needed
            transformOrigin: 'top left', // Keeps the scale anchored to the top-left corner
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}