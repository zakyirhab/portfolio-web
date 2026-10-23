import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

interface AiBlueprintItem {
  title: string
  badge: string
  learn: string
  orchestrate: string
  audit: string
}

const DEFAULT_AI_LAB_ITEMS: AiBlueprintItem[] = [
  {
    title: 'AI Agent & Otomasi Operasional (WA / CRM / ERP)',
    badge: 'WORKFLOW',
    learn: 'Memetakan alur kerja harian yang masih manual (rekap chat, input order, atau laporan harian).',
    orchestrate:
      'Merangkai AI Agent + Webhook yang mengekstrak data dan mengeksekusi tugas ke database otomatis 24/7.',
    audit: 'Mengunci skema output JSON agar bebas halusinasi dan memasang sistem antrean anti-gagal.'
  },
  {
    title: 'Ekstraksi Dokumen / Struk / PDF via Vision AI',
    badge: 'VISION AI',
    learn: 'Mempelajari struktur faktur, surat jalan, atau foto nota fisik beserta aturan validasi angkanya.',
    orchestrate:
      'Membangun pipa Multimodal Vision AI untuk mengubah foto/PDF menjadi tabel siap olah dalam hitungan detik.',
    audit: 'Memasang pengecekan silang matematis otomatis (subtotal vs grand total) untuk akurasi 100%.'
  },
  {
    title: 'Custom RAG & Asisten Data Internal Perusahaan',
    badge: 'RAG ENGINE',
    learn: 'Memetakan ratusan dokumen SOP, katalog produk, atau regulasi internal perusahaan Anda.',
    orchestrate:
      'Membangun pencarian vektor + kata kunci agar tim mendapat jawaban instan lengkap dengan sumber halaman.',
    audit: 'Membatasi jawaban ketat hanya dari dokumen resmi perusahaan dan memproteksi data sensitif.'
  },
  {
    title: 'Integrasi Hardware Fisik + AI Controller',
    badge: 'HARDWARE + AI',
    learn: 'Membedah dokumentasi protokol perangkat keras (Bluetooth, USB Serial, ADB, Printer, atau Sensor).',
    orchestrate: 'Memandori AI membangun jembatan komunikasi perangkat fisik ke aplikasi atau dashboard cloud.',
    audit: 'Menguji langsung di perangkat fisik nyata, termasuk pemulihan otomatis saat sinyal/kabel terputus.'
  }
]

export const AiLabSection: React.FC = () => {
  const { profile } = usePortfolio()
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const [customTopic, setCustomTopic] = useState<string>('')
  const [activePlan, setActivePlan] = useState<AiBlueprintItem>(DEFAULT_AI_LAB_ITEMS[0])

  const handleSelectPredefined = (idx: number) => {
    setSelectedIdx(idx)
    setActivePlan(DEFAULT_AI_LAB_ITEMS[idx])
  }

  const handleCustomBedah = () => {
    const topic = customTopic.trim().length > 2 ? customTopic.trim() : 'Otomasi AI & Sistem Kustom'
    setSelectedIdx(-1)
    setActivePlan({
      title: `Solusi Kustom: "${topic}"`,
      badge: 'CUSTOM R&D',
      learn: `Mempelajari cepat alur kerja "${topic}" dan mengidentifikasi titik rawan error di lapangan.`,
      orchestrate: `Merangkai model AI, integrasi API, dan database paling efisien untuk mengeksekusi "${topic}" dalam hitungan hari.`,
      audit: `Menguji ketahanan sistem secara menyeluruh hingga siap jalan stabil di operasional nyata.`
    })
  }

  const waLink = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    `Halo Zaky, saya tertarik berdiskusi mengenai: "${activePlan.title}".`
  )}`

  return (
    <section id="ai-lab" className="py-12 border-b ledger-border">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs px-2.5 py-0.5 rounded bg-[#FF3B00] text-white font-bold uppercase mb-2">
            <span>// 02. LAB EKSPLORASI &amp; OTOMASI AI</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            Punya Tantangan Otomasi Baru? Mari Kita Bedah Arsitekturnya.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-secondary-tone max-w-md font-mono">
          Pilih skenario di bawah atau ketik langsung masalah operasional Anda untuk melihat pendekatan riset &amp; eksekusi saya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Selector & Custom Input */}
        <div className="lg:col-span-5 surface-card border ledger-border rounded-lg p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-2 font-mono text-xs">
            <span className="font-bold text-[#FF3B00] uppercase block mb-1">
              CONTOH OTOMASI LINTAS BIDANG:
            </span>
            {DEFAULT_AI_LAB_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPredefined(idx)}
                className={`w-full text-left p-2.5 rounded transition flex items-center justify-between cursor-pointer ${
                  selectedIdx === idx
                    ? 'border-2 border-[#FF3B00] surface-muted font-bold'
                    : 'border ledger-border surface-card hover:border-[#FF3B00]'
                }`}
              >
                <span>{item.title}</span>
                <span>&rarr;</span>
              </button>
            ))}
          </div>

          {/* Custom Challenge Input */}
          <div className="pt-3 border-t ledger-border">
            <label htmlFor="customChallengeInput" className="font-mono text-xs font-bold block mb-1.5">
              KETIK KEBUTUHAN KUSTOM ANDA:
            </label>
            <div className="flex gap-2">
              <input
                id="customChallengeInput"
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomBedah()}
                placeholder="Contoh: Otomasi rekap invoice dari WA..."
                className="w-full px-3 py-2 rounded border ledger-border surface-muted font-mono text-xs focus:outline-none focus:border-[#FF3B00]"
              />
              <button
                onClick={handleCustomBedah}
                className="btn-architect px-3.5 py-2 rounded font-mono text-xs font-bold shrink-0 cursor-pointer"
              >
                Bedah
              </button>
            </div>
          </div>
        </div>

        {/* Right: Concise 3-Step Execution Plan */}
        <div className="lg:col-span-7 border-2 border-[#121212] dark:border-sky-500/50 rounded-lg surface-card overflow-hidden flex flex-col justify-between">
          <div className="bg-[#121212] text-[#F4F1EA] px-5 py-3.5 flex items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] text-[#FF3B00] font-bold uppercase block">
                RENCANA EKSEKUSI ARSITEK
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                {activePlan.title}
              </h3>
            </div>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#FF3B00] text-white font-bold shrink-0">
              {activePlan.badge}
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
            <div className="p-3.5 rounded surface-muted border ledger-border">
              <span className="font-mono text-[11px] font-bold text-[#FF3B00] block mb-1">
                1. RISET CEPAT
              </span>
              <p className="text-xs leading-relaxed text-secondary-tone">{activePlan.learn}</p>
            </div>
            <div className="p-3.5 rounded surface-muted border ledger-border">
              <span className="font-mono text-[11px] font-bold text-sky-700 dark:text-sky-400 block mb-1">
                2. ORKESTRASI AI
              </span>
              <p className="text-xs leading-relaxed text-secondary-tone">{activePlan.orchestrate}</p>
            </div>
            <div className="p-3.5 rounded surface-muted border ledger-border">
              <span className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                3. AUDIT &amp; KUNCI
              </span>
              <p className="text-xs leading-relaxed text-secondary-tone">{activePlan.audit}</p>
            </div>
          </div>

          <div className="px-5 py-3 surface-muted border-t ledger-border flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs text-secondary-tone">
              Tertarik membangun sistem ini?
            </span>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-safety px-3.5 py-1.5 rounded font-mono text-xs font-bold inline-flex items-center gap-1.5"
            >
              <span>Diskusi via WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
