import React, { useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

interface CyberHeroSectionProps {
  onSelectSystemTab: (idx: number) => void
}

export const CyberHeroSection: React.FC<CyberHeroSectionProps> = ({ onSelectSystemTab }) => {
  const { profile, language } = usePortfolio()
  const [activeFilter, setActiveFilter] = useState<'workflow' | 'legacy' | 'ai'>('workflow')

  const filterExplanations = {
    workflow: {
      idTitle: 'Otomasi Alur Data & Bot WhatsApp / Scraper',
      enTitle: 'Data Workflow Automation & WhatsApp/Scraper Bots',
      desc:
        language === 'id'
          ? 'Memutus rantai input manual ribet. Menghubungkan Google Sheets, Database SQL, dan LLM API secara instan.'
          : 'Eliminating manual data entry. Seamlessly bridging Google Sheets, SQL DBs, and LLM APIs in real-time.',
      targetTab: 2
    },
    legacy: {
      idTitle: 'Sistem Kasir POS & Proteksi Dokumen Berbayar',
      enTitle: 'Retail POS & Strict Document DRM Licensing',
      desc:
        language === 'id'
          ? 'Mencegah kebocoran uang kasir saat pergantian shift dan membatasi pembajakan materi PDF ke max 2 device.'
          : 'Preventing cashier shift leakage and stopping PDF document piracy with strict 2-device concurrency locks.',
      targetTab: 0
    },
    ai: {
      idTitle: 'Orkestrasi AI & Kendali Hardware Nyata (ADB Android)',
      enTitle: 'AI Orchestration & Physical Hardware Control (ADB)',
      desc:
        language === 'id'
          ? 'Bukan sekadar prompt biasa. Bot bergerak di HP Android fisik dengan kurva sentuhan manusia natural anti-banned.'
          : 'Beyond plain prompts. Driving real physical Android devices with natural human Bezier curves without detection.',
      targetTab: 3
    }
  }

  const currentInfo = filterExplanations[activeFilter]

  return (
    <section id="hero" className="py-10 sm:py-16 text-[#EDEDED] relative">
      {/* 1. Status Pill Badge from Figma */}
      <div className="flex items-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272A] bg-[#141416]/80 backdrop-blur font-mono text-[11px] text-[#A1A1AA] tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-white font-semibold">STATUS:</span>
          <span>AVAILABLE FOR SYSTEM AUDIT & CUSTOM BUILDS</span>
        </div>
      </div>

      {/* 2. Headline & Subheadline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-8 space-y-3">
          <div className="font-mono text-xs text-[#71717A] tracking-wider uppercase">
            SYSTEM ARCHITECT / {profile.degree.toUpperCase()}
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
            <span>{profile.fullName}</span>{' '}
            <span className="text-[#3F3F46] font-normal">—</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-600 dark:from-[#D4D4D8] dark:to-[#71717A]">
              AI-Orchestrated
            </span>
            <br />
            <span className="text-white">System Architect.</span>
          </h1>
        </div>

        <div className="lg:col-span-4 lg:pt-8 space-y-6">
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            {language === 'id'
              ? 'Menjembatani logika bisnis, analitik data, dan rekayasa perangkat lunak menjadi sistem siap produksi dalam hitungan hari, bukan bulan.'
              : 'Bridging business logic, data analytics, and software engineering into production-ready systems in days, not months.'}
          </p>

          <div className="flex items-center gap-2 font-mono text-xs text-[#71717A]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="uppercase tracking-wider">OPEN FOR RAPID R&D // 2025</span>
          </div>

          {/* Direct Photo Preview Badge */}
          <div className="flex items-center gap-3.5 pt-3 border-t border-[#27272A]">
            <img
              src={profile.profilePhoto}
              alt={profile.fullName}
              className="w-12 h-12 rounded-lg object-cover border border-[#3F3F46] shadow-[0_0_10px_rgba(0,0,0,0.5)] shrink-0"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://placehold.co/120x120/121212/FF3B00?text=ZI'
              }}
            />
            <div className="font-mono text-xs">
              <span className="text-white font-bold block">{profile.fullName}</span>
              <span className="text-[#71717A] text-[11px] block">{profile.roleTitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Horizontal 4-Column Track Record Ribbons (Including Orbit Future Academy) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#27272A] rounded-lg overflow-hidden bg-[#111113] divide-y sm:divide-y-0 sm:divide-x divide-[#27272A] mb-8 font-mono text-xs shadow-lg">
        {/* Card 1 */}
        <div className="p-4 hover:bg-[#18181B] transition group">
          <div className="text-[10px] text-[#71717A] tracking-wider uppercase mb-1">
            01 / ACADEMIC FOUNDATION
          </div>
          <div className="text-white font-bold tracking-wide group-hover:text-[#FF3B00] transition">
            S.KOM / INFORMATION SYSTEMS
          </div>
          <div className="text-[11px] text-[#A1A1AA] mt-1 line-clamp-2">
            {language === 'id'
              ? 'Fondasi analisis sistem, database relasional, dan perancangan proses bisnis.'
              : 'Systems analysis, relational schema design, and enterprise process architecture.'}
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 hover:bg-[#18181B] transition group">
          <div className="text-[10px] text-[#71717A] tracking-wider uppercase mb-1">
            02 / INTELLIGENCE & DATA
          </div>
          <div className="text-white font-bold tracking-wide group-hover:text-[#FF3B00] transition">
            STRATEGIC DATA ANALYTICS
          </div>
          <div className="text-[11px] text-[#A1A1AA] mt-1 line-clamp-2">
            {language === 'id'
              ? 'Riset komunikasi strategis tokoh publik & olah puluhan ribu data medsos (Python, Tableau).'
              : 'Public opinion intelligence, strategic data scraping, and executive analytics dashboards.'}
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 hover:bg-[#18181B] transition group">
          <div className="text-[10px] text-[#71717A] tracking-wider uppercase mb-1">
            03 / MENTORSHIP & COMPETITION
          </div>
          <div className="text-white font-bold tracking-wide group-hover:text-[#FF3B00] transition">
            EAST JAVA LKS AI MENTOR
          </div>
          <div className="text-[11px] text-[#A1A1AA] mt-1 line-clamp-2">
            {language === 'id'
              ? 'Membimbing siswa SMK Juara 1 Kota & Juara 3 Provinsi Jawa Timur di LKS AI.'
              : 'Mentored vocational students to 1st Place City and 3rd Place Province at LKS AI.'}
          </div>
        </div>

        {/* Card 4 - NEW REQUESTED: AI Mastery Orbit Future Academy */}
        <div className="p-4 hover:bg-[#18181B] transition group bg-[#161619]">
          <div className="text-[10px] text-[#FF3B00] tracking-wider uppercase mb-1 font-bold">
            04 / APPLIED DEEP LEARNING
          </div>
          <div className="text-white font-bold tracking-wide group-hover:text-[#FF3B00] transition">
            AI MASTERY — ORBIT FUTURE ACADEMY
          </div>
          <div className="text-[11px] text-[#A1A1AA] mt-1 line-clamp-2">
            {language === 'id'
              ? 'Sertifikasi industri model AI terapan, computer vision, NLP, dan deployment arsitektur model.'
              : 'Applied industrial AI specialization, computer vision, NLP, and model serving architecture.'}
          </div>
        </div>
      </div>

      {/* 4. Quick System Diagnosis Bar from Figma */}
      <div className="border border-[#27272A] rounded-lg p-4 sm:p-5 bg-[#111113] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
        <div className="space-y-1">
          <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">
            QUICK SYSTEM DIAGNOSIS
          </span>
          <span className="text-white font-bold text-sm block">
            {language === 'id' ? 'Di mana bottleneck sistem Anda?' : 'Where is your bottleneck?'}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter('workflow')}
            className={`px-3 py-1.5 rounded-md border transition cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'workflow'
                ? 'border-[#FF3B00] bg-[#FF3B00]/10 text-white font-bold'
                : 'border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:text-white'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                activeFilter === 'workflow' ? 'bg-[#FF3B00]' : 'bg-[#52525B]'
              }`}
            />
            <span>Data workflow</span>
          </button>

          <button
            onClick={() => setActiveFilter('legacy')}
            className={`px-3 py-1.5 rounded-md border transition cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'legacy'
                ? 'border-[#FF3B00] bg-[#FF3B00]/10 text-white font-bold'
                : 'border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:text-white'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                activeFilter === 'legacy' ? 'bg-[#FF3B00]' : 'bg-[#52525B]'
              }`}
            />
            <span>Legacy / POS / DRM</span>
          </button>

          <button
            onClick={() => setActiveFilter('ai')}
            className={`px-3 py-1.5 rounded-md border transition cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'ai'
                ? 'border-[#FF3B00] bg-[#FF3B00]/10 text-white font-bold'
                : 'border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:text-white'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                activeFilter === 'ai' ? 'bg-[#FF3B00]' : 'bg-[#52525B]'
              }`}
            />
            <span>AI & Hardware</span>
          </button>
        </div>

        {/* Action Button: Launch Interactive Lab */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onSelectSystemTab(currentInfo.targetTab)
              const el = document.getElementById('systems')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-4 py-2 rounded bg-white hover:bg-neutral-200 text-black font-bold flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span>{language === 'id' ? 'Buka simulator proyek' : 'Launch interactive lab'}</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Dynamic hint message based on chosen diagnosis */}
      <div className="mt-2 text-right font-mono text-[11px] text-[#71717A]">
        <span>// {currentInfo.desc}</span>
      </div>
    </section>
  )
}
