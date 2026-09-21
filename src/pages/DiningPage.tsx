import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import { diningVenues } from '../data/siteData'
import { asset } from '../lib/paths'

export default function DiningPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        script="Savour"
        title="Dining & Beverages"
        subtitle="Amazing food and great vibes — from local favourites to global dishes, made with love and care."
        image={asset("/images/premium/premium-dining.png")}
      />

      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {diningVenues.map((venue, i) => (
            <AnimatedSection key={venue.id} delay={i * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="rounded-2xl shadow-xl w-full aspect-[16/10] object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mb-6">
                    {venue.name}
                  </h2>
                  <p className="text-forest-800 leading-relaxed mb-6">{venue.description}</p>
                  <ul className="space-y-2">
                    {venue.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-forest-800"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding py-20 bg-forest-950">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            script="Fine Dining"
            title="A Culinary Journey Awaits"
            subtitle="Our experienced chefs hand-select a culinary journey for all palates, featuring regional dishes together with international specialities."
            light
            align="center"
          />
        </div>
      </section>
    </motion.div>
  )
}
