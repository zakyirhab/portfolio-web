import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'

export const Header: React.FC = () => {
  const { profile, isBlueprintMode, toggleTheme, language, setLanguage, t, designVariant, setDesignVariant } = usePortfolio()

  return (
    <header className="sticky top-0 z-40 border-b ledger-border backdrop-blur-md bg-opacity-95 surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Name Directly Without Box */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight">
              {profile.fullName}
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded surface-muted border ledger-border font-semibold text-[#FF3B00]">
              {profile.brandTitle}
            </span>
          </div>
        </div>

        {/* Minimalist Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono font-medium">
          <a href="#manifesto" className="hover:text-[#FF3B00] transition">{t.nav.profile}</a>
          <a href="#ai-lab" className="hover:text-[#FF3B00] transition text-[#FF3B00] font-bold">{t.nav.aiLab}</a>
          <a href="#workbench" className="hover:text-[#FF3B00] transition">{t.nav.systems}</a>
          <a href="#methodology" className="hover:text-[#FF3B00] transition">{t.nav.methodology}</a>
        </nav>

        {/* Clean Right Actions: Theme Selector (A/B) + Language Switcher + Dark/Light + Single CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Realtime Theme Switcher (Design Variant) */}
          <div className="hidden sm:flex items-center rounded border ledger-border surface-muted p-0.5 font-mono text-[11px]">
            <button
              onClick={() => setDesignVariant('blueprint')}
              title="Tema Lama: Industrial Blueprint Ledger"
              className={`px-2 py-1 rounded font-bold transition cursor-pointer ${
                designVariant === 'blueprint'
                  ? 'bg-[#FF3B00] text-white shadow-sm'
                  : 'text-secondary-tone hover:text-[#FF3B00]'
              }`}
            >
              BLUEPRINT
            </button>
            <button
              onClick={() => setDesignVariant('cyber')}
              title="Tema Baru: Modern Cyber Architect (Figma)"
              className={`px-2 py-1 rounded font-bold transition cursor-pointer ${
                designVariant === 'cyber'
                  ? 'bg-[#FF3B00] text-white shadow-sm'
                  : 'text-secondary-tone hover:text-[#FF3B00]'
              }`}
            >
              CYBER/FIGMA
            </button>
          </div>

          {/* Language Toggle ID / EN */}
          <div className="flex items-center rounded border ledger-border surface-muted p-0.5 font-mono text-xs">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2 py-1 rounded text-[11px] font-bold transition cursor-pointer ${
                language === 'id'
                  ? 'bg-[#121212] text-white'
                  : 'text-secondary-tone hover:text-[#FF3B00]'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-[11px] font-bold transition cursor-pointer ${
                language === 'en'
                  ? 'bg-[#121212] text-white'
                  : 'text-secondary-tone hover:text-[#FF3B00]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Switcher without Emojis */}
          <button
            onClick={toggleTheme}
            title={isBlueprintMode ? t.nav.themeLight : t.nav.themeDark}
            className="px-2.5 py-1.5 rounded border ledger-border surface-muted hover:border-[#FF3B00] transition text-xs font-mono flex items-center gap-1.5 cursor-pointer"
          >
            <span className="font-mono text-[11px] font-bold">
              {isBlueprintMode ? '[LT]' : '[DK]'}
            </span>
            <span className="hidden xl:inline">
              {isBlueprintMode ? t.nav.themeLight : t.nav.themeDark}
            </span>
          </button>

          <a
            href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-safety px-4 py-2 rounded text-xs font-mono font-bold flex items-center gap-1.5"
          >
            <span>{t.nav.discuss}</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  )
}
