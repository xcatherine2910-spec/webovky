import type { Metadata } from 'next'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: {
    default: 'Noir Barbershop',
    template: '%s · Noir Barbershop',
  },
  description: 'Dark, minimal, modern barbershop in the heart of the city. Precision cuts. Clean fades. Straight razor shaves.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Noir Barbershop',
    description: 'Precision cuts. Clean fades. Straight razor shaves.',
    url: 'https://example.com',
    siteName: 'Noir Barbershop',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  themeColor: '#0a0a0a'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>      
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
