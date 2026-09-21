import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import AnimatedSection from '../components/ui/AnimatedSection'
import { siteConfig } from '../data/siteData'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { asset } from '../lib/paths'

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        script="Get In Touch"
        title="Contact Us"
        subtitle="Reservations, banquet enquiries, and a warm welcome to Paciano, Manabari Tea Garden."
        image={asset("/images/hero/hero-banner-3.png")}
      />

      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-forest-900 mb-8">Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-base text-forest-800 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-base text-forest-800 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div>
                <label className="block text-base text-forest-800 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-base text-forest-800 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  placeholder="Tell us about your stay plans..."
                />
              </div>
              <Button variant="primary" type="submit">
                <Send className="w-4 h-4" />
                Submit Enquiry
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="font-serif text-3xl text-forest-900 mb-8">Contact Information</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 p-5 rounded-xl bg-cream-100">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-forest-900 mb-1">Address</h4>
                  <p className="text-forest-800 text-base leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-cream-100">
                <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-forest-900 mb-2">Phone</h4>
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-forest-800 text-base hover:text-gold-500 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-cream-100">
                <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-forest-900 mb-2">Email</h4>
                  {siteConfig.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-forest-800 text-base hover:text-gold-500 transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-cream-100">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-forest-900 mb-1">Reception</h4>
                  <p className="text-forest-800 text-base">Open 24 hours, 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-cream-200">
              <iframe
                title="Paciano Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113500!2d88.75!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzAwLjAiTiA4OMKwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
