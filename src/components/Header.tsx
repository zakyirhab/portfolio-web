import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'

export const Header: React.FC = () => {
  const { profile, isBlueprintMode, toggleTheme, openAdmin } = usePortfolio()

  return (
    <header className="sticky top-0 z-40 border-b ledger-border backdrop-blur-md bg-opacity-95 surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity with Secret Admin Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openAdmin}
            title="Klik untuk membuka Panel Admin (PIN Protected)"
            className="w-9 h-9 rounded flex items-center justify-center bg-[#121212] text-[#F4F1EA] font-mono font-bold text-xs border border-[#FF3B00] hover:bg-[#FF3B00] hover:text-white transition cursor-pointer"
          >
            ZI
          </button>
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
          <a href="#manifesto" className="hover:text-[#FF3B00] transition">01/ Profil</a>
          <a href="#ai-lab" className="hover:text-[#FF3B00] transition text-[#FF3B00] font-bold">02/ Lab Otomasi AI</a>
          <a href="#workbench" className="hover:text-[#FF3B00] transition">03/ 4 Proyek Nyata</a>
          <a href="#methodology" className="hover:text-[#FF3B00] transition">04/ Cara Kerja</a>
        </nav>

        {/* Clean Right Actions: Theme Switcher + Single CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={toggleTheme}
            title="Ganti Tema Terang/Gelap"
            className="px-2.5 py-2 rounded border ledger-border surface-muted hover:border-[#FF3B00] transition text-xs font-mono flex items-center gap-1.5 cursor-pointer"
          >
            <span>{isBlueprintMode ? '☀️' : '📐'}</span>
            <span className="hidden xl:inline">{isBlueprintMode ? 'Mode Terang' : 'Mode Gelap'}</span>
          </button>

          <a
            href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-safety px-4 py-2 rounded text-xs font-mono font-bold flex items-center gap-1.5"
          >
            <span>Diskusi Proyek</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  )
}
