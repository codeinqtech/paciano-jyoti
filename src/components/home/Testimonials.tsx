import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Quote,
  Home,
  Users,
  Award,
  ArrowRight,
  Play,
} from 'lucide-react'
import { guestVideos, testimonials, siteConfig } from '../../data/siteData'
import { FadeIn } from '../ui/AnimatedSection'
import Button from '../ui/Button'

function initials(name: string) {
  return name
    .split(' ')
    .filter((part) => part.length > 1 && !['Mr.', 'Mrs.', 'Ms.', '&', 'and'].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function ThumbVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const onMeta = () => {
      try {
        node.currentTime = Math.min(0.9, Math.max(0.2, (node.duration || 1) * 0.08))
      } catch {
        /* ignore seek errors */
      }
    }
    node.addEventListener('loadedmetadata', onMeta)
    return () => node.removeEventListener('loadedmetadata', onMeta)
  }, [src])

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="metadata"
      tabIndex={-1}
    />
  )
}

function useRail(step: number) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => {
    ref.current?.scrollBy({ left: dir * step, behavior: 'smooth' })
  }
  return { ref, scrollBy }
}

export default function Testimonials() {
  const [videoIndex, setVideoIndex] = useState(0)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewPaused, setReviewPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRail = useRail(168)
  const reviewRail = useRail(240)

  const video = guestVideos[videoIndex]
  const review = testimonials[reviewIndex]
  const otherVideos = guestVideos
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index !== videoIndex)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    node.pause()
    node.currentTime = 0
  }, [videoIndex])

  useEffect(() => {
    if (reviewPaused) return
    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % testimonials.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [reviewPaused])

  useEffect(() => {
    const rail = reviewRail.ref.current
    if (!rail) return
    const target = rail.querySelector<HTMLElement>(`[data-review="${reviewIndex}"]`)
    if (!target) return
    const styles = getComputedStyle(rail)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 10
    rail.scrollTo({
      left: reviewIndex * (target.offsetWidth + gap),
      behavior: 'smooth',
    })
  }, [reviewIndex, reviewRail.ref])

  return (
    <div className="stories-board section-padding py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
        <FadeIn>
          <p className="font-script text-4xl md:text-5xl text-gold-400 mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight">
            Guest testimonials
          </h2>
          <p className="mt-6 text-cream-200/80 max-w-lg leading-relaxed">
            From river-view balconies to warm hospitality, guests share their stay at Paciano in
            Manabari Tea Garden.
          </p>
        </FadeIn>
        <Button
          variant="gold"
          href="https://www.google.com/search?q=Paciano+Oodlabari+reviews"
          className="shrink-0"
        >
          View more testimonials
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-6 items-stretch">
        <div className="stories-video-card">
          <div className="stories-video-stage">
            <span className="stories-chip">Client story</span>
            <span className="stories-count">
              {String(videoIndex + 1).padStart(2, '0')} / {String(guestVideos.length).padStart(2, '0')}
            </span>
            <video
              ref={videoRef}
              key={video.src}
              src={video.src}
              className="stories-video"
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
            />
          </div>

          <div className="stories-video-meta">
            <p className="stories-video-title">{video.title}</p>
            <p className="stories-video-guest">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              {video.name} · {video.location}
            </p>
          </div>

          <div className="stories-rail-wrap is-dark">
            <button
              type="button"
              className="stories-round"
              onClick={() => videoRail.scrollBy(-1)}
              aria-label="Previous videos"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="stories-rail" ref={videoRail.ref}>
              {otherVideos.map(({ item, index }) => (
                <button
                  key={item.src}
                  type="button"
                  className="stories-thumb"
                  onClick={() => setVideoIndex(index)}
                  aria-label={`Play story from ${item.name}`}
                >
                  <ThumbVideo src={item.src} />
                  <span className="stories-thumb-play" aria-hidden>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="stories-thumb-name">{item.name}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="stories-round"
              onClick={() => videoRail.scrollBy(1)}
              aria-label="Next videos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className="stories-review-card"
          onMouseEnter={() => setReviewPaused(true)}
          onMouseLeave={() => setReviewPaused(false)}
        >
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#163528]">Google reviews</p>
            <span className="stories-review-count">
              {String(reviewIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>

          <div className="px-3 md:px-4 pb-3 flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="stories-review is-featured"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="stories-avatar">{initials(review.name)}</span>
                    <div>
                      <p className="font-medium leading-tight">{review.name}</p>
                      <p className="text-sm opacity-75">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star < review.rating
                            ? 'stories-star fill-gold-400 text-gold-400'
                            : 'text-white/25'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Quote className="stories-quote-mark" />
                <p className="mt-3 text-[0.95rem] leading-relaxed relative z-10">&ldquo;{review.quote}&rdquo;</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="stories-rail-wrap is-light">
            <button
              type="button"
              className="stories-round is-light"
              onClick={() => {
                setReviewPaused(true)
                setReviewIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
              }}
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="stories-rail" ref={reviewRail.ref}>
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  data-review={index}
                  className="stories-review-thumb"
                  onClick={() => {
                    setReviewPaused(true)
                    setReviewIndex(index)
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="stories-avatar is-compact">{initials(item.name)}</span>
                    <div className="min-w-0 text-left">
                      <p className="font-medium leading-tight truncate">{item.name}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {Array.from({ length: 5 }).map((_, star) => (
                          <Star
                            key={star}
                            className={`w-2.5 h-2.5 ${
                              star < item.rating
                                ? 'stories-star fill-gold-400 text-gold-400'
                                : 'text-black/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="stories-review-clip">&ldquo;{item.quote}&rdquo;</p>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="stories-round is-light"
              onClick={() => {
                setReviewPaused(true)
                setReviewIndex((current) => (current + 1) % testimonials.length)
              }}
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="stories-trust">
        <div className="stories-stat">
          <Home className="w-5 h-5" />
          <div>
            <strong>24+</strong>
            <span>Luxurious rooms</span>
          </div>
        </div>
        <div className="stories-stat">
          <Users className="w-5 h-5" />
          <div>
            <strong>10+</strong>
            <span>Acres of greenery</span>
          </div>
        </div>
        <div className="stories-stat">
          <Star className="w-5 h-5 stories-star fill-gold-400 text-gold-400" />
          <div>
            <strong>{siteConfig.rating}/5</strong>
            <span>Guest rating</span>
          </div>
        </div>
        <div className="stories-stat">
          <Award className="w-5 h-5" />
          <div>
            <strong>{siteConfig.reviewCount}+</strong>
            <span>Google reviews</span>
          </div>
        </div>
        <a
          href="https://www.google.com/search?q=Paciano+Oodlabari+reviews"
          target="_blank"
          rel="noreferrer"
          className="stories-google"
        >
          <span>Google</span>
          <strong>{siteConfig.rating}/5</strong>
          <em>Based on {siteConfig.reviewCount} reviews</em>
        </a>
      </div>
      </div>
    </div>
  )
}
