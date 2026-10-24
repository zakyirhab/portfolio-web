import React from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

export const CyberFooter: React.FC = () => {
  const { profile, language, openAdmin } = usePortfolio()

  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0A] text-[#EDEDED] py-12 px-4 sm:px-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#27272A]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl text-white">ZI/ARCH</span>
              <span className="text-[10px] text-[#FF3B00] bg-[#FF3B00]/10 px-2 py-0.5 rounded border border-[#FF3B00]/30 font-bold">
                PROD-READY
              </span>
            </div>
            <p className="text-[#A1A1AA] text-xs max-w-md">
              {language === 'id'
                ? 'AI-Orchestrated System Architect & Product Builder. Divalidasi di perangkat keras nyata.'
                : 'AI-Orchestrated System Architect & Product Builder. Tested on real physical hardware.'}
            </p>
          </div>

          {/* Socials & Direct Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF3B00] transition flex items-center gap-1"
            >
              <span>WHATSAPP</span>
              <span>&rarr;</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[#A1A1AA] hover:text-white transition flex items-center gap-1"
            >
              <span>EMAIL</span>
              <span>&rarr;</span>
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-white transition flex items-center gap-1"
            >
              <span>GITHUB</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <div>
            &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#52525B]">BUILT WITH VITE • REACT • TAILWIND</span>
            {/* PIN Protected Admin Button */}
            <button
              onClick={openAdmin}
              className="text-[#A1A1AA] hover:text-[#FF3B00] transition cursor-pointer flex items-center gap-1"
              title="Admin Panel Login"
            >
              <span>[LOCK]</span>
              <span>ADMIN PANEL</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
