"use client"

import Image from "next/image"
import { useCallback, useMemo, useState, useEffect } from "react"

type Props = {
  images: string[]
  className?: string
}

const ITEMS_PER_PAGE = 9

export default function GallerySlider({ images, className }: Props) {
  const [index, setIndex] = useState(0)

  const totalPages = Math.max(1, Math.ceil(images.length / ITEMS_PER_PAGE))
  const currentPage = Math.floor(index / ITEMS_PER_PAGE)

  const pageStartIndex = currentPage * ITEMS_PER_PAGE
  const visible = useMemo(() => {
    const slice = images.slice(pageStartIndex, pageStartIndex + ITEMS_PER_PAGE)
    if (slice.length < ITEMS_PER_PAGE && images.length > 0) {
      // wraparound to fill up to 9 tiles for nicer grid
      const needed = ITEMS_PER_PAGE - slice.length
      return slice.concat(images.slice(0, needed))
    }
    return slice
  }, [images, pageStartIndex])

  const goPrev = useCallback(() => {
    const newPage = (currentPage - 1 + totalPages) % totalPages
    setIndex(newPage * ITEMS_PER_PAGE)
  }, [currentPage, totalPages])

  const goNext = useCallback(() => {
    const newPage = (currentPage + 1) % totalPages
    setIndex(newPage * ITEMS_PER_PAGE)
  }, [currentPage, totalPages])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goPrev, goNext])

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-base-muted">Page {currentPage + 1} / {totalPages}</div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {visible.map((src, idx) => (
          <div key={`${pageStartIndex}-${idx}`} className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src={src}
              alt={`Showcase image ${pageStartIndex + idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 768px) 33vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
