import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import AboutStory from '../components/home/AboutStory'
import Rooms from '../components/home/Rooms'
import Experiences from '../components/home/Experiences'
import StatsSection from '../components/home/StatsSection'
import LifestyleSection from '../components/home/LifestyleSection'
import Dining from '../components/home/Dining'
import Gallery from '../components/home/Gallery'
import Testimonials from '../components/home/Testimonials'
import Amenities from '../components/home/Amenities'
import ContactCTA from '../components/home/ContactCTA'
import Footer from '../components/layout/Footer'
import FloatingPanel from '../components/ui/FloatingPanel'
import { asset } from '../lib/paths'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function HomePage() {
  const [aboutCover, setAboutCover] = useState<string | null>(null)

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />

      <div className="floating-stack px-3 sm:px-5 md:px-8 lg:px-12 xl:px-16 pb-6 md:pb-10 space-y-4 md:space-y-6 -mt-8 md:-mt-10">
        <FloatingPanel variant="cream" scallopTop delay={0.05} coverImage={aboutCover} enter="up">
          <AboutStory onHoverImage={setAboutCover} />
        </FloatingPanel>

        <motion.div
          className="feature-band overflow-visible"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Features />
        </motion.div>

        <FloatingPanel soft texture={asset("/images/background/colour1-soft.png")} leafBlur="left" delay={0.08} enter="right">
          <Rooms />
        </FloatingPanel>

        <FloatingPanel soft texture={asset("/images/background/colour2-soft.png")} leafBlur delay={0.1} enter="down">
          <Experiences />
        </FloatingPanel>

        <FloatingPanel variant="forest" delay={0.12} enter="left">
          <StatsSection />
        </FloatingPanel>

        <FloatingPanel soft texture={asset("/images/background/colour4-soft.png")} leafBlur delay={0.14} overflowVisible enter="up">
          <LifestyleSection />
        </FloatingPanel>

        <FloatingPanel soft texture={asset("/images/background/colour5-soft.png")} leafBlur delay={0.16} enter="right">
          <Dining />
        </FloatingPanel>

        <FloatingPanel soft texture={asset("/images/background/colour6-soft.png")} leafBlur="heavy" delay={0.18} overflowVisible enter="down">
          <Gallery />
        </FloatingPanel>

        <FloatingPanel soft texture={asset("/images/background/colour3-soft.png")} leafBlur="left" delay={0.2} overflowVisible enter="left">
          <Testimonials />
        </FloatingPanel>

        <FloatingPanel soft texture={asset("/images/background/colour1-soft.png")} delay={0.22} overflowVisible enter="up">
          <Amenities />
        </FloatingPanel>

        <FloatingPanel variant="forest" delay={0.24} enter="right">
          <ContactCTA />
        </FloatingPanel>

        <FloatingPanel texture={asset("/images/background/colour-footer.png")} delay={0.26} enter="down">
          <Footer embedded />
        </FloatingPanel>
      </div>
    </motion.div>
  )
}
