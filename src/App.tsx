import { useState } from 'react'
import { PortfolioProvider } from './context/PortfolioContext'

// Core Blueprint Components
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AiLabSection } from './components/AiLabSection'
import { WorkbenchSection } from './components/WorkbenchSection'
import { MethodologySection } from './components/MethodologySection'
import { FooterSection } from './components/FooterSection'

import { Blueprint3DBackground } from './components/Blueprint3DBackground'
import { AdminModal } from './components/AdminModal'

function PortfolioMain() {
  const [activeSystemTab, setActiveSystemTab] = useState<number>(0)

  return (
    <div className="min-h-[100dvh] flex flex-col relative">
      {/* 3D Blueprint Isometric Mesh Animation in background */}
      <Blueprint3DBackground />

      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 flex-1 w-full relative z-10">
        <HeroSection onSelectSystemTab={(idx) => setActiveSystemTab(idx)} />
        <AiLabSection />
        <WorkbenchSection
          activeIndex={activeSystemTab}
          onSelectTab={(idx) => setActiveSystemTab(idx)}
        />
        <MethodologySection />
      </main>
      <FooterSection />

      {/* PIN Protected Admin Modal: 882199 */}
      <AdminModal />
    </div>
  )
}

export function App() {
  return (
    <PortfolioProvider>
      <PortfolioMain />
    </PortfolioProvider>
  )
}

export default App
