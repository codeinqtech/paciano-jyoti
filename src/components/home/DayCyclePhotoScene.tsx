const stars = [
  [8, 6, 2], [14, 11, 1], [19, 4, 2], [24, 9, 1], [31, 5, 2],
  [37, 13, 1], [43, 7, 2], [49, 3, 1], [54, 10, 2], [61, 6, 1],
  [67, 12, 2], [72, 4, 1], [78, 8, 2], [84, 5, 1], [89, 11, 2],
  [12, 16, 1], [28, 15, 2], [46, 14, 1], [63, 17, 1], [81, 15, 2],
  [6, 8, 1], [33, 2, 2], [58, 8, 1], [76, 2, 2], [92, 7, 1],
  [16, 22, 1], [41, 19, 1], [69, 21, 1], [85, 18, 2], [52, 24, 1],
]

const gulls = [
  { cls: 'dayphoto-gull-1' },
  { cls: 'dayphoto-gull-2' },
  { cls: 'dayphoto-gull-3' },
  { cls: 'dayphoto-gull-4' },
  { cls: 'dayphoto-gull-5' },
  { cls: 'dayphoto-gull-6' },
  { cls: 'dayphoto-gull-7' },
  { cls: 'dayphoto-gull-8' },
  { cls: 'dayphoto-gull-9' },
  { cls: 'dayphoto-gull-10' },
]

export default function DayCyclePhotoScene() {
  return (
    <div className="dayphoto" aria-hidden>
      <img
        src="/images/hero/daycycle-05/noon.png"
        alt=""
        className="dayphoto-base"
      />

      <div className="dayphoto-light dayphoto-light-dawn" />
      <div className="dayphoto-light dayphoto-light-noon" />
      <div className="dayphoto-light dayphoto-light-dusk" />
      <div className="dayphoto-light dayphoto-light-night" />
      <div className="dayphoto-shadow dayphoto-shadow-am" />
      <div className="dayphoto-shadow dayphoto-shadow-pm" />

      <div className="dayphoto-gulls">
        {gulls.map((gull) => (
          <div key={gull.cls} className={`dayphoto-gull-path ${gull.cls}`}>
            <span className="dayphoto-gull-sprite" />
          </div>
        ))}
      </div>

      <div className="dayphoto-stars">
        {stars.map(([left, top, size], i) => (
          <span
            key={i}
            className="dayphoto-star"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${(i % 7) * 0.35}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
