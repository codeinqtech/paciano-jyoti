import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { FadeIn } from '../ui/AnimatedSection'
import { asset } from '../../lib/paths'

export default function ContactCTA() {
  return (
    <div className="relative h-[34rem] md:h-[42rem] lg:h-[48rem] overflow-hidden">
      <img
        src={asset("/images/cta/paciano-begin-journey.png")}
        alt="Paciano — leave the city noise for tea gardens and river light"
        className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/20 to-forest-950/45" />

      <div className="section-padding relative z-10 flex h-full flex-col justify-between py-10 md:py-14">
        <FadeIn className="max-w-lg text-left">
          <p className="font-script text-4xl md:text-5xl text-gold-400 mb-2">Begin Your Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-3 leading-tight">
            Ready to Escape into Nature?
          </h2>
          <p className="text-cream-200/80 leading-relaxed">
            Book your stay at Paciano and discover the perfect blend of luxury, comfort, and natural
            beauty in the heart of Dooars.
          </p>
        </FadeIn>

        <FadeIn>
          <Button variant="gold" href="/contact">
            Book Your Stay
            <ArrowRight className="w-4 h-4" />
          </Button>
        </FadeIn>
      </div>
    </div>
  )
}
