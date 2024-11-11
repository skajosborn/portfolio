// app/layout.js or app/RootLayout.js
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/app/components/header';
import { DarkModeProvider } from '@/app/components/darkMode';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 flex flex-col min-h-screen`}>
        <DarkModeProvider>
          <Header />
          <main className="pt-[70px] sm:pt-[80px] md:pt-[90px] lg:pt-[120px] flex-grow max-w-screen">
            {children}
          </main>
        </DarkModeProvider>
      </body>
    </html>
  );
}