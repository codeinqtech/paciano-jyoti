import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScallopClipDefs from '../ui/ScallopClipDefs'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const isHome = useLocation().pathname === '/'

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScallopClipDefs />
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      {!isHome && <Footer />}
    </div>
  )
}
