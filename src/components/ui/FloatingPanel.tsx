import { motion, AnimatePresence } from 'framer-motion'
import { Leaf } from 'lucide-react'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export type PanelEnter = 'up' | 'down' | 'left' | 'right'

interface FloatingPanelProps {
  children: ReactNode
  variant?: 'cream' | 'forest' | 'gold' | 'wine' | 'sapphire' | 'marble' | 'ivory' | 'navy' | 'water'
  scallopTop?: boolean
  className?: string
  delay?: number
  coverImage?: string | null
  texture?: string
  soft?: boolean
  leafBlur?: boolean | 'heavy' | 'left'
  overflowVisible?: boolean
  enter?: PanelEnter
}

const enterFrom: Record<PanelEnter, { x?: number; y?: number }> = {
  up: { y: 88 },
  down: { y: -88 },
  left: { x: 96 },
  right: { x: -96 },
}

const panelSkin: Record<NonNullable<FloatingPanelProps['variant']>, string> = {
  cream: 'floating-panel-cream',
  forest: 'floating-panel-forest',
  gold: 'floating-panel-gold',
  wine: 'floating-panel-wine',
  sapphire: 'floating-panel-sapphire',
  marble: 'floating-panel-marble',
  ivory: 'floating-panel-ivory',
  navy: 'floating-panel-navy',
  water: 'floating-panel-water',
}

export default function FloatingPanel({
  children,
  variant = 'cream',
  scallopTop = false,
  className,
  delay = 0,
  coverImage = null,
  texture,
  soft = false,
  leafBlur = false,
  overflowVisible = false,
  enter = 'up',
}: FloatingPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, ...enterFrom[enter] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('relative', className)}
    >
      {scallopTop && (
        <motion.div
          className="absolute left-1/2 top-0 md:top-1 -translate-x-1/2 z-30 pointer-events-none"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-cream-100 border-2 border-gold-400/50 flex items-center justify-center shadow-[0_8px_22px_rgba(26,51,40,0.28)] ring-4 ring-cream-100/80">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-gold-600" />
          </div>
        </motion.div>
      )}

      <div
        className={clsx(
          'floating-panel',
          texture ? 'floating-panel-photo' : panelSkin[variant],
          soft && texture && 'floating-panel-photo-soft',
          leafBlur && 'has-leaf-blur',
          leafBlur === 'heavy' && 'has-leaf-blur-heavy',
          leafBlur === 'left' && 'has-leaf-blur-left',
          scallopTop ? 'floating-panel-scallop-top' : overflowVisible ? 'overflow-visible' : 'overflow-hidden',
        )}
        style={texture ? ({ ['--panel-photo' as string]: `url("${texture}")` }) : undefined}
      >
        {leafBlur && texture && <div className="panel-leaf-blur" aria-hidden />}
        <AnimatePresence>
          {coverImage && (
            <motion.div
              key={coverImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 z-0"
            >
              <img src={coverImage} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2b221c]/70 via-[#2b221c]/40 to-[#2b221c]/28" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  )
}
