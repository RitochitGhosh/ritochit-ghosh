import Footer from '@/components/footer'
import Header from '@/components/header'
import Providers from '@/components/providers'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })


export const metadata: Metadata = {
  title: 'Ritochit Ghosh',
  description: 'A portfolio website for Ritochit Ghosh'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning >
      <body className={cn(
        'flex min-h-screen flex-col font-sans antialiased',
        inter.variable,
        playfair.variable
      )}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
