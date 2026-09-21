import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import FlipExperienceCard from './FlipExperienceCard'
import { experiences } from '../../data/siteData'
import { FadeIn } from '../ui/AnimatedSection'

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const rail = scrollRef.current
    if (!rail) return
    const card = rail.querySelector<HTMLElement>('.experiences-card')
    const styles = getComputedStyle(rail)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 24
    const amount = (card?.offsetWidth || 320) + gap
    rail.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="section-padding py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <FadeIn direction="right" once={false}>
              <p className="font-script text-4xl md:text-5xl mb-3 text-gold-400">Discover</p>
            </FadeIn>
            <FadeIn delay={0.1} once={false}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-cream-50">
                Moments to cherish
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} once={false}>
              <p className="mt-6 leading-relaxed max-w-lg text-cream-200/80">
                Delight in jungle walks, tea garden strolls, bird watching, and candlelight dinners
                with the natural symphony of the Dooars forest.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} direction="left" className="flex gap-2" once={false}>
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-cream-100/30 flex items-center justify-center text-cream-50 hover:bg-gold-500 hover:text-forest-950 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-cream-100/30 flex items-center justify-center text-cream-50 hover:bg-gold-500 hover:text-forest-950 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>

        <div
          ref={scrollRef}
          className="experiences-rail flex gap-6 overflow-x-auto pt-1 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {experiences.map((exp, i) => (
            <FlipExperienceCard
              key={exp.title}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              imageBack={exp.imageBack}
              index={i}
            />
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10" once={false}>
          <Link to="/experiences">
            <Button variant="primary">
              Explore All Experiences
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  )
}
