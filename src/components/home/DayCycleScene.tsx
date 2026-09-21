const stars = [
  [8, 6, 2], [14, 11, 1], [19, 4, 2], [24, 9, 1], [31, 5, 2],
  [37, 13, 1], [43, 7, 2], [49, 3, 1], [54, 10, 2], [61, 6, 1],
  [67, 12, 2], [72, 4, 1], [78, 8, 2], [84, 5, 1], [89, 11, 2],
  [12, 16, 1], [28, 15, 2], [46, 14, 1], [63, 17, 1], [81, 15, 2],
  [6, 8, 1], [33, 2, 2], [58, 8, 1], [76, 2, 2], [92, 7, 1],
  [16, 22, 1], [41, 19, 1], [69, 21, 1], [85, 18, 2], [52, 24, 1],
]

const gulls = [
  { cls: 'daycycle-gull-1' },
  { cls: 'daycycle-gull-2' },
  { cls: 'daycycle-gull-3' },
  { cls: 'daycycle-gull-4' },
  { cls: 'daycycle-gull-5' },
]

export default function DayCycleScene() {
  return (
    <div className="daycycle" aria-hidden>
      <div className="daycycle-wash daycycle-dawn" />
      <div className="daycycle-wash daycycle-noon" />
      <div className="daycycle-wash daycycle-dusk" />
      <div className="daycycle-wash daycycle-night" />
      <div className="daycycle-shadow daycycle-shadow-am" />
      <div className="daycycle-shadow daycycle-shadow-pm" />

      <div className="daycycle-gulls">
        {gulls.map((gull) => (
          <div key={gull.cls} className={`daycycle-gull-path ${gull.cls}`}>
            <span className="daycycle-gull-sprite" />
          </div>
        ))}
      </div>

      <div className="daycycle-stars">
        {stars.map(([left, top, size], i) => (
          <span
            key={i}
            className="daycycle-star"
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
