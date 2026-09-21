import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Leaf } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  script?: string
  image?: string
  children?: ReactNode
}

export default function PageHero({
  title,
  subtitle,
  script,
  image = '/images/hero/hero-banner-1.png',
  children,
}: PageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/48 via-forest-800/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-forest-900/8" />
      </div>

      <div className="section-padding relative z-10 pb-14 pt-36 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {script && (
            <p className="hero-tagline mb-3">
              <Leaf className="w-3 h-3" />
              {script}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 font-medium uppercase tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-cream-200/80 leading-relaxed max-w-lg">{subtitle}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
