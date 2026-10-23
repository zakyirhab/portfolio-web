import { useState } from 'react'
import { PortfolioProvider } from './context/PortfolioContext'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AiLabSection } from './components/AiLabSection'
import { WorkbenchSection } from './components/WorkbenchSection'
import { MethodologySection } from './components/MethodologySection'
import { FooterSection } from './components/FooterSection'
import { AdminModal } from './components/AdminModal'

function PortfolioMain() {
  const [activeSystemTab, setActiveSystemTab] = useState<number>(0)

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 flex-1 w-full">
        <HeroSection onSelectSystemTab={(idx) => setActiveSystemTab(idx)} />
        <AiLabSection />
        <WorkbenchSection
          activeIndex={activeSystemTab}
          onSelectTab={(idx) => setActiveSystemTab(idx)}
        />
        <MethodologySection />
      </main>
      <FooterSection />
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
