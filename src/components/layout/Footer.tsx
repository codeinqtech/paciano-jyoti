import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteData'
import { FadeIn } from '../ui/AnimatedSection'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import clsx from 'clsx'

interface FooterProps {
  embedded?: boolean
}

export default function Footer({ embedded = false }: FooterProps) {
  return (
    <footer className={clsx('site-footer', embedded && 'is-embedded')}>
      {!embedded && <div className="absolute top-0 left-0 right-0 gradient-divider z-20" />}

      <img
        src="/images/background/footer-tea.png"
        alt=""
        className="site-footer-tea"
      />

      <div className={`section-padding ${embedded ? 'py-12 md:py-16' : 'py-16 md:py-20'} relative z-10`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          <FadeIn>
            <h3 className="font-serif text-xl md:text-2xl text-cream-50 leading-snug mb-6 max-w-xs uppercase tracking-wide">
              Your riverside retreat in the Dooars awaits
            </h3>
            <Button variant="gold" href="/contact">
              Book Your Stay
            </Button>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col items-center text-center">
            <Logo size="lg" className="mb-4" />
            <p className="font-script text-xl text-gold-400">Escape. Unwind. Reconnect.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold-400 mb-5">Stay Connected</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, '')}`}
                  className="flex gap-3 text-base text-cream-50 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  {siteConfig.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.emails[0]}`}
                  className="flex gap-3 text-base text-cream-50 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  {siteConfig.emails[0]}
                </a>
              </li>
              <li className="flex gap-3 text-base text-cream-50">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Dooars, West Bengal</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center text-sm hover:bg-gold-500 hover:text-forest-950 transition-all"
              >
                f
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center text-sm hover:bg-gold-500 hover:text-forest-950 transition-all"
              >
                ig
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="site-footer-bar relative z-10">
        <div className="section-padding py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-medium text-cream-200/80 uppercase tracking-wider">
          <p>Paciano © {new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-gold-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
