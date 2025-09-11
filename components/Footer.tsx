import Link from 'next/link'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-base-border/60">
      <div className="container mx-auto py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className={`text-white ${bebas.className} text-xl`}>DARK BARBERSHOP</p>
          <p className="text-base-muted text-sm">Masarykovo náměstí 1098/3a, 679 61 Letovice</p>
          <p className="text-base-muted text-sm">Otevřeno každý den dle domluvy</p>
        </div>
        <div className="flex gap-6 text-sm text-base-muted">
          <Link href="https://www.instagram.com/barber_letovice/#" className="hover:text-white">Instagram</Link>
          <Link href="https://www.facebook.com/people/DARK-Barbershop-Letovice/61576568164908/#" className="hover:text-white">Facebook</Link>
          <Link href="https://www.tiktok.com/@barbershop.letovice" className="hover:text-white">TikTok</Link>
          <span className="text-white">·</span>
          <span className="text-sm">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
