import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Search, ChevronLeft, ChevronRight, Leaf } from 'lucide-react'

type Field = 'in' | 'out'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function toISO(date: Date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function parseISO(value: string) {
  if (!value) return null
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function formatStay(value: string) {
  const date = parseISO(value)
  if (!date) return 'Select date'
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function monthCells(year: number, month: number) {
  const first = new Date(year, month, 1)
  const pad = first.getDay()
  const count = new Date(year, month + 1, 0).getDate()
  const cells: Array<Date | null> = Array.from({ length: pad }, () => null)
  for (let day = 1; day <= count; day += 1) cells.push(new Date(year, month, day))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function StayCalendar({
  field,
  checkIn,
  checkOut,
  onPick,
  onClose,
  anchor,
}: {
  field: Field
  checkIn: string
  checkOut: string
  onPick: (iso: string) => void
  onClose: () => void
  anchor: HTMLElement | null
}) {
  const today = startOfDay(new Date())
  const seed = parseISO(field === 'out' && checkOut ? checkOut : checkIn) ?? today
  const [cursor, setCursor] = useState({ year: seed.getFullYear(), month: seed.getMonth() })
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const panelRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!anchor) return

    const place = () => {
      if (!anchor) return
      const rect = anchor.getBoundingClientRect()
      const panel = panelRef.current
      const width = panel?.offsetWidth || 320
      const height = panel?.offsetHeight || 420
      const gap = 12
      const left = Math.min(Math.max(12, rect.left), window.innerWidth - width - 12)
      const spaceBelow = window.innerHeight - rect.bottom
      const openUp = spaceBelow < height + gap && rect.top > spaceBelow
      const top = openUp
        ? Math.max(12, rect.top - height - gap)
        : Math.min(rect.bottom + gap, Math.max(12, window.innerHeight - height - 12))
      setPos({ top, left })
    }

    place()
    const frame = window.requestAnimationFrame(place)
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [anchor, field, cursor])

  useEffect(() => {
    let armed = false
    const arm = window.setTimeout(() => {
      armed = true
    }, 80)

    const onPointer = (event: PointerEvent) => {
      if (!armed) return
      const node = event.target as Node
      if (panelRef.current?.contains(node) || anchor?.contains(node)) return
      onClose()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(arm)
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [anchor, onClose])

  const cells = useMemo(() => monthCells(cursor.year, cursor.month), [cursor])
  const nights =
    checkIn && checkOut
      ? Math.max(1, Math.round((parseISO(checkOut)!.getTime() - parseISO(checkIn)!.getTime()) / 86400000))
      : 0

  return createPortal(
    <div
      ref={panelRef}
      className="stay-cal"
      style={{ top: pos.top, left: pos.left }}
      role="dialog"
      aria-label="Choose stay dates"
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div className="stay-cal-head">
        <p className="stay-cal-kicker">
          <Leaf className="w-3.5 h-3.5" />
          {field === 'in' ? 'Arrive at Paciano' : 'Depart the valley'}
        </p>
        <div className="stay-cal-nav">
          <button
            type="button"
            className="stay-cal-arrow"
            onClick={() =>
              setCursor((c) =>
                c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 },
              )
            }
            aria-label="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h3>
            {MONTHS[cursor.month]} {cursor.year}
          </h3>
          <button
            type="button"
            className="stay-cal-arrow"
            onClick={() =>
              setCursor((c) =>
                c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 },
              )
            }
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="stay-cal-week">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="stay-cal-grid">
        {cells.map((date, index) => {
          if (!date) return <span key={`empty-${index}`} />
          const iso = toISO(date)
          const disabled = date < today
          const selected = iso === checkIn || iso === checkOut
          const inRange =
            checkIn && checkOut && iso > checkIn && iso < checkOut
          const isToday = iso === toISO(today)
          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              className={[
                'stay-cal-day',
                selected && 'is-selected',
                inRange && 'is-in-range',
                isToday && 'is-today',
                iso === checkIn && 'is-start',
                iso === checkOut && 'is-end',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onPick(iso)}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      <div className="stay-cal-foot">
        <span>
          {nights ? `${nights} night${nights > 1 ? 's' : ''} among the tea gardens` : 'Pick your river-side dates'}
        </span>
        <button type="button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>,
    document.body,
  )
}

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [open, setOpen] = useState<Field | null>(null)
  const inRef = useRef<HTMLButtonElement>(null)
  const outRef = useRef<HTMLButtonElement>(null)

  const closeCal = useCallback(() => setOpen(null), [])

  const pick = (iso: string) => {
    if (open === 'in') {
      setCheckIn(iso)
      if (checkOut && iso >= checkOut) setCheckOut('')
      setOpen('out')
      return
    }
    if (!checkIn || iso <= checkIn) {
      setCheckIn(iso)
      setCheckOut('')
      setOpen('out')
      return
    }
    setCheckOut(iso)
    setOpen(null)
  }

  return (
    <motion.form
      onSubmit={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="booking-pill"
    >
      <button
        ref={inRef}
        type="button"
        className={`booking-pill-field ${open === 'in' ? 'is-open' : ''}`}
        onClick={() => setOpen((current) => (current === 'in' ? null : 'in'))}
      >
        <Calendar className="w-4 h-4" />
        <span>
          <em>Check In</em>
          <strong className={checkIn ? '' : 'is-placeholder'}>{formatStay(checkIn)}</strong>
        </span>
      </button>

      <span className="booking-pill-divider" aria-hidden />

      <button
        ref={outRef}
        type="button"
        className={`booking-pill-field ${open === 'out' ? 'is-open' : ''}`}
        onClick={() => setOpen((current) => (current === 'out' ? null : 'out'))}
      >
        <Calendar className="w-4 h-4" />
        <span>
          <em>Check Out</em>
          <strong className={checkOut ? '' : 'is-placeholder'}>{formatStay(checkOut)}</strong>
        </span>
      </button>

      <span className="booking-pill-divider" aria-hidden />

      <label className="booking-pill-field">
        <Users className="w-4 h-4" />
        <span>
          <em>Guests</em>
          <select>
            <option>2 Adults</option>
            <option>2 Adults, 1 Child</option>
            <option>3 Adults</option>
            <option>3 Adults, 1 Child</option>
          </select>
        </span>
      </label>

      <button type="submit" className="booking-search-btn" aria-label="Check availability">
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <StayCalendar
            field={open}
            checkIn={checkIn}
            checkOut={checkOut}
            onPick={pick}
            onClose={closeCal}
            anchor={(open === 'in' ? inRef.current : outRef.current)}
          />
        )}
      </AnimatePresence>
    </motion.form>
  )
}
