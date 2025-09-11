'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add delay before triggering animation
          const timer = setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay * 1000)

          return () => clearTimeout(timer)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '-50px', // Start animation 50px before element enters viewport
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, hasAnimated])

  const translateY = direction === 'up' ? 'translateY(30px)' : direction === 'down' ? 'translateY(-30px)' : 'translateY(0)'
  const translateX = direction === 'left' ? 'translateX(30px)' : direction === 'right' ? 'translateX(-30px)' : 'translateX(0)'

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : `${translateX} ${translateY}`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  )
}
