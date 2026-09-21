import { motion } from 'framer-motion'
import {
  Wifi,
  Waves,
  Wine,
  Baby,
  Gamepad2,
  UtensilsCrossed,
  ChefHat,
  Users,
  Car,
  Sparkles,
  Camera,
  Coffee,
} from 'lucide-react'
import { amenities } from '../../data/siteData'
import { FadeIn, staggerCards, staggerCard } from '../ui/AnimatedSection'

const iconMap: Record<string, typeof Wifi> = {
  wifi: Wifi,
  pool: Waves,
  wine: Wine,
  baby: Baby,
  gamepad: Gamepad2,
  utensils: UtensilsCrossed,
  chef: ChefHat,
  users: Users,
  car: Car,
  spa: Sparkles,
  camera: Camera,
  coffee: Coffee,
}

export default function Amenities() {
  return (
    <div className="section-padding py-14 md:py-20 relative">
      <div className="absolute top-16 right-10 w-48 h-48 bg-gradient-radial-gold opacity-20 pointer-events-none animate-gentle-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-radial-forest opacity-15 pointer-events-none animate-gentle-pulse" />
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="right" once={false} className="mb-2">
          <p className="font-script text-4xl md:text-5xl text-gold-400">Amenities</p>
        </FadeIn>
        <FadeIn delay={0.1} once={false}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight">
            Amenities for every desire
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} once={false} className="mb-10 md:mb-14">
          <p className="mt-6 text-cream-200/80 leading-relaxed max-w-lg">
            A 24-room resort with a swimming pool, children&apos;s play area, spa, multi-cuisine
            restaurant, coffee shop, and bar — ready for families, couples, and gatherings.
          </p>
        </FadeIn>

        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon] || Sparkles
            return (
              <motion.div
                key={amenity.name}
                variants={staggerCard}
                whileHover={{ y: -6, scale: 1.02 }}
                className="amenity-card box-3d group p-5 md:p-6 rounded-2xl text-center cursor-default"
              >
                <div className="w-11 h-11 mx-auto mb-3 rounded-full border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                  <Icon className="w-5 h-5 text-forest-700 group-hover:text-gold-600 icon-spin-hover" />
                </div>
                <h3 className="text-base font-semibold text-forest-800 group-hover:text-forest-950 transition-colors">
                  {amenity.name}
                </h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
