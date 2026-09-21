const puffs = [
  { src: '/images/hero/cloud-a.png?v=3', cls: 'sky-puff-1', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-c.png?v=3', cls: 'sky-puff-2', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-b.png?v=3', cls: 'sky-puff-3', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-a.png?v=3', cls: 'sky-puff-4', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-c.png?v=3', cls: 'sky-puff-5', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-b.png?v=3', cls: 'sky-puff-6', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-a.png?v=3', cls: 'sky-puff-7', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-c.png?v=3', cls: 'sky-puff-8', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-b.png?v=3', cls: 'sky-puff-9', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-a.png?v=3', cls: 'sky-puff-10', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-c.png?v=3', cls: 'sky-puff-11', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-a.png?v=3', cls: 'sky-puff-12', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-b.png?v=3', cls: 'sky-puff-13', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-c.png?v=3', cls: 'sky-puff-14', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-b.png?v=3', cls: 'sky-puff-15', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-a.png?v=3', cls: 'sky-puff-16', band: 'sky-puff-below' },
  { src: '/images/hero/cloud-c.png?v=3', cls: 'sky-puff-17', band: 'sky-puff-above' },
  { src: '/images/hero/cloud-b.png?v=3', cls: 'sky-puff-18', band: 'sky-puff-below' },
]

export default function DriftingClouds() {
  return (
    <div className="sky-puffs" aria-hidden>
      {puffs.map((puff) => (
        <img
          key={puff.cls}
          src={puff.src}
          alt=""
          className={`sky-puff ${puff.band} ${puff.cls}`}
        />
      ))}
    </div>
  )
}
