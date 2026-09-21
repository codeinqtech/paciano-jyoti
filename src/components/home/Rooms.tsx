import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Users, BedDouble, Check, Eye } from 'lucide-react'
import Button from '../ui/Button'
import { FadeIn, staggerCards, staggerCard } from '../ui/AnimatedSection'
import { roomTypes } from '../../data/siteData'
import clsx from 'clsx'

const roomIcons = {
  standard: BedDouble,
  premium: Users,
  deluxe: Eye,
}

export default function Rooms() {
  const [active, setActive] = useState(0)
  const previewRef = useRef<HTMLDivElement>(null)
  const inView = useInView(previewRef, { amount: 0.28, once: true })
  const room = roomTypes[active]
  const ActiveIcon = roomIcons[room.id as keyof typeof roomIcons] || BedDouble

  return (
    <div className="section-padding py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <FadeIn direction="right" once={false}>
              <p className="font-script text-4xl md:text-5xl text-gold-400 mb-3">Stay With Us</p>
            </FadeIn>
            <FadeIn delay={0.12} once={false}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight max-w-xl">
                Thoughtfully designed rooms
              </h2>
            </FadeIn>
            <FadeIn delay={0.22} once={false}>
              <p className="mt-6 text-cream-200/80 max-w-lg leading-relaxed">
                Each of our luxurious rooms offers modern amenities and stunning views of tea gardens,
                rivers, and hills — comfort and elegance for an unforgettable stay.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.18} direction="left" className="shrink-0" once={false}>
            <Link to="/rooms">
              <Button variant="gold">
                View All Stays
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        <motion.div
          ref={previewRef}
          className="room-preview-frame box-3d"
          initial={{ opacity: 0, x: -48, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="room-preview">
          <div className="room-preview-photo">
            {roomTypes.map((item, i) => (
              <img
                key={item.image}
                src={item.image}
                alt={item.name}
                className={i === active ? 'is-active' : undefined}
              />
            ))}
          </div>

          <motion.div
            key={`fade-${room.id}`}
            className="room-preview-fade"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={
              inView
                ? { clipPath: 'inset(0 0% 0 0)' }
                : { clipPath: 'inset(0 100% 0 0)' }
            }
            transition={{
              duration: 1.25,
              delay: inView ? 0.22 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <AnimatePresence>
            <motion.div
              key={room.id}
              initial={{ opacity: 0, x: -48 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{
                duration: 1.25,
                delay: inView ? 0.22 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="room-preview-copy"
            >
              <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-gold-500 text-forest-950 font-medium mb-4">
                <ActiveIcon className="w-3.5 h-3.5" />
                {room.subtitle}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-cream-50 font-semibold mb-3">
                {room.name}
              </h3>
              <p className="text-cream-50 text-base md:text-lg leading-relaxed mb-5">
                {room.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-base text-cream-50 font-medium">
                <span className="inline-flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold-400 shrink-0" />
                  {room.occupancy}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-gold-400 shrink-0" />
                  {room.bed}
                </span>
              </div>
              <ul className="space-y-2.5 mb-7">
                {room.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-base text-cream-50">
                    <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="gold" href="/contact" className="w-fit">
                Book This Room
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
        </motion.div>

        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5"
        >
          {roomTypes.map((item, i) => {
            const Icon = roomIcons[item.id as keyof typeof roomIcons] || BedDouble
            const isActive = i === active
            return (
              <motion.button
                key={item.id}
                type="button"
                variants={staggerCard}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={clsx(
                  'room-highlight-pill group relative flex items-center justify-center gap-3 px-5 py-4 md:py-5 rounded-2xl text-left cursor-pointer',
                  isActive && 'room-highlight-pill-active',
                )}
              >
                <span className="room-highlight-pill-glow animate-gentle-pulse" aria-hidden />
                <span
                  className={clsx(
                    'relative z-10 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300',
                    isActive
                      ? 'bg-gold-500/30 border-gold-400/80'
                      : 'bg-gold-500/15 border-gold-400/40 group-hover:bg-gold-500/25',
                  )}
                >
                  <Icon className="w-[18px] h-[18px] text-gold-300" />
                </span>
                <span className="relative z-10 flex flex-col">
                  <span
                    className={clsx(
                      'text-cream-50 text-base font-medium tracking-wide',
                      isActive && 'text-gold-200',
                    )}
                  >
                    {item.name}
                  </span>
                  <span className="text-cream-200/80 text-sm font-medium">{item.subtitle}</span>
                </span>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
