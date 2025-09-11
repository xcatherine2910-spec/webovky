import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-border/60 backdrop-blur supports-[backdrop-filter]:bg-base-bg/60">
      <div className="container mx-auto flex h-12 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-xs text-base-muted">
          <Link href="/" className="hover:text-white">Úvod</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/rezervace" className="btn btn-primary btn-sm">Rezervace</Link>
        </div>
      </div>
    </header>
  )
}
