import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ravi Mishra - Full Stack Developer',
  description: 'Portfolio of Ravi Mishra - 6 years experienced Full Stack Developer specializing in Java, Spring Boot, React, AWS, and Gen AI',
  keywords: 'Ravi Mishra, Full Stack Developer, Java, Spring Boot, React, AWS, Gen AI, Portfolio',
  authors: [{ name: 'Ravi Mishra' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}