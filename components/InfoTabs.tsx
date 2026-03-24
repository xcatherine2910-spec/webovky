import { MapPin, Clock, Phone, CreditCard } from 'lucide-react'

export default function InfoTabs() {
  const infoSections = [
    {
      id: 'address',
      label: 'Adresa',
      icon: MapPin,
      content: (
        <div className="text-center">
          <p className="text-base-muted text-sm">
            Masarykovo náměstí 1098/3a<br />
            679 61 Letovice<br />
            1. patro
          </p>
        </div>
      )
    },
    {
      id: 'hours',
      label: 'Otevírací doba',
      icon: Clock,
      content: (
        <div className="text-center">
          <div className="text-base-muted text-sm">
            <p>Otevřeno každý den dle domluvy nebo online rezervací</p>
          </div>
        </div>
      )
    },
    {
      id: 'phone',
      label: 'Telefon',
      icon: Phone,
      content: (
        <div className="text-center">
          <div className="text-base-muted text-sm space-y-1">
            <p>
              <a href="tel:+420720329593" className="hover:text-white transition-colors">
                +420 720 329 593
              </a>
            </p>
            <p>
              <a href="mailto:info@darksalon.cz" className="hover:text-white transition-colors">
                info@darksalon.cz
              </a>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'payment',
      label: 'Platba',
      icon: CreditCard,
      content: (
        <div className="text-center">
          <p className="text-base-muted text-sm">
            Platba hotově nebo kartou.
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {infoSections.map((section) => {
        const Icon = section.icon
        return (
          <div key={section.id} className="card p-4 group">
            <div className="flex items-center justify-center mb-3">
              <div className="flex items-center gap-2 text-white">
                <div className="p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <Icon size={18} className="text-white drop-shadow-sm" />
                </div>
                <span className="font-display text-sm tracking-wide">{section.label}</span>
              </div>
            </div>
            <div className="min-h-[80px] flex items-center justify-center">
              {section.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
