import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

interface DiagnosisItem {
  symptom: string
  solution: string
  proof: string
  actionType?: 'lab'
  targetTab?: number
}

export const HeroSection: React.FC<{ onSelectSystemTab: (idx: number) => void }> = ({
  onSelectSystemTab
}) => {
  const { profile, t, language } = usePortfolio()
  const [selectedDiag, setSelectedDiag] = useState<number>(0)

  const DIAGNOSIS_ITEMS: DiagnosisItem[] = language === 'id' ? [
    {
      symptom:
        'Ingin mengotomatisasi pekerjaan tim dengan AI atau membangun sistem baru dengan cepat tanpa menunggu berbulan-bulan.',
      solution: 'Rapid Domain R&D + End-to-End AI Workflow Orchestration',
      proof: 'Fleksibel untuk otomasi AI kustom, integrasi API, maupun kendali perangkat.',
      actionType: 'lab'
    },
    {
      symptom:
        'Kasir sering selisih uang saat ganti shift, stok barang minus, atau printer struk Bluetooth sering macet.',
      solution: 'Atomic Shift Closing + Anti-Minus Stock Guardrail',
      proof: 'Bukti nyata: CahayaPlastik POS (Android + Printer ESC/POS).',
      targetTab: 0
    },
    {
      symptom:
        'File PDF katalog/riset berbayar mudah dibajak dan satu akun dipakai patungan banyak orang.',
      solution: 'Canvas Page Streaming + PostgreSQL Lock Maks 2 Perangkat',
      proof: 'Bukti nyata: Katalog Restorasi (245 Halaman PDF).',
      targetTab: 1
    },
    {
      symptom:
        'Puluhan ribu komentar medsos penuh singkatan/slang sehingga analisis sentimen biasa meleset.',
      solution: 'Pipeline Normalisasi Slang Indonesia + Sensor Privasi Otomatis',
      proof: 'Bukti nyata: Public Sentiment NLP Engine.',
      targetTab: 2
    },
    {
      symptom:
        'Otomasi aplikasi Android selalu terblokir karena terdeteksi memakai emulator dan klik bot kaku.',
      solution: 'Orkestrasi HP Android Fisik (ADB) + Kurva Sentuhan Manusia',
      proof: 'Bukti nyata: InstaHuman Physical Device Engine.',
      targetTab: 3
    }
  ] : [
    {
      symptom:
        'Need to automate team operations with AI or build an unfamiliar software system rapidly without 3-month agency delays.',
      solution: 'Rapid Domain R&D + End-to-End AI Workflow Orchestration',
      proof: 'Flexible across custom LLM agents, API webhooks, and hardware control.',
      actionType: 'lab'
    },
    {
      symptom:
        'Cashier shift changes leak money, stock balances turn negative, or thermal Bluetooth receipt printing fails.',
      solution: 'Atomic Shift Closing + Anti-Minus Stock Guardrail',
      proof: 'Live evidence: CahayaPlastik POS (Native Android + ESC/POS).',
      targetTab: 0
    },
    {
      symptom:
        'High-value research PDFs get pirated easily and single accounts are shared among dozens of unauthorized users.',
      solution: 'Canvas Page Streaming + PostgreSQL Strict 2-Device Lock',
      proof: 'Live evidence: Motorcycle Restoration Catalog (245-page streaming).',
      targetTab: 1
    },
    {
      symptom:
        'Tens of thousands of noisy social media comments with informal slang skew conventional sentiment analytics.',
      solution: 'Indonesian Slang Lexicon Normalizer + PII Redaction Pipeline',
      proof: 'Live evidence: Large-Scale Public Opinion NLP Engine.',
      targetTab: 2
    },
    {
      symptom:
        'Mobile automation is consistently flagged and blocked due to predictable emulator clicks and linear paths.',
      solution: 'Physical Android Orchestration (ADB) + Natural Bezier Touch Curves',
      proof: 'Live evidence: InstaHuman Physical Device Automation.',
      targetTab: 3
    }
  ]

  const currentDiag = DIAGNOSIS_ITEMS[selectedDiag] || DIAGNOSIS_ITEMS[0]

  return (
    <section id="manifesto" className="py-8 sm:py-12 border-b ledger-border">
      {/* Main Hero Ledger Body */}
      <div className="border ledger-border surface-card p-6 sm:p-10 rounded-lg shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <span className="stamp-badge px-2.5 py-0.5 text-[11px] font-mono rounded">
            {t.hero.stamp}
          </span>
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.hero.statusLive}
          </span>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-[1.1] max-w-4xl">
          {t.hero.tagline}
          <span className="block mt-1.5 text-[#FF3B00]">{t.hero.subheadline}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 pt-6 border-t ledger-border items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed font-medium">
              {t.hero.intro1}
            </p>
            <p className="text-secondary-tone text-sm sm:text-base leading-relaxed">
              {t.hero.intro2}
            </p>

            {/* Architect Profile Card + Photo (NO PUBLIC UPLOAD BUTTON) */}
            <div className="p-4 rounded-lg surface-muted border ledger-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded border-2 border-[#121212] dark:border-sky-400 overflow-hidden bg-[#121212] shadow-[3px_3px_0px_#FF3B00]">
                  <img
                    id="architectProfileImg"
                    src={profile.profilePhoto}
                    alt={`Foto Profil ${profile.fullName}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        'https://placehold.co/300x360/121212/FF3B00?text=ZAKY+IRHAB'
                    }}
                  />
                </div>
              </div>

              {/* Condensed Dynamic Track Record (Title Only Chips from Admin) */}
              <div className="space-y-2.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#FF3B00] uppercase tracking-wider">
                    {t.hero.trackRecordHeader}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded surface-card border ledger-border font-semibold">
                    {profile.degree}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {profile.trackRecord && profile.trackRecord.length > 0 ? (
                    profile.trackRecord.map((item) => (
                      <span
                        key={item.id}
                        className="px-2.5 py-1 rounded surface-card border ledger-border font-semibold text-[11px] flex items-center gap-1.5 hover:border-[#FF3B00] transition"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00]"></span>
                        <span>{item.title}</span>
                      </span>
                    ))
                  ) : (
                    t.hero.trackRecords.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded surface-card border ledger-border font-semibold text-[11px] flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00]"></span>
                        <span>{item.title}</span>
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Core DNA Pills (Compact) */}
            <div className="grid grid-cols-3 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded surface-muted border ledger-border">
                <span className="text-[#FF3B00] font-bold block">{t.hero.dna1Title}</span>
                <span className="text-secondary-tone text-[11px]">{t.hero.dna1Desc}</span>
              </div>
              <div className="p-3 rounded surface-muted border ledger-border">
                <span className="text-[#FF3B00] font-bold block">{t.hero.dna2Title}</span>
                <span className="text-secondary-tone text-[11px]">{t.hero.dna2Desc}</span>
              </div>
              <div className="p-3 rounded surface-muted border ledger-border">
                <span className="text-[#FF3B00] font-bold block">{t.hero.dna3Title}</span>
                <span className="text-secondary-tone text-[11px]">{t.hero.dna3Desc}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#workbench"
                className="btn-safety px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold inline-flex items-center gap-2"
              >
                <span>{t.hero.ctaSystems}</span>
                <span>&darr;</span>
              </a>
              <a
                href="#ai-lab"
                className="btn-architect px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold inline-flex items-center gap-2"
              >
                <span>{t.hero.ctaChallenge}</span>
              </a>
            </div>
          </div>

          {/* Interactive Diagnostic Switchboard */}
          <div className="lg:col-span-5 border ledger-border surface-muted rounded-lg p-4 sm:p-5">
            <div className="flex items-center justify-between border-b ledger-border pb-2.5 mb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF3B00] font-bold block">
                  {t.hero.diagTitle}
                </span>
                <h2 className="font-display font-bold text-sm sm:text-base">
                  {t.hero.diagSubtitle}
                </h2>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded surface-card border ledger-border">
                {t.hero.diagHint}
              </span>
            </div>

            {/* Pain Point Selector Buttons */}
            <div className="grid grid-cols-2 gap-1.5 mb-3 font-mono text-xs">
              <button
                onClick={() => setSelectedDiag(0)}
                className={`col-span-2 text-left p-2 rounded border transition font-semibold cursor-pointer ${
                  selectedDiag === 0
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                {t.hero.diagTabs[0]}
              </button>
              <button
                onClick={() => setSelectedDiag(1)}
                className={`text-left p-2 rounded border transition cursor-pointer ${
                  selectedDiag === 1
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                {t.hero.diagTabs[1]}
              </button>
              <button
                onClick={() => setSelectedDiag(2)}
                className={`text-left p-2 rounded border transition cursor-pointer ${
                  selectedDiag === 2
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                {t.hero.diagTabs[2]}
              </button>
              <button
                onClick={() => setSelectedDiag(3)}
                className={`text-left p-2 rounded border transition cursor-pointer ${
                  selectedDiag === 3
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                {t.hero.diagTabs[3]}
              </button>
              <button
                onClick={() => setSelectedDiag(4)}
                className={`text-left p-2 rounded border transition cursor-pointer ${
                  selectedDiag === 4
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                {t.hero.diagTabs[4]}
              </button>
            </div>

            {/* Dynamic Blueprint Prescription Output */}
            <div className="surface-card border ledger-border rounded p-3.5 font-mono text-xs space-y-2">
              <div>
                <span className="text-[10px] text-secondary-tone uppercase block">
                  {t.hero.diagLabelProblem}
                </span>
                <p className="mt-0.5 leading-snug">{currentDiag.symptom}</p>
              </div>
              <div className="pt-1.5 border-t ledger-border">
                <span className="text-[10px] text-[#FF3B00] font-bold uppercase block">
                  {t.hero.diagLabelSolution}
                </span>
                <p className="font-bold mt-0.5">{currentDiag.solution}</p>
              </div>
              <div className="pt-1.5 border-t ledger-border flex items-center justify-between gap-2">
                <span className="text-[11px] text-secondary-tone">{currentDiag.proof}</span>
                {currentDiag.actionType === 'lab' ? (
                  <a
                    href="#ai-lab"
                    className="shrink-0 px-2.5 py-1 rounded bg-[#FF3B00] text-white hover:opacity-90 font-bold transition"
                  >
                    {t.hero.btnToLab}
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      if (currentDiag.targetTab !== undefined) {
                        onSelectSystemTab(currentDiag.targetTab)
                        document.getElementById('workbench')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="shrink-0 px-2.5 py-1 rounded bg-[#121212] text-white hover:bg-[#FF3B00] font-bold transition cursor-pointer"
                  >
                    {t.hero.btnToSystem}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
