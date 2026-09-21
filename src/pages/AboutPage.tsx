import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection, { FadeIn, staggerContainer, staggerItem } from '../components/ui/AnimatedSection'
import { siteConfig, distinctions, nearbyAttractions } from '../data/siteData'
import { MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero
        script="About Paciano"
        title="Where Luxury Meets Nature"
        subtitle="A haven of tranquillity nestled in Manabari Tea Garden at the gateway of North Bengal."
        image="/images/premium/premium-nature.png"
      />

      <section className="section-padding py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <SectionHeading
              script="Our Story"
              title="An Idyllic Escape Awaits"
            />
            <p className="mt-6 text-forest-800 leading-relaxed">{siteConfig.description}</p>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Welcome to a retreat where peace and tranquillity meet grandness and splendour.
              Whether you're seeking adventure amidst lush tea gardens and hills or pure
              relaxation by our sparkling pool, Paciano delivers an unforgettable experience.
            </p>
          </AnimatedSection>
          <FadeIn direction="left">
            <img
              src="/images/hero/hero-banner-1.png"
              alt="Paciano resort"
              className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            script="Why Paciano"
            title="Our Signature Distinction"
            align="center"
            className="mb-16"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {distinctions.map((d) => (
              <motion.div
                key={d.title}
                variants={staggerItem}
                className="p-8 rounded-2xl bg-cream-50 border border-cream-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl text-forest-900 mb-3">{d.title}</h3>
                <p className="text-forest-800 text-base leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            script="Explore"
            title="Nearby Attractions"
            subtitle="Kathambari Forest, Gajoldoba’s Teesta Barrage, Mongpong, Chapramari, and Murti — nature and wildlife around Paciano."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAttractions.map((attr) => (
              <FadeIn key={attr.name}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-cream-100 border border-cream-200">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-medium text-forest-900">{attr.name}</h4>
                    <span className="text-forest-800 text-base">{attr.distance}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
