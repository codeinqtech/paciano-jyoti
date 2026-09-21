import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  UtensilsCrossed,
  ChefHat,
  Wine,
  Coffee,
  Flame,
  Leaf,
  Sparkles,
} from 'lucide-react'
import Button from '../ui/Button'
import { FadeIn, staggerCards, staggerCard } from '../ui/AnimatedSection'
import { savourItems } from '../../data/siteData'

const iconMap: Record<string, typeof UtensilsCrossed> = {
  utensils: UtensilsCrossed,
  chef: ChefHat,
  soup: UtensilsCrossed,
  wine: Wine,
  glass: Wine,
  leaf: Leaf,
  sparkles: Sparkles,
  martini: Wine,
  flame: Flame,
  coffee: Coffee,
}

const resolveIcon = (key?: string) => (key ? iconMap[key] : undefined) ?? UtensilsCrossed

const slideTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }

export default function Dining() {
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(1)

  const showItem = (index: number) => {
    if (index === current) return
    setPrevious(current)
    setCurrent(index)
  }

  const now = savourItems[current] ?? savourItems[0]
  const last = savourItems[previous] ?? savourItems[1] ?? savourItems[0]
  const NowIcon = resolveIcon(now.icon)
  const LastIcon = resolveIcon(last.icon)

  return (
    <div className="section-padding py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <FadeIn direction="right" once={false}>
              <p className="font-script text-4xl md:text-5xl text-gold-400 mb-3">Savour</p>
            </FadeIn>
            <FadeIn delay={0.1} once={false}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight">
                Refreshing drinks & fine dining
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} once={false}>
              <p className="mt-6 text-cream-200/80 max-w-lg leading-relaxed">
                Paciano is all about amazing food and great vibes. From local favourites to global
                dishes, everything is made with love and care.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.16} direction="left" once={false}>
            <Link to="/dining">
              <Button variant="gold">
                Explore Dining
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-4 md:gap-5 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PreviewFrame
            label="Dining at Paciano"
            title={now.name}
            image={now.image}
            Icon={NowIcon}
          />
          <PreviewFrame
            label="Also at Paciano"
            title={last.name}
            image={last.image}
            Icon={LastIcon}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {savourItems.map((item, index) => {
            const Icon = resolveIcon(item.icon)
            const active = index === current

            return (
              <motion.button
                key={item.id}
                type="button"
                variants={staggerCard}
                onMouseEnter={() => showItem(index)}
                onFocus={() => showItem(index)}
                onClick={() => showItem(index)}
                className={`savour-card savour-card-${item.tone} ${active ? 'is-active' : ''}`}
              >
                <Icon className="w-5 h-5 mb-3 text-gold-400" />
                <h3 className="font-semibold text-cream-50 text-sm md:text-[15px] leading-snug mb-1.5">
                  {item.name}
                </h3>
                <p className="text-cream-100/80 text-xs md:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

function PreviewFrame({
  label,
  title,
  image,
  Icon,
}: {
  label: string
  title: string
  image: string
  Icon: typeof UtensilsCrossed
}) {
  return (
    <div className="savour-preview">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={image}
          src={image}
          alt={title}
          initial={{ x: '-42%', opacity: 0.35, scale: 1.04 }}
          animate={{ x: '0%', opacity: 1, scale: 1 }}
          exit={{ x: '42%', opacity: 0, scale: 1 }}
          transition={slideTransition}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="savour-preview-shade" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
        <p className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-gold-400 font-medium mb-1">
          {label}
        </p>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-cream-50 shrink-0" />
          <h3 className="font-serif text-xl md:text-2xl text-cream-50 leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  )
}
