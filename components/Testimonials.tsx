import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Best fade in town. Clean lines and attention to detail. The vibe is immaculate.',
      author: 'Alex M.',
      rating: 5,
    },
    {
      quote: 'Love the minimal atmosphere. Always leave feeling sharp.',
      author: 'Jordan R.',
      rating: 5,
    },
    {
      quote: 'Professional, punctual, and precise. Five stars.',
      author: 'Sam K.',
      rating: 5,
    },
  ]

  return (
    <div id="testimonials" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <figure
          key={i}
          className="card p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-2 text-8xl/none text-white/5 select-none">
            “
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-white text-white" />
            ))}
          </div>

          <blockquote className="mt-4 text-white/90 text-lg leading-relaxed">
            “{t.quote}”
          </blockquote>

          <figcaption className="mt-6 text-base-muted text-sm">— {t.author}</figcaption>
        </figure>
      ))}
    </div>
  )
}
