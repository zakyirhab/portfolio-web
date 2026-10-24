import { useState, useEffect } from 'react'
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext'

// Theme A (Blueprint Ledger) Components
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AiLabSection } from './components/AiLabSection'
import { WorkbenchSection } from './components/WorkbenchSection'
import { MethodologySection } from './components/MethodologySection'
import { FooterSection } from './components/FooterSection'

// Theme B (Figma Cyber Architect) Components
import { CyberHeader } from './components/cyber/CyberHeader'
import { CyberHeroSection } from './components/cyber/CyberHeroSection'
import { CyberSystemsSection } from './components/cyber/CyberSystemsSection'
import { CyberAiLabSection } from './components/cyber/CyberAiLabSection'
import { CyberFooter } from './components/cyber/CyberFooter'

import { InteractiveCursorBackground } from './components/InteractiveCursorBackground'
import { AdminModal } from './components/AdminModal'

function PortfolioMain() {
  const { designVariant, setDesignVariant } = usePortfolio()
  const [activeSystemTab, setActiveSystemTab] = useState<number>(0)

  // Sync dark background class for Cyber mode
  useEffect(() => {
    if (designVariant === 'cyber') {
      document.body.classList.add('bg-[#0A0A0A]')
      document.body.classList.remove('bg-main')
    } else {
      document.body.classList.remove('bg-[#0A0A0A]')
    }
  }, [designVariant])

  return (
    <div className={`min-h-[100dvh] flex flex-col relative transition-colors duration-300 ${
      designVariant === 'cyber' ? 'bg-[#0A0A0A] text-[#EDEDED]' : ''
    }`}>
      {/* Interactive Cursor Glow and Cyber Crosshair */}
      <InteractiveCursorBackground isCyberMode={designVariant === 'cyber'} />

      {/* Floating Theme Switcher Floating Bar (for instant real-time toggle anywhere on page) */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 p-1 rounded-full border border-[#333333] bg-[#141416]/95 backdrop-blur shadow-2xl font-mono text-[11px]">
        <span className="text-[#71717A] px-2 font-bold hidden sm:inline">PILIH TEMA:</span>
        <button
          onClick={() => setDesignVariant('blueprint')}
          className={`px-3 py-1.5 rounded-full font-bold transition cursor-pointer ${
            designVariant === 'blueprint'
              ? 'bg-[#1E3A8A] text-white shadow'
              : 'text-[#A1A1AA] hover:text-white'
          }`}
          title="Tema Lama: Industrial Blueprint Ledger"
        >
          [A] BLUEPRINT
        </button>
        <button
          onClick={() => setDesignVariant('cyber')}
          className={`px-3 py-1.5 rounded-full font-bold transition cursor-pointer ${
            designVariant === 'cyber'
              ? 'bg-[#FF3B00] text-white shadow-[0_0_12px_rgba(255,59,0,0.6)]'
              : 'text-[#A1A1AA] hover:text-white'
          }`}
          title="Tema Baru: Modern Cyber Architect (Figma)"
        >
          [B] CYBER FIGMA
        </button>
      </div>

      {designVariant === 'cyber' ? (
        // ================= TEMA B: MODERN CYBER ARCHITECT (FIGMA) =================
        <>
          <CyberHeader />
          <main className="max-w-7xl mx-auto px-4 sm:px-8 flex-1 w-full relative z-10">
            <CyberHeroSection onSelectSystemTab={(idx) => setActiveSystemTab(idx)} />
            <CyberSystemsSection
              activeIndex={activeSystemTab}
              onSelectTab={(idx) => setActiveSystemTab(idx)}
            />
            <CyberAiLabSection />
            <MethodologySection />
          </main>
          <CyberFooter />
        </>
      ) : (
        // ================= TEMA A: INDUSTRIAL BLUEPRINT LEDGER =================
        <>
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
        </>
      )}

      {/* Admin Panel Modal (PIN Protected: 882199) */}
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
