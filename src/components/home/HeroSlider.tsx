import { useCallback, useEffect, useState } from 'react'
import { heroSlides } from '../../data/siteData'

interface HeroSliderProps {
  activeSlide?: number
  onSlideChange?: (index: number) => void
}

export default function HeroSlider({ activeSlide, onSlideChange }: HeroSliderProps) {
  const [internal, setInternal] = useState(0)

  const current = activeSlide ?? internal

  const next = useCallback(() => {
    const nextIndex = (current + 1) % heroSlides.length
    setInternal(nextIndex)
    onSlideChange?.(nextIndex)
  }, [current, onSlideChange])

  useEffect(() => {
    if (activeSlide !== undefined) setInternal(activeSlide)
  }, [activeSlide])

  useEffect(() => {
    const hold = current === 3 || current === 4 ? 24000 : 6000
    const timer = setInterval(next, hold)
    return () => clearInterval(timer)
  }, [next, current])

  return (
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-forest-950/28 via-transparent to-transparent" />
  )
}
