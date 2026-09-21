import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import AnimatedSection from '../components/ui/AnimatedSection'
import { roomTypes, roomAmenities } from '../data/siteData'
import { Check, Users, BedDouble } from 'lucide-react'
import { asset } from '../lib/paths'

export default function RoomsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        script="Stay With Us"
        title="Rooms & Amenities"
        subtitle="Luxurious rooms with modern amenities and stunning views of tea gardens, rivers, and hills."
        image={asset("/images/premium/premium-room.png")}
      />

      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          {roomTypes.map((room, i) => (
            <AnimatedSection key={room.id} delay={i * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center mb-20 ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-gold-500 text-base uppercase tracking-wider font-medium">
                    {room.subtitle}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mt-2 mb-6">
                    {room.name}
                  </h2>
                  <p className="text-forest-800 leading-relaxed mb-6">{room.description}</p>
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2 text-base">
                      <Users className="w-4 h-4 text-gold-500" />
                      {room.occupancy}
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <BedDouble className="w-4 h-4 text-gold-500" />
                      {room.bed}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-base text-forest-800">
                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" href="/contact">
                    Book Now
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            script="In Every Detail"
            title="Room Amenities"
            align="center"
            className="mb-12"
          />

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {roomAmenities.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-base font-medium transition-all ${
                  activeTab === i
                    ? 'bg-forest-800 text-cream-50'
                    : 'bg-cream-200 text-forest-700 hover:bg-cream-300'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <img
                src={roomAmenities[activeTab].image}
                alt={roomAmenities[activeTab].category}
                className="rounded-2xl shadow-lg w-full aspect-video object-cover"
              />
              <ul className="space-y-3">
                {roomAmenities[activeTab].items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-forest-800 font-medium">
                    <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  )
}
