import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { asset } from './lib/paths'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

const rootStyle = document.documentElement.style
const setPublicUrl = (name: string, path: string) => {
  rootStyle.setProperty(name, `url("${asset(path)}")`)
}

setPublicUrl('--bird-flap', '/images/hero/bird-flap.png')
setPublicUrl('--bg-testimonials-marble', '/images/background/testimonials-marble.png')
setPublicUrl('--bg-rooms-marble', '/images/background/rooms-marble.png')
setPublicUrl('--bg-gallery-gold-silk', '/images/background/gallery-gold-silk.png')
setPublicUrl('--bg-colour-footer', '/images/background/colour-footer.png')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
