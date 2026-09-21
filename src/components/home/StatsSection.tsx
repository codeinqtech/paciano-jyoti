import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteData'
import { FadeIn } from '../ui/AnimatedSection'

export default function StatsSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const unmute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    void video.play()
  }

  const mute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={unmute}
      onMouseLeave={mute}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          src="/videos/new-paciano-banner-Video-one-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-forest-950/28 to-forest-950/10" />
      </div>

      <div className="section-padding relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="font-script text-4xl md:text-5xl text-gold-400 mb-3">Experience Nature</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-6">
              Like Never Before
            </h2>
            <p className="text-cream-200/80 leading-relaxed mb-8 max-w-lg">
              Welcome to a retreat where peace and tranquillity meet grandness and splendour. A 24-room
              luxury resort at the gateway of North Bengal.
            </p>
            <Link to="/rooms">
              <Button variant="gold">
                Explore Rooms & Villas
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {siteConfig.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.35 }}
                  className="text-center p-6 rounded-2xl glass"
                >
                  <span className="block font-serif text-4xl md:text-5xl text-gold-400 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-cream-50 text-base font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
