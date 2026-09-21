import { asset } from '../../lib/paths'
const leafSrc = asset('/images/hero/tree-leaves.png?v=2')

export default function SwayingTree() {
  return (
    <div className="tree-sway" aria-hidden>
      <img src={leafSrc} alt="" className="tree-sway-layer tree-sway-a" />
      <img src={leafSrc} alt="" className="tree-sway-layer tree-sway-b" />
      <img src={leafSrc} alt="" className="tree-sway-layer tree-sway-c" />
    </div>
  )
}
