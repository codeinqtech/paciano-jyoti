import { motion } from 'framer-motion'

interface FlipExperienceCardProps {
  title: string
  description: string
  image: string
  imageBack: string
  index: number
}

export default function FlipExperienceCard({
  title,
  description,
  image,
  imageBack,
  index,
}: FlipExperienceCardProps) {
  const enters = [
    { x: -56, y: 0 },
    { x: 0, y: 48 },
    { x: 56, y: 0 },
    { x: 0, y: 42 },
  ]
  const enter = enters[index % enters.length]

  return (
    <motion.div
      initial={{ opacity: 0, ...enter }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="experiences-card snap-start"
    >
      <div className="flip-card aspect-[3/4] rounded-2xl cursor-pointer group">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-face flip-card-front">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="font-serif text-2xl text-cream-50">{title}</h3>
              <p className="text-gold-400 text-sm mt-2 tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Wander Paciano
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-face flip-card-back">
            <img src={imageBack} alt={`${title} experience`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="font-serif text-xl text-gold-400 mb-2">{title}</h3>
              <p className="text-cream-50 text-base leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
