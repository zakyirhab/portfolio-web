import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

interface DiagnosisItem {
  symptom: string
  solution: string
  proof: string
  actionType?: 'lab'
  targetTab?: number
}

const DIAGNOSIS_ITEMS: DiagnosisItem[] = [
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
]

export const HeroSection: React.FC<{ onSelectSystemTab: (idx: number) => void }> = ({
  onSelectSystemTab
}) => {
  const { profile, updateProfile } = usePortfolio()
  const [selectedDiag, setSelectedDiag] = useState<number>(0)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        updateProfile({ profilePhoto: event.target.result as string })
      }
    }
    reader.readAsDataURL(file)
  }

  const currentDiag = DIAGNOSIS_ITEMS[selectedDiag]

  return (
    <section id="manifesto" className="py-10 sm:py-14 border-b ledger-border">
      {/* Top Architectural Specification Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border ledger-border surface-card rounded-t-lg overflow-hidden font-mono text-xs">
        <div className="p-3 border-r border-b sm:border-b-0 ledger-border">
          <span className="text-secondary-tone block text-[10px]">PERAN UTAMA</span>
          <span className="font-bold text-[#FF3B00]">{profile.brandTitle}</span>
        </div>
        <div className="p-3 sm:border-r border-b sm:border-b-0 ledger-border">
          <span className="text-secondary-tone block text-[10px]">FLEKSIBILITAS</span>
          <span className="font-bold">PROYEK SERUPA / RISET BARU</span>
        </div>
        <div className="p-3 border-r ledger-border">
          <span className="text-secondary-tone block text-[10px]">KECEPATAN RILIS</span>
          <span className="font-bold">HITUNGAN HARI (BUKAN BULAN)</span>
        </div>
        <div className="p-3">
          <span className="text-secondary-tone block text-[10px]">VALIDASI MUTU</span>
          <span className="font-bold">AUDIT KETAT &amp; UJI HARDWARE</span>
        </div>
      </div>

      {/* Main Hero Ledger Body */}
      <div className="border-x border-b ledger-border surface-card p-6 sm:p-10 rounded-b-lg shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <span className="stamp-badge px-2.5 py-0.5 text-[11px] font-mono rounded">
            {profile.roleTitle}
          </span>
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Terbuka untuk Eksplorasi &amp; Proyek Baru
          </span>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-[1.1] max-w-4xl">
          {profile.heroTagline}
          <span className="block mt-1.5 text-[#FF3B00]">{profile.heroSubheadline}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 pt-6 border-t ledger-border items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed font-medium">
              {profile.intro1}
            </p>
            <p className="text-secondary-tone text-sm sm:text-base leading-relaxed">
              {profile.intro2}
            </p>

            {/* Architect Profile Card + Photo Slot & Credentials */}
            <div className="p-4 rounded-lg surface-muted border ledger-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Architect Photo Frame */}
              <div className="relative group shrink-0">
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
                <label
                  title="Klik untuk pasang fotomu langsung"
                  className="cursor-pointer mt-1.5 w-full py-1 px-2 rounded bg-[#121212] text-white hover:bg-[#FF3B00] transition font-mono text-[10px] font-bold flex items-center justify-center gap-1"
                >
                  <span>📷 Ubah Foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                </label>
              </div>

              {/* Condensed Background & Track Record */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#FF3B00] uppercase">
                    REKAM JEJAK &amp; LATAR BELAKANG
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded surface-card border ledger-border font-semibold">
                    {profile.degree}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs leading-relaxed">
                  {profile.trackRecord.map((item) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="text-[#FF3B00] font-bold">&bull;</span>
                      <span>
                        <strong>{item.title}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core DNA Pills (Compact) */}
            <div className="grid grid-cols-3 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded surface-muted border ledger-border">
                <span className="text-[#FF3B00] font-bold block">01. CEPAT BELAJAR</span>
                <span className="text-secondary-tone text-[11px]">
                  Adaptif kuasai teknologi &amp; alur bisnis baru.
                </span>
              </div>
              <div className="p-3 rounded surface-muted border ledger-border">
                <span className="text-[#FF3B00] font-bold block">02. ORKESTRASI AI</span>
                <span className="text-secondary-tone text-[11px]">
                  Eksekusi cepat dengan LLM, Agent, &amp; API.
                </span>
              </div>
              <div className="p-3 rounded surface-muted border ledger-border">
                <span className="text-[#FF3B00] font-bold block">03. AUDIT FISIK</span>
                <span className="text-secondary-tone text-[11px]">
                  Bebas AI-slop. Dites di hardware nyata.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#workbench"
                className="btn-safety px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Lihat 4 Proyek &amp; Simulator</span>
                <span>&darr;</span>
              </a>
              <a
                href="#ai-lab"
                className="btn-architect px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold inline-flex items-center gap-2"
              >
                <span>⚡ Tantang Ide Otomasi Baru</span>
              </a>
            </div>
          </div>

          {/* Interactive Diagnostic Switchboard */}
          <div className="lg:col-span-5 border ledger-border surface-muted rounded-lg p-4 sm:p-5">
            <div className="flex items-center justify-between border-b ledger-border pb-2.5 mb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF3B00] font-bold block">
                  DIAGNOSA CEPAT
                </span>
                <h2 className="font-display font-bold text-sm sm:text-base">
                  Apa Kebutuhan Anda Saat Ini?
                </h2>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded surface-card border ledger-border">
                KLIK PILIHAN
              </span>
            </div>

            {/* Pain Point Selector Buttons */}
            <div className="grid grid-cols-2 gap-1.5 mb-3 font-mono text-xs">
              <button
                onClick={() => setSelectedDiag(0)}
                className={`col-span-2 text-left p-2 rounded border transition font-semibold ${
                  selectedDiag === 0
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                ★ 01. Otomasi AI Kustom / Eksplorasi Sistem Baru
              </button>
              <button
                onClick={() => setSelectedDiag(1)}
                className={`text-left p-2 rounded border transition ${
                  selectedDiag === 1
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                02. POS &amp; Kasir Anti-Bocor
              </button>
              <button
                onClick={() => setSelectedDiag(2)}
                className={`text-left p-2 rounded border transition ${
                  selectedDiag === 2
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                03. Proteksi DRM Dokumen
              </button>
              <button
                onClick={() => setSelectedDiag(3)}
                className={`text-left p-2 rounded border transition ${
                  selectedDiag === 3
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                04. Pipeline NLP &amp; Opini
              </button>
              <button
                onClick={() => setSelectedDiag(4)}
                className={`text-left p-2 rounded border transition ${
                  selectedDiag === 4
                    ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-semibold'
                    : 'ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                05. Otomasi Android Fisik
              </button>
            </div>

            {/* Dynamic Blueprint Prescription Output */}
            <div className="surface-card border ledger-border rounded p-3.5 font-mono text-xs space-y-2">
              <div>
                <span className="text-[10px] text-secondary-tone uppercase block">MASALAH:</span>
                <p className="mt-0.5 leading-snug">{currentDiag.symptom}</p>
              </div>
              <div className="pt-1.5 border-t ledger-border">
                <span className="text-[10px] text-[#FF3B00] font-bold uppercase block">
                  SOLUSI ARSITEKTUR:
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
                    Ke Lab AI &rarr;
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
                    Lihat Proyek &rarr;
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
