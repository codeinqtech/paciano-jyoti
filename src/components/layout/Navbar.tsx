import { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Waves,
  Wifi,
  Sparkles,
  UtensilsCrossed,
  Wine,
  Car,
  Search,
} from 'lucide-react'
import { navLinks, roomTypes, amenities, experiences } from '../../data/siteData'
import Button from '../ui/Button'
import clsx from 'clsx'
import './Navbar.css'
import { asset } from '../../lib/paths'

const NAV_H = 124
const BAR_Y = 10
const BAR_H = 54
const BADGE_W = 168
const BADGE_RX = BADGE_W / 2
const BADGE_RY = 60
const BADGE_CY = 64

const amenityIcons: Record<string, typeof Waves> = {
  wifi: Wifi,
  pool: Waves,
  wine: Wine,
  utensils: UtensilsCrossed,
  spa: Sparkles,
  car: Car,
}

const leftLinks = navLinks.filter((link) => ['/', '/about', '/rooms'].includes(link.href))
const rightLinks = navLinks.filter((link) =>
  ['/experiences', '/dining', '/gallery', '/contact'].includes(link.href),
)

type OpenMenu = 'rooms' | 'experiences' | 'search' | null

function ellipsePoint(cx: number, cy: number, rx: number, ry: number, t: number) {
  return { x: cx + rx * Math.cos(t), y: cy + ry * Math.sin(t) }
}

function ellipseCubics(cx: number, cy: number, rx: number, ry: number, t0: number, t1: number) {
  let end = t1
  if (end <= t0) end += Math.PI * 2
  const steps = Math.max(1, Math.ceil((end - t0) / (Math.PI / 2)))
  const parts: string[] = []

  for (let i = 0; i < steps; i += 1) {
    const a = t0 + ((end - t0) * i) / steps
    const b = t0 + ((end - t0) * (i + 1)) / steps
    const delta = b - a
    const alpha = (Math.sin(delta) * (Math.sqrt(4 + 3 * Math.tan(delta / 2) ** 2) - 1)) / 3
    const p0 = ellipsePoint(cx, cy, rx, ry, a)
    const p3 = ellipsePoint(cx, cy, rx, ry, b)
    const p1x = p0.x + alpha * -rx * Math.sin(a)
    const p1y = p0.y + alpha * ry * Math.cos(a)
    const p2x = p3.x - alpha * -rx * Math.sin(b)
    const p2y = p3.y - alpha * ry * Math.cos(b)
    if (i === 0) parts.push(`L ${p0.x} ${p0.y}`)
    parts.push(`C ${p1x} ${p1y} ${p2x} ${p2y} ${p3.x} ${p3.y}`)
  }

  return parts.join(' ')
}

function intersectAngle(cy: number, ry: number, y: number, left: boolean) {
  const s = Math.max(-1, Math.min(1, (y - cy) / ry))
  const a = Math.asin(s)
  return left ? Math.PI - a : a < 0 ? a + Math.PI * 2 : a
}

function buildNavbarPath(width: number) {
  const w = Math.max(width, 360)
  const barBot = BAR_Y + BAR_H
  const cap = BAR_H / 2
  const cx = w / 2
  const pad = 1
  const left = cap + pad
  const right = w - cap - pad
  const topLeftT = intersectAngle(BADGE_CY, BADGE_RY, BAR_Y, true)
  const topRightT = intersectAngle(BADGE_CY, BADGE_RY, BAR_Y, false)
  const botRightT = intersectAngle(BADGE_CY, BADGE_RY, barBot, false)
  const botLeftT = intersectAngle(BADGE_CY, BADGE_RY, barBot, true)

  return [
    `M ${left} ${BAR_Y}`,
    ellipseCubics(cx, BADGE_CY, BADGE_RX, BADGE_RY, topLeftT, topRightT),
    `L ${right} ${BAR_Y}`,
    `C ${right + cap} ${BAR_Y} ${right + cap} ${barBot} ${right} ${barBot}`,
    ellipseCubics(cx, BADGE_CY, BADGE_RX, BADGE_RY, botRightT, botLeftT),
    `L ${left} ${barBot}`,
    `C ${left - cap} ${barBot} ${left - cap} ${BAR_Y} ${left} ${BAR_Y}`,
    'Z',
  ].join(' ')
}

function BotanicalLeaf() {
  return (
    <svg className="nav-deco-leaf" viewBox="0 0 120 70" fill="none" aria-hidden>
      <path
        d="M18 62C22 34 46 10 88 6C72 24 48 42 18 62Z"
        fill="#5c6a58"
      />
      <path
        d="M28 64C38 36 64 14 108 16C88 34 62 50 28 64Z"
        fill="#3d483b"
      />
      <path
        d="M24 60C40 38 62 20 92 10"
        stroke="#2d3b28"
        strokeWidth="0.9"
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [query, setQuery] = useState('')
  const [navW, setNavW] = useState(1200)
  const closeTimer = useRef<number | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useLayoutEffect(() => {
    const el = frameRef.current
    if (!el) return
    const update = () => setNavW(el.getBoundingClientRect().width)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setQuery('')
  }, [location.pathname])

  useEffect(() => {
    if (openMenu !== 'search') return
    const onPointer = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setOpenMenu(null)
        setQuery('')
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [openMenu])

  const openDropdown = (menu: OpenMenu) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }

  const delayCloseDropdown = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160)
  }

  const amenityPreview = amenities.filter((item) => amenityIcons[item.icon]).slice(0, 6)
  const experiencePreview = experiences.slice(0, 6)

  const searchItems = useMemo(
    () => [
      ...navLinks.map((link) => ({ label: link.label, href: link.href, group: 'Pages' })),
      ...roomTypes.map((room) => ({ label: room.name, href: '/rooms', group: 'Rooms' })),
      ...experiences.map((item) => ({ label: item.title, href: '/experiences', group: 'Experiences' })),
    ],
    [],
  )

  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return searchItems.slice(0, 6)
    return searchItems.filter((item) => item.label.toLowerCase().includes(needle)).slice(0, 8)
  }, [query, searchItems])

  const shapePath = useMemo(() => buildNavbarPath(navW), [navW])

  const renderDesktopLink = (link: (typeof navLinks)[number]) => {
    const isRooms = link.href === '/rooms'
    const isExperiences = link.href === '/experiences'
    const active =
      location.pathname === link.href ||
      (isRooms && location.pathname.startsWith('/rooms')) ||
      (isExperiences && location.pathname.startsWith('/experiences'))
    const menu = isRooms ? 'rooms' : isExperiences ? 'experiences' : null

    if (menu) {
      return (
        <div
          key={link.href}
          className="relative"
          onMouseEnter={() => openDropdown(menu)}
          onMouseLeave={delayCloseDropdown}
        >
          <Link to={link.href} className={clsx('nav-link', active && 'is-active')}>
            {link.label}
            <ChevronDown
              className={clsx('w-3.5 h-3.5 ml-0.5 shrink-0 transition-transform', openMenu === menu && 'rotate-180')}
            />
          </Link>
        </div>
      )
    }

    return (
      <Link key={link.href} to={link.href} className={clsx('nav-link', active && 'is-active')}>
        {link.label}
      </Link>
    )
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={clsx('site-navbar', (mobileOpen || scrolled) && 'is-scrolled')}
      >
        <div className="site-navbar-frame" ref={frameRef}>
          <div className="site-navbar-shape" aria-hidden>
            <svg
              className="nav-shape-svg"
              viewBox={`0 0 ${Math.max(navW, 360)} ${NAV_H}`}
              preserveAspectRatio="none"
              shapeRendering="geometricPrecision"
            >
              <path d={shapePath} fill="#F7F2EA" stroke="#D7C39A" strokeWidth="1.25" />
            </svg>
          </div>

          <BotanicalLeaf />

          <nav className="nav-left">{leftLinks.map(renderDesktopLink)}</nav>

          <Link to="/" className="nav-logo" aria-label="Paciano Home">
            <img src={asset("/images/brand/paciano-logo.png")} alt="Paciano Nature Resort" />
          </Link>

          <div className="nav-right">
            <nav className="nav-right-links hidden lg:flex">{rightLinks.map(renderDesktopLink)}</nav>

            <div className="nav-tools">
              <div className="nav-tools-desktop hidden lg:flex" ref={searchRef}>
                <span className="nav-divider" aria-hidden />
                <button
                  type="button"
                  className="nav-search"
                  aria-label="Search the site"
                  aria-expanded={openMenu === 'search'}
                  onClick={() => {
                    setOpenMenu((current) => (current === 'search' ? null : 'search'))
                    setQuery('')
                  }}
                >
                  <Search className="w-4 h-4" />
                </button>
                <Button variant="gold" href="/contact" size="sm" className="nav-book">
                  Book Your Stay
                </Button>

                <AnimatePresence>
                  {openMenu === 'search' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="nav-search-panel"
                    >
                      <input
                        autoFocus
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search pages, rooms, experiences"
                        className="nav-search-input"
                      />
                      <div className="nav-search-results">
                        {searchResults.length === 0 ? (
                          <p className="nav-search-empty">No matches found</p>
                        ) : (
                          searchResults.map((item) => (
                            <Link key={`${item.group}-${item.label}`} to={item.href} className="nav-search-item">
                              <span>{item.label}</span>
                              <em>{item.group}</em>
                            </Link>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="nav-toggle lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {openMenu === 'rooms' && (
              <div className="nav-dropdown-slot nav-dropdown-slot-left">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22 }}
                  className="nav-dropdown"
                  onMouseEnter={() => openDropdown('rooms')}
                  onMouseLeave={delayCloseDropdown}
                >
                  <div>
                    <p className="nav-dropdown-heading">Rooms</p>
                    <div className="grid gap-2">
                      {roomTypes.map((room) => (
                        <Link key={room.id} to="/rooms" className="nav-dropdown-room">
                          <img src={room.image} alt="" />
                          <span>{room.name.replace(' Rooms', '').replace(' River View', '')}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="nav-dropdown-heading">Amenities</p>
                    <div className="grid gap-1.5">
                      {amenityPreview.map((item) => {
                        const Icon = amenityIcons[item.icon]
                        return (
                          <Link key={item.name} to="/rooms" className="nav-dropdown-amenity">
                            <Icon className="w-4 h-4" />
                            {item.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {openMenu === 'experiences' && (
              <div className="nav-dropdown-slot nav-dropdown-slot-right">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22 }}
                  className="nav-dropdown nav-dropdown-experiences"
                  onMouseEnter={() => openDropdown('experiences')}
                  onMouseLeave={delayCloseDropdown}
                >
                  <p className="nav-dropdown-heading">Experiences</p>
                  <div className="grid grid-cols-2 gap-2">
                    {experiencePreview.map((item) => (
                      <Link key={item.title} to="/experiences" className="nav-dropdown-room">
                        <img src={item.image} alt="" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm section-forest shadow-2xl pt-28 px-8">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={clsx(
                        'block py-2 text-cream-50 uppercase tracking-[0.14em] text-base border-b border-white/10',
                        location.pathname === link.href && 'text-gold-400',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-10 pt-8 border-t border-forest-700">
                <Button variant="gold" href="/contact" className="w-full">
                  Book Your Stay
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
