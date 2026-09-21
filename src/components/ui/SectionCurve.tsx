import { Leaf } from 'lucide-react'

interface SectionCurveProps {
  fill?: string
  showLeaf?: boolean
  className?: string
}

export default function SectionCurve({
  fill = '#f5f0e8',
  showLeaf = true,
  className = '',
}: SectionCurveProps) {
  return (
    <div className={`relative w-full leading-[0] pointer-events-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 block"
      >
        <path
          d="M0,0 L0,28 C240,72 480,72 720,36 C960,0 1200,0 1440,28 L1440,0 Z"
          fill={fill}
        />
      </svg>
      {showLeaf && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]">
          <div className="w-10 h-10 rounded-full bg-cream-100 border border-gold-400/30 flex items-center justify-center shadow-sm">
            <Leaf className="w-5 h-5 text-gold-500" />
          </div>
        </div>
      )}
    </div>
  )
}
