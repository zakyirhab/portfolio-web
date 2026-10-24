import React from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

export const CyberHeader: React.FC = () => {
  const {
    profile,
    isBlueprintMode,
    toggleTheme,
    language,
    setLanguage,
    designVariant,
    setDesignVariant,
    t
  } = usePortfolio()

  return (
    <header className="sticky top-0 z-40 border-b border-[#222222] dark:border-[#222222] bg-[#0A0A0A]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md text-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity from Figma (ZI/ARCH) */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="#hero" className="flex items-baseline gap-1 group">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#FF3B00] transition">
              ZI
            </span>
            <span className="text-[#FF3B00] font-bold text-sm">/</span>
            <span className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase font-semibold">
              ARCH
            </span>
          </a>

          <div className="hidden lg:block h-3.5 w-px bg-[#333333]" />

          {/* Location & Timezone Indicator from Figma */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#71717A]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">BASED IN INDONESIA</span>
            <span className="text-[#444446]">•</span>
            <span className="text-[#A1A1AA]">UTC+7</span>
          </div>
        </div>

        {/* Center Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium text-[#999999]">
          <a href="#hero" className="hover:text-white transition">
            01/ {language === 'id' ? 'ARSITEK' : 'ARCHITECT'}
          </a>
          <a href="#systems" className="hover:text-white transition text-white font-semibold">
            02/ {language === 'id' ? 'SISTEM' : 'SYSTEMS'}
          </a>
          <a href="#ai-lab" className="hover:text-white transition text-[#FF3B00]">
            03/ {language === 'id' ? 'AI LAB' : 'AI LAB'}
          </a>
          <a href="#methodology" className="hover:text-white transition">
            04/ {language === 'id' ? 'AUDIT' : 'AUDIT'}
          </a>
        </nav>

        {/* Right Controls: Theme Comparison Switcher + Language + Dark/Light + CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Live Theme Switcher: Blueprint vs Cyber */}
          <div className="flex items-center rounded-full border border-[#27272A] bg-[#141416] p-0.5 font-mono text-[10px]">
            <button
              onClick={() => setDesignVariant('blueprint')}
              title="Tema Lama: Industrial Blueprint Ledger"
              className={`px-2.5 py-1 rounded-full font-bold transition cursor-pointer ${
                designVariant === 'blueprint'
                  ? 'bg-sky-600 text-white shadow'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              BLUEPRINT
            </button>
            <button
              onClick={() => setDesignVariant('cyber')}
              title="Tema Baru: Modern Cyber Architect (Figma)"
              className={`px-2.5 py-1 rounded-full font-bold transition cursor-pointer ${
                designVariant === 'cyber'
                  ? 'bg-[#FF3B00] text-white shadow-[0_0_12px_rgba(255,59,0,0.5)]'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              CYBER/FIGMA
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center rounded-md border border-[#27272A] bg-[#141416] p-0.5 font-mono text-xs">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                language === 'id'
                  ? 'bg-[#27272A] text-white'
                  : 'text-[#71717A] hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                language === 'en'
                  ? 'bg-[#27272A] text-white'
                  : 'text-[#71717A] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            title={isBlueprintMode ? t.nav.themeLight : t.nav.themeDark}
            className="px-2 py-1.5 rounded-md border border-[#27272A] bg-[#141416] hover:border-[#FF3B00] text-[#A1A1AA] hover:text-white transition font-mono text-[11px] cursor-pointer"
          >
            {isBlueprintMode ? '[LT]' : '[DK]'}
          </button>

          {/* WhatsApp Primary CTA */}
          <a
            href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#FF3B00] hover:bg-[#E03400] text-white text-xs font-mono font-bold transition shadow-[0_0_15px_rgba(255,59,0,0.3)]"
          >
            <span>{t.nav.discuss}</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  )
}
