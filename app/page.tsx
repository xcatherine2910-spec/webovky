import ServiceCard from '@/components/ServiceCard'
import Section from '@/components/Section'
import BookingCTA from '@/components/BookingCTA'
import RezervaceButton from '@/components/RezervaceButton'
import InfoTabs from '@/components/InfoTabs'
import FadeIn from '@/components/FadeIn'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import GallerySlider from '@/components/GallerySlider'
import MoustacheIcon from '@/components/ServiceCard'


const fade = MoustacheIcon

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/barbershop-bg.jpg"
            alt="Barbershop interior background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />
          {/* Bottom gradient lift */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto min-h-[70dvh] md:min-h-[80dvh] flex flex-col items-center justify-center text-center">
          <h1 className={`mt-3 ${bebas.className} text-7xl md:text-9xl text-white tracking-tight glitch`} data-text="DARK BARBERSHOP">DARK BARBERSHOP</h1>
          <p className={`mt-1 ${bebas.className} text-3xl md:text-4xl text-white/90 tracking-[0.2em]`}>
            LETOVICE
          </p>
          <p className="mt-4 text-base-muted max-w-2xl">
            Style. Trust. Care.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <RezervaceButton />
          </div>
        </div>

      </section>

      {/* Contact Information */}
      <section id="contact" className="container mx-auto py-8">
        <InfoTabs />
      </section>

      {/* Services */}
      <FadeIn delay={0.2}>
        <Section id="services" title="Služby" titleClassName={`text-center ${bebas.className} text-5xl md:text-6xl`}>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            <FadeIn delay={0.1} direction="left">
              <ServiceCard title="Klasický střih" price="350 Kč" description="Základní střih zahrnující mytí, masáž hlavy, styling, kolínská." duration="45 minut" icon="cut" />
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <ServiceCard title="Skin fade" price="450 Kč" description="Moderní střih s výrazným přechodem na kůži, mytí vlasů, masáž hlavy, foukaná, styling, kolínská." duration="60 minut" icon="cut" />
            </FadeIn>
            <FadeIn delay={0.3} direction="right">
              <ServiceCard title="Úprava vousů" price="300 Kč" description="Kontury a zastřižení vousů strojkem, mytí vousů, úprava obočí, olejíček na vousy + kolínská." duration="30 minut" icon="moustache" />
            </FadeIn>
            <FadeIn delay={0.4} direction="left">
              <ServiceCard title="Hot towel shave" price="380 Kč" description="Tradiční holení břitvou s metodou horkého ručníku, hydratační balzám/olejíček, masáž hlavy a krku, kolínská." duration="45 minut" icon="droplets" />
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <ServiceCard title="Dětský střih" price="300 Kč" description="Pro děti do 12 let, zahrnuje mytí, střih a jednoduchý styling." duration="45 minut" icon="baby" />
            </FadeIn>
            <FadeIn delay={0.6} direction="right">
              <ServiceCard title="Barvení vlasů/vousů" price="650 Kč" description="Profesionální barvení pro změnu nebo zakrytí šedin." duration="60 minut" icon="coloring" />
            </FadeIn>
            <FadeIn delay={0.7} direction="left">
              <ServiceCard title="Dark full experience" price="900 Kč" description="Střih, úprava vousů/obočí, horký ručník a masáž hlavy + čištění pleti, hydratace a black mask." duration="120 minut" icon="crown" highlighted={true} />
            </FadeIn>
          </div>
        </Section>
      </FadeIn>

      

      {/* Showcase Gallery (Interactive 3x3 slider) */}
      <FadeIn delay={0.4}>
        <Section id="testimonials" title="Ukázka prací" kicker="galerie" titleClassName={bebas.className}>
          <GallerySlider
            images={[
              '/A4E0EC6F-1B67-4F0C-9BBA-4A96C6DDF16C.jpg',
              '/AB7A43EB-D93F-475B-8DCB-85172C03E88E.jpg',
              '/F36FE2E1-0795-4BBF-A295-892FAB8752CE.jpg',
              '/IMG_0872.png',
              '/IMG_0225_jpg.jpg',
              '/IMG_0372_jpg.jpg',
              '/IMG_0487_jpg.jpg',
              '/IMG_0838_jpg.jpg',
              '/IMG_0871.png',
              '/IMG_0223_jpg.jpg',
            ]}
          />
        </Section>
      </FadeIn>

      {/* Booking CTA */}
      <FadeIn delay={0.6}>
        <section className="container mx-auto py-12 md:py-20">
          <BookingCTA />
        </section>
      </FadeIn>


      {/* Social Media */}
      <FadeIn delay={0.7}>
        <section className="container mx-auto py-8 md:py-12">
          <div className="text-center">
            <h3 className={`${bebas.className} text-white text-2xl md:text-3xl mb-6`}>Sleduj nás</h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <a 
                href="https://www.instagram.com/barber_letovice/#"
                className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-pink-400 group-hover:text-pink-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/people/DARK-Barbershop-Letovice/61576568164908/"
              className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@dark.barbershop.l"
              className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
