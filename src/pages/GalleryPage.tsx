import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { galleryItems } from '../data/siteData'
import { staggerContainer, staggerItem } from '../components/ui/AnimatedSection'

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'nature', 'rooms', 'dining', 'wellness']
  const filtered =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        script="Gallery"
        title="A Picturesque Frame"
        subtitle="Tea gardens, river light, and the quiet luxury of Paciano — a gallery of Manabari."
        image="/images/hero/hero-banner-1.png"
      />

      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-base capitalize font-medium transition-all ${
                  filter === cat
                    ? 'bg-forest-800 text-cream-50'
                    : 'bg-cream-200 text-forest-700 hover:bg-cream-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((item) => (
              <motion.button
                key={item.src}
                variants={staggerItem}
                onClick={() => setLightbox(item.src)}
                className="block w-full rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest-950/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-cream-50"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
