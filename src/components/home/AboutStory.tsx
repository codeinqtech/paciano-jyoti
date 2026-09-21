import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, BedDouble, UtensilsCrossed, Mountain } from 'lucide-react'
import Button from '../ui/Button'
import AnimatedSection, { FadeIn } from '../ui/AnimatedSection'
import DiamondCollage from './DiamondCollage'
import { siteConfig, aboutHighlights } from '../../data/siteData'

const iconMap = {
  leaf: Leaf,
  bed: BedDouble,
  utensils: UtensilsCrossed,
  mountain: Mountain,
}

export default function AboutStory({
  onHoverImage,
}: {
  onHoverImage?: (src: string | null) => void
}) {
  return (
    <div className="section-padding py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <FadeIn>
              <p className="font-script text-4xl md:text-5xl text-gold-400 mb-3">About Paciano</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-6">
                Luxury in the lap of nature
              </h2>
              <p className="text-cream-200/80 leading-relaxed mb-8 max-w-lg">
                {siteConfig.description}
              </p>
              <p className="font-script text-3xl md:text-4xl text-gold-600 mb-8">Live the Paciano Experience</p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6 md:gap-8">
            {aboutHighlights.map((feature, i) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <AnimatedSection key={feature.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-full border border-gold-400/40 flex items-center justify-center bg-cream-50">
                      <Icon className="w-5 h-5 text-gold-600 icon-spin-hover" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-cream-50 mb-1">{feature.title}</h3>
                      <p className="text-cream-200/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <FadeIn direction="left" delay={0.2} className="lg:col-span-5">
            <DiamondCollage onHoverImage={onHoverImage} />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
