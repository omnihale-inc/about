import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from './_components/Footer';
import Header from './_components/Header';

const satoshi = localFont({
  src: './_fonts/Satoshi_Complete/Satoshi_Complete/Fonts/Variable/Satoshi-Variable.ttf',
});

export const metadata: Metadata = {
  title: 'Omnihale - About Omnihale, Company, Team & Product',
  description:
    'Unveil the forefront of human advancement. Dive into your favored groundbreaking company leading innovation and propelling the evolution of humanity',
  openGraph: {},
  icons: '/logo.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/logo.svg' type='image/x-icon' />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${satoshi.className} min-h-screen`}
      >
        <div id='mobile-nav'></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
