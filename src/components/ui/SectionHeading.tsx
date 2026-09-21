import { FadeIn } from './AnimatedSection'
import clsx from 'clsx'

interface SectionHeadingProps {
  script?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  script,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={clsx(align === 'center' && 'text-center', className)}>
      {script && (
        <p
          className={clsx(
            'font-script text-4xl md:text-5xl mb-3',
            light ? 'text-gold-400' : 'text-gold-500',
          )}
        >
          {script}
        </p>
      )}
      <h2
        className={clsx(
          'font-serif text-3xl md:text-4xl lg:text-5xl leading-tight',
          light ? 'text-gradient-light' : 'text-gradient-nature',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-6 leading-relaxed max-w-lg',
            light ? 'text-cream-200/80' : 'text-forest-800',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
