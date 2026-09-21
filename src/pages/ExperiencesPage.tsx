import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import FlipExperienceCard from '../components/home/FlipExperienceCard'
import { experiences, nearbyAttractions } from '../data/siteData'
import { MapPin } from 'lucide-react'

export default function ExperiencesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        script="Discover"
        title="Experiences & Activities"
        subtitle="Jungle walks, tea garden strolls, bird watching, and enchanting open-air dining — immerse yourself in nature."
        image="/images/experiences/exp-trails-front.png"
      />

      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            script="Activities"
            title="Signature Experiences"
            align="center"
            className="mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        </div>
      </section>

      <section className="section-padding py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            script="Explore Dooars"
            title="Sightseeing & nearby"
            subtitle="Discover Kathambari Forest, Gajoldoba, Mongpong, Chapramari Forest Reserve, and Murti from Paciano."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAttractions.map((attr) => (
              <div
                key={attr.name}
                className="flex items-center gap-4 p-6 rounded-xl bg-cream-50 border border-cream-200 hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <div>
                  <h4 className="font-serif text-lg text-forest-900">{attr.name}</h4>
                  <span className="text-forest-800 text-base">{attr.distance} drive</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
