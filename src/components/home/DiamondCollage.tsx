import { motion } from 'framer-motion'
import { asset } from '../../lib/paths'

export const aboutDiamonds = [
  {
    src: asset('/images/hero/hero-banner-1.png'),
    alt: 'Paciano riverside tea gardens',
    className: 'diamond-pos-top',
  },
  {
    src: asset('/images/hero/hero-banner-2.png'),
    alt: 'Infinity pool in daylight',
    className: 'diamond-pos-right',
  },
  {
    src: asset('/images/premium/premium-room.png'),
    alt: 'Luxury guest room',
    className: 'diamond-pos-left',
  },
  {
    src: asset('/images/premium/premium-dining.png'),
    alt: 'Resort dining',
    className: 'diamond-pos-bottom',
  },
]

interface DiamondCollageProps {
  onHoverImage?: (src: string | null) => void
}

export default function DiamondCollage({ onHoverImage }: DiamondCollageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="diamond-collage"
    >
      {aboutDiamonds.map((item) => (
        <div
          key={item.src}
          className={item.className}
          onMouseEnter={() => onHoverImage?.(item.src)}
          onMouseLeave={() => onHoverImage?.(null)}
        >
          <div className="diamond-frame">
            <img src={item.src} alt={item.alt} />
          </div>
        </div>
      ))}
    </motion.div>
  )
}
