import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nashville Gig Guide - The Complete Nashville Music Scene',
  description: 'Nashville\'s most comprehensive music database. Show listings, venue guides, studio directory, and industry connections.',
  keywords: ['Nashville music', 'gig guide', 'show listings', 'music venues', 'recording studios', 'Nashville musicians'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}