// app/layout.js or app/RootLayout.js
// import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/app/components/header';
import { DarkModeProvider } from '@/app/components/darkMode';
import { Inter, Playfair_Display, Cormorant_Garamond, Lora } from 'next/font/google';

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

const inter = Inter({ subsets: ['latin'] });

// Define the Playfair Display font
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// Add the Cormorant Garamond font
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

// Add the Lora font
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${playfair.variable} ${cormorant.variable} ${lora.variable} antialiased m-0 p-0 flex flex-col min-h-screen bg-white border-0`}>
        <DarkModeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </DarkModeProvider>
      </body>
    </html>
  );
}