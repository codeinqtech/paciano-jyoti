import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Building2, Trees, Award, Briefcase } from 'lucide-react'
import Button from '../ui/Button'
import BookingBar from './BookingBar'
import HeroSlider from './HeroSlider'
import SiteBackground from '../layout/SiteBackground'
import { heroSlides } from '../../data/siteData'
import { asset } from '../../lib/paths'

const glassStats = [
  { icon: Building2, value: '24', label: 'Luxury Rooms' },
  { icon: Trees, value: '10+', label: 'Acres' },
  { icon: Award, value: '4.2', label: 'Guest Rating' },
  { icon: Briefcase, value: 'Corporate', label: 'Retreats' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const slide = heroSlides[current]

  return (
    <>
      <SiteBackground activeSlide={current} />
      <section ref={ref} className="relative min-h-screen h-screen overflow-hidden bg-transparent">
        <HeroSlider activeSlide={current} onSlideChange={setCurrent} />

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col pointer-events-none">
          <aside className="hero-seal" aria-label="Paciano luxury seal">
            <div className="hero-seal-box hero-seal-top">
              <span className="hero-seal-stars" aria-hidden>
                ★★★★★
              </span>
              <span className="hero-seal-label">Rated Luxury Retreat</span>
            </div>

            <img
              src={asset("/images/brand/paciano-badge.png")}
              alt="Paciano"
              className="hero-seal-badge"
            />

            <div className="hero-seal-box hero-seal-bottom">
              <span className="hero-seal-kicker">Gateway of</span>
              <span className="hero-seal-label">North Bengal</span>
            </div>
          </aside>

          <div className="flex-1 section-padding flex items-center pt-32 md:pt-36 pointer-events-none">
            <div className="max-w-2xl pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="hero-copy"
                >
                  <h1 className="hero-title-mockup mb-6">{slide.title}</h1>

                  <p className="hero-subtitle mb-8 max-w-lg">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-end gap-4 overflow-visible"
              >
                <Button variant="gold" href="/rooms">
                  Explore Resort
                </Button>
                <Button variant="ghost">
                  Watch Video
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="section-padding pb-10 md:pb-14 pointer-events-auto">
            <div className="hero-bottom">
              <div className="hero-slide-index">
                {heroSlides.map((item, i) => (
                  <span key={item.image} className="hero-slide-item">
                    {i > 0 && (
                      <span className="hero-slide-rule" aria-hidden>
                        –
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`hero-slide-num ${i === current ? 'is-active' : ''}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </button>
                  </span>
                ))}
              </div>

              <div className="hero-dock">
                <div className="hero-glass-stats">
                  {glassStats.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="hero-glass-stat">
                        <Icon className="w-4 h-4 text-gold-500" />
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    )
                  })}
                </div>

                <BookingBar />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
