import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { asset } from '../../lib/paths'

const ease = [0.22, 1, 0.36, 1] as const

export default function LifestyleSection() {
  return (
    <section className="section-padding py-10 md:py-14">
      <div className="dine-nature-frame box-3d">
        <article className="dine-nature">
          <img
            src={asset("/images/dining/dine-nature-fullbleed.png")}
            alt="Dining by the river at Paciano"
            className="dine-nature-art"
          />
          <div className="dine-nature-copy">
            <motion.p
              className="font-script text-4xl md:text-5xl text-gold-400 mb-3"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, ease }}
            >
              Dine by Nature
            </motion.p>
            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
            >
              More than a stay,
              <br />
              a riverside retreat
            </motion.h2>
            <motion.p
              className="mt-6 text-cream-200/80 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
            >
              Dine under the stars beside lush tea gardens and a tranquil river. From our
              multi-cuisine table to the poolside bar, Paciano is a mini escape where glasses never
              go empty.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.34, ease }}
            >
              <Link to="/dining">
                <Button variant="gold">
                  View Dining
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
  )
}
