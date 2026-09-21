import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Children, isValidElement, type ButtonHTMLAttributes, type ReactNode } from 'react'
import './Button.css'
import { asset } from '../../lib/paths'

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost' | 'outline'
type ButtonSize = 'md' | 'sm'
type MediaKind = 'leaf' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  href?: string
  className?: string
  image?: string
  subtitle?: string
}

interface ButtonPreset {
  image: string
  subtitle: string
  kind: MediaKind
  compactMedia?: boolean
}

const PRESETS: Record<string, ButtonPreset> = {
  'book your stay': {
    image: asset('/images/buttons/leaf-13.png'),
    subtitle: 'Stay Amidst Nature',
    kind: 'leaf',
  },
  'book now': {
    image: asset('/images/buttons/icon-key.png'),
    subtitle: 'Reserve Your Suite',
    kind: 'icon',
  },
  'book this room': {
    image: asset('/images/buttons/icon-key.png'),
    subtitle: 'River View Comfort',
    kind: 'icon',
  },
  'explore resort': {
    image: asset('/images/buttons/icon-villa.png'),
    subtitle: 'Gateway of Dooars',
    kind: 'icon',
  },
  'watch video': {
    image: asset('/images/buttons/icon-play.png'),
    subtitle: 'From First Light',
    kind: 'icon',
    compactMedia: true,
  },
  'learn more': {
    image: asset('/images/buttons/icon-book.png'),
    subtitle: 'Our Paciano Story',
    kind: 'icon',
  },
  'view all stays': {
    image: asset('/images/buttons/leaf-04.png'),
    subtitle: 'Tea Garden Views',
    kind: 'leaf',
  },
  'explore rooms & villas': {
    image: asset('/images/buttons/icon-villa.png'),
    subtitle: 'Hill & River Stays',
    kind: 'icon',
  },
  'explore all experiences': {
    image: asset('/images/buttons/icon-binoculars.png'),
    subtitle: 'Nature At Its Best',
    kind: 'icon',
  },
  'view dining': {
    image: asset('/images/buttons/icon-wine.png'),
    subtitle: 'Savour The Moment',
    kind: 'icon',
  },
  'explore dining': {
    image: asset('/images/buttons/icon-wine.png'),
    subtitle: 'Dine By The River',
    kind: 'icon',
  },
  'view full gallery': {
    image: asset('/images/buttons/icon-camera.png'),
    subtitle: 'A Picturesque Frame',
    kind: 'icon',
  },
  'view more testimonials': {
    image: asset('/images/buttons/icon-star.png'),
    subtitle: 'Guest Stories',
    kind: 'icon',
  },
  'submit enquiry': {
    image: asset('/images/buttons/icon-envelope.png'),
    subtitle: "We'll Reply Soon",
    kind: 'icon',
  },
}

const DEFAULT_PRESET: ButtonPreset = {
  image: asset('/images/buttons/leaf-01.png'),
  subtitle: 'Paciano Retreat',
  kind: 'leaf',
}

function extractLabel(children: ReactNode): string {
  const parts: string[] = []
  Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      parts.push(String(child))
    } else if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
      const nested = extractLabel(child.props.children)
      if (nested) parts.push(nested)
    }
  })
  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

function resolvePreset(label: string): ButtonPreset {
  return PRESETS[label.toLowerCase()] ?? DEFAULT_PRESET
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h12m0 0-5.5-5.5M17 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Button({
  variant: _variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  image,
  subtitle,
  ...props
}: ButtonProps) {
  const label = extractLabel(children)
  const preset = resolvePreset(label)
  const media = image || preset.image
  const kicker = subtitle || preset.subtitle
  const kind = preset.kind
  const classes = clsx(
    'lux-btn',
    `lux-btn--${size}`,
    `lux-btn--${kind}`,
    preset.compactMedia && 'lux-btn--compact-media',
    className,
  )

  const inner = (
    <>
      <span className="lux-btn-media" aria-hidden>
        <img src={media} alt="" />
      </span>
      <span className="lux-btn-shell">
        <span className="lux-btn-copy">
          <span className="lux-btn-title">{label || children}</span>
          {kicker ? <span className="lux-btn-sub">{kicker}</span> : null}
        </span>
        <span className="lux-btn-go" aria-hidden>
          <ArrowIcon />
        </span>
      </span>
    </>
  )

  if (href) {
    const internal = href.startsWith('/')
    if (internal) {
      return (
        <Link to={href} className={classes}>
          {inner}
        </Link>
      )
    }
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  )
}
