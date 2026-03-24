import { Scissors, Sparkles, Crown, Palette, Baby, Droplets, User } from 'lucide-react'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

// Custom Moustache Icon Component
const MoustacheIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left side of moustache */}
    <path
      d="M6 12c0-1 1-2 2-2c1 0 2 0.5 3 1c0.5 0.25 1 0.5 1 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.9"
    />
    
    {/* Right side of moustache */}
    <path
      d="M12 12c0-0.5 0.5-0.75 1-1c1-0.5 2-1 3-1c1 0 2 1 2 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.9"
    />
    
    {/* Center connection */}
    <path
      d="M11.5 12c0.2 0 0.3 0 0.5 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Moustache texture details */}
    <path
      d="M7 11.5c0.5 0.2 1 0.3 1.5 0.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M15.5 12c0.5-0.2 1-0.3 1.5-0.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.7"
    />
    
    {/* Curled ends */}
    <path
      d="M6 12c-0.5 0.5-0.5 1 0 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M18 12c0.5 0.5 0.5 1 0 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

type Props = {
  title: string
  price: string
  description: string
  duration: string
  icon?: 'cut' | 'shave' | 'style' | 'crown' | 'coloring' | 'baby' | 'droplets' | 'face' | 'beard' | 'shavette' | 'barbercut' | 'razor' | 'outlinedbeard' | 'haircutbarber' | 'moustache'
  highlighted?: boolean
  badge?: string
}

const iconMap = {
  cut: Scissors,
  shave: Sparkles,
  style: Sparkles,
  crown: Crown,
  coloring: Palette,
  baby: Baby,
  droplets: Droplets,
  face: User,
  beard: MoustacheIcon,
  shavette: MoustacheIcon,
  barbercut: MoustacheIcon,
  razor: MoustacheIcon,
  outlinedbeard: MoustacheIcon,
  haircutbarber: MoustacheIcon,
  moustache: MoustacheIcon,
}

export default function ServiceCard({ title, price, description, duration, icon = 'cut', highlighted = false }: Props) {
  const Icon = iconMap[icon]
  return (
    <div className={`card p-6 md:p-8 flex flex-col transition-colors group ${
      highlighted 
        ? 'border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-400/10 to-orange-400/5 hover:border-yellow-400/70 shadow-lg shadow-yellow-400/20' 
        : 'hover:border-white/30'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`rounded-lg p-3 transition-colors ${
          highlighted 
            ? 'bg-yellow-400/20 group-hover:bg-yellow-400/30' 
            : 'bg-white/10 group-hover:bg-white/15'
        }`}>
          <Icon className={`h-6 w-6 ${highlighted ? 'text-yellow-300' : 'text-white'}`} />
        </div>
        <span className={`rounded-md px-3 py-1 text-sm font-medium ${
          highlighted 
            ? 'bg-yellow-400/30 text-yellow-100 border border-yellow-400/40' 
            : 'bg-white/10 text-white/90'
        }`}>{price}</span>
      </div>
      
      <div className="flex-1">
        <h3 className={`${bebas.className} text-white text-2xl tracking-tight mb-3`}>{title}</h3>
        <p className="text-base-muted text-sm leading-relaxed mb-4">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-base-muted text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{duration}</span>
          </div>
          <a href="/rezervace" className={`text-sm px-4 py-2 rounded-md transition-colors font-medium inline-block ${
            highlighted 
              ? 'bg-yellow-400/30 hover:bg-yellow-400/40 text-yellow-100 border border-yellow-400/40' 
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}>
            REZERVOVAT
          </a>
        </div>
      </div>
    </div>
  )
}
