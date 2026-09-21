import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../../data/siteData'
import DriftingClouds from '../home/DriftingClouds'
import SwayingTree from '../home/SwayingTree'
import DayCycleScene from '../home/DayCycleScene'
import DayCyclePhotoScene from '../home/DayCyclePhotoScene'

interface SiteBackgroundProps {
  activeSlide?: number
}

export default function SiteBackground({ activeSlide = 0 }: SiteBackgroundProps) {
  const slide = heroSlides[activeSlide] ?? heroSlides[0]
  const isDayCycleWash = activeSlide === 3
  const isDayCyclePhoto = activeSlide === 4

  return (
    <div className="site-bg-fixed" aria-hidden>
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: isDayCycleWash || isDayCyclePhoto ? 1 : 1.08 }}
            transition={{ duration: 8, ease: 'linear' }}
          >
            {isDayCyclePhoto ? (
              <DayCyclePhotoScene />
            ) : (
              <>
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                {activeSlide === 0 && <SwayingTree />}
                {isDayCycleWash && <DayCycleScene />}
              </>
            )}
          </motion.div>
          {activeSlide === 1 && <DriftingClouds />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
