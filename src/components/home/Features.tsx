import { Users, Waves, Binoculars, HeartHandshake } from 'lucide-react'
import { features } from '../../data/siteData'

const iconMap = {
  users: Users,
  waves: Waves,
  binoculars: Binoculars,
  heart: HeartHandshake,
}

export default function Features() {
  return (
    <div className="feature-stage">
      <div className="feature-shell" aria-hidden />
      <div className="feature-rail">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap]
          return (
            <article key={feature.title} className="feature-card">
              <img src={feature.image} alt="" className="feature-card-photo" />
              <div className="feature-card-shade" />
              {index > 0 && <span className="feature-card-rule" aria-hidden />}
              <div className="feature-card-copy">
                <div className="feature-card-caption">
                  <div className="feature-card-icon">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
