import Image from 'next/image'
import Link from 'next/link'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-1.5 ${className}`} aria-label="Dark Barbershop">
      <Image
        src="/dark.png"
        alt="Dark Barbershop Logo"
        width={20}
        height={20}
        className="h-5 w-5 rounded-sm"
      />
      <span className={`${bebas.className} tracking-wide text-base`}>DARK BARBERSHOP</span>
    </Link>
  )
}
