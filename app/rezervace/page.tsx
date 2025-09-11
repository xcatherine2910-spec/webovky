'use client'

import { Bebas_Neue } from 'next/font/google'
import Script from 'next/script'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Rezervace() {
  const handleIframeLoad = () => {
    if (typeof window !== 'undefined' && (window as any).initBookioWidget) {
      (window as any).initBookioWidget()
    }
  }

  return (
    <div className="min-h-screen bg-base-bg text-white">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12">
        <div className="container mx-auto text-center">
          <h1 className={`${bebas.className} text-4xl md:text-6xl mb-6`}>
            Rezervace
          </h1>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-base-card/50 backdrop-blur rounded-lg p-8 md:p-12">
              <Script
                type="text/javascript"
                src="https://bookio-services-eu.s3.eu-central-1.amazonaws.com/assets/widget.bookio.js"
                strategy="afterInteractive"
              />
              <iframe
                id="bookio-iframe"
                src="https://services.bookio.com/dark-barbershop/widget?lang=cs&hiddenHeader=true"
                width="100%"
                onLoad={handleIframeLoad}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
