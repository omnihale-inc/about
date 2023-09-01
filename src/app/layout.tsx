import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['300','400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Omnihale',
  description: 'Techno Sentience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${josefin.className} min-h-screen`}>{children}</body>
    </html>
  )
}
