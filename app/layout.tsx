import type { Metadata } from 'next'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: {
    default: 'DARK Barbershop | Letovice',
    template: '%s · DARK Barbershop | Letovice',
  },
  description: 'Moderní holičství v Letovicích. Kompletní holičské služby. Pánské i dětské střihy, úprava vousů, barvení vlasů, depilace voskem...',
  keywords: ['holičství', 'letovice', 'střihy vlasů', 'holení britvou', 'barbershop', 'moderní holičství', 'fade', 'vousy'],
  metadataBase: new URL('https://dark-barbershop-letovice.netlify.app'),
  openGraph: {
    title: 'DARK Barbershop | Letovice',
    description: 'Moderní holičství v Letovicích. Přesné střihy, čisté fade, tradiční holení britvou.',
    url: 'https://dark-barbershop-letovice.netlify.app',
    siteName: 'DARK Barbershop | Letovice',
    images: [
      {
        url: '/barbershop-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Dark Barber Salon Letovice - Moderní holičství',
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DARK Barbershop | Letovice',
    description: 'Moderní holičství v Letovicích. Přesné střihy, čisté fade, tradiční holení britvou.',
    images: ['/barbershop-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#0a0a0a'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="dark">
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
