import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { asset } from '../../lib/paths'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const heights = {
  sm: 'h-12',
  md: 'h-[5.35rem] md:h-[6.25rem]',
  lg: 'h-[5.75rem] md:h-[7rem]',
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  return (
    <Link to="/" className={clsx('paciano-logo-plate group', className)} aria-label="Paciano Home">
      <img
        src={asset("/images/brand/paciano-logo.png")}
        alt="Paciano Nature Resort"
        className={clsx(
          'paciano-logo-img',
          'transition-transform duration-300 group-hover:scale-[0.88]',
          heights[size],
        )}
      />
    </Link>
  )
}
