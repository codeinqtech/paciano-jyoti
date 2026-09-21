import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { galleryItems } from '../../data/siteData'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'dining', label: 'Dining' },
  { id: 'wellness', label: 'Wellness' },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all')
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const items =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  useEffect(() => {
    setActive(0)
  }, [filter])

  useEffect(() => {
    if (paused || items.length < 2) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [paused, items.length])

  const wrappedOffset = (index: number) => {
    const count = items.length
    let delta = index - active
    if (delta > Math.floor(count / 2)) delta -= count
    if (delta < -Math.floor(count / 2)) delta += count
    return delta
  }

  const go = (direction: number) => {
    if (!items.length) return
    setActive((current) => (current + direction + items.length) % items.length)
  }

  return (
    <div className="pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-4 mb-5 md:mb-6">
          <motion.div
            className="text-left max-w-xl order-2 md:order-1"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.42, ease }}
          >
            <p className="font-script text-4xl md:text-5xl text-gold-400 mb-3">Gallery</p>
            <h2 className="font-serif text-2xl md:text-3xl leading-none whitespace-nowrap text-cream-50">
              A picturesque frame
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 order-1 md:order-2 md:pt-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.16 } },
            }}
          >
            {filters.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
                onClick={() => setFilter(item.id)}
                className={`gallery-pill ${filter === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end order-3 md:pt-0"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0, ease }}
          >
            <Link to="/gallery">
              <Button variant="gold">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
        </div>
      </div>

      <div
        className="gallery-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.map((item, index) => {
          const offset = wrappedOffset(index)
          if (Math.abs(offset) > 3) return null
          const depth = Math.abs(offset)
          const focused = offset === 0
          const sideScale = 0.68 - depth * 0.08

          return (
            <button
              key={item.src}
              type="button"
              className={`gallery-orb ${focused ? 'is-focus' : 'is-back'}`}
              style={{
                zIndex: 30 - depth,
                ['--orb-blur' as string]: focused ? '0px' : `${2 + depth * 1.2}px`,
                ['--orb-dim' as string]: focused ? '1' : `${0.58 - depth * 0.08}`,
                opacity: focused ? 1 : 0.82 - depth * 0.1,
                transform: [
                  `translateX(calc(${offset} * var(--gallery-spread)))`,
                  `translateZ(${focused ? 180 : -150 * depth}px)`,
                  `rotateY(${offset * -16}deg)`,
                  `scale(${focused ? 1.22 : sideScale})`,
                ].join(' '),
              }}
              onClick={() => setActive(index)}
              aria-label={item.label}
            >
              <img src={item.src} alt={item.label} decoding="async" />
              {focused && <span className="gallery-orb-caption">{item.label}</span>}
            </button>
          )
        })}
      </div>

      <div className="section-padding">
        <div className="flex items-center justify-center gap-4 mt-5 md:mt-6">
          <button type="button" className="gallery-nav" onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {items.slice(0, 12).map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={`gallery-dot ${index === active ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`Show ${item.label}`}
              />
            ))}
          </div>
          <button type="button" className="gallery-nav" onClick={() => go(1)} aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
