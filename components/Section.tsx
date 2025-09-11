export default function Section({ id, title, kicker, children, titleClassName }: { id?: string, title: string, kicker?: string, children: React.ReactNode, titleClassName?: string }) {
  return (
    <section id={id} className="container mx-auto py-16 md:py-24">
      {kicker && <p className="text-accent text-sm uppercase tracking-wider mb-2">{kicker}</p>}
      <h2 className={`font-display text-3xl md:text-4xl text-white ${titleClassName ?? ''}`}>{title}</h2>
      <div className="mt-8">
        {children}
      </div>
    </section>
  )
}
