import Link from 'next/link'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function BookingCTA() {
  return (
    <div id="book" className="card p-8 md:p-12 text-center backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
      <h3 className={`${bebas.className} text-white text-2xl md:text-3xl`}>Zarezervuj si střih online</h3>
      <p className="mt-3 text-base-muted">Jednoduchý online formulář. Vyber si službu a termín.</p>
      <div className="mt-6 flex justify-center">
        <Link href="/rezervace" className="btn btn-primary">Rezervace</Link>
      </div>
    </div>
  )
}
