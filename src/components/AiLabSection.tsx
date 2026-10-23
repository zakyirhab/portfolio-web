import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

interface AiBlueprintItem {
  title: string
  badge: string
  learn: string
  orchestrate: string
  audit: string
}

export const AiLabSection: React.FC = () => {
  const { profile, t, language } = usePortfolio()
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const [customTopic, setCustomTopic] = useState<string>('')

  const DEFAULT_AI_LAB_ITEMS: AiBlueprintItem[] = language === 'id' ? [
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
  ] : [
    {
      title: 'AI Agents & Operational Automation (WhatsApp / CRM / ERP)',
      badge: 'WORKFLOW',
      learn: 'Mapping out repetitive daily manual operations (chat parsing, order entry, and daily reporting).',
      orchestrate:
        'Chaining AI Agents and webhooks that extract unstructured data and write to production databases 24/7.',
      audit: 'Locking strict JSON schema outputs to eliminate hallucinations and installing fault-tolerant task queues.'
    },
    {
      title: 'Document, Receipt & PDF Extraction via Vision AI',
      badge: 'VISION AI',
      learn: 'Dissecting unstructured invoices, physical receipts, and packing slips along with numerical constraints.',
      orchestrate:
        'Building multimodal Vision AI pipelines that convert images/PDFs into structured tables in seconds.',
      audit: 'Enforcing mathematical cross-validation checks (subtotal vs grand total) for 100% data integrity.'
    },
    {
      title: 'Custom Enterprise RAG & Internal Data Assistant',
      badge: 'RAG ENGINE',
      learn: 'Cataloging hundreds of SOP documents, technical schematics, or regulatory files.',
      orchestrate:
        'Architecting hybrid vector and lexical search so internal teams retrieve verified citations with page sources.',
      audit: 'Strictly sandboxing answers to verified company files with zero data leakage.'
    },
    {
      title: 'Physical Hardware Integration + AI Controller',
      badge: 'HARDWARE + AI',
      learn: 'Reverse engineering hardware protocol specs (Bluetooth, USB Serial, ADB, Thermal Printers, Sensors).',
      orchestrate: 'Directing AI to write hardware bridge daemons connecting physical peripherals to cloud dashboards.',
      audit: 'Field-tested on actual physical devices with auto-reconnection daemons upon connection drops.'
    }
  ]

  const activePlan = selectedIdx >= 0 ? DEFAULT_AI_LAB_ITEMS[selectedIdx] : {
    title: language === 'id' ? `Solusi Kustom: "${customTopic || 'Otomasi AI'}"` : `Custom Solution: "${customTopic || 'AI Automation'}"`,
    badge: 'CUSTOM R&D',
    learn: language === 'id'
      ? `Mempelajari cepat alur kerja "${customTopic}" dan mengidentifikasi titik rawan error di lapangan.`
      : `Rapidly analyzing the workflow of "${customTopic}" and pinpointing critical operational failure points.`,
    orchestrate: language === 'id'
      ? `Merangkai model AI, integrasi API, dan database paling efisien untuk mengeksekusi "${customTopic}" dalam hitungan hari.`
      : `Connecting optimal AI models, APIs, and databases to deliver a production workflow for "${customTopic}" in days.`,
    audit: language === 'id'
      ? `Menguji ketahanan sistem secara menyeluruh hingga siap jalan stabil di operasional nyata.`
      : `Stress-testing the end-to-end architecture until it operates stably in production.`
  }

  const handleCustomBedah = () => {
    if (!customTopic.trim()) return
    setSelectedIdx(-1)
  }

  const waLink = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    `Halo Zaky, saya tertarik berdiskusi mengenai: "${activePlan.title}".`
  )}`

  return (
    <section id="ai-lab" className="py-12 border-b ledger-border">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs px-2.5 py-0.5 rounded bg-[#FF3B00] text-white font-bold uppercase mb-2">
            <span>{t.aiLab.sectionTag}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {t.aiLab.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-secondary-tone max-w-md font-mono">
          {t.aiLab.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Selector & Custom Input */}
        <div className="lg:col-span-5 surface-card border ledger-border rounded-lg p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-2 font-mono text-xs">
            <span className="font-bold text-[#FF3B00] uppercase block mb-1">
              {t.aiLab.examplesLabel}
            </span>
            {DEFAULT_AI_LAB_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
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
              {t.aiLab.customInputLabel}
            </label>
            <div className="flex gap-2">
              <input
                id="customChallengeInput"
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomBedah()}
                placeholder={t.aiLab.customPlaceholder}
                className="w-full px-3 py-2 rounded border ledger-border surface-muted font-mono text-xs focus:outline-none focus:border-[#FF3B00]"
              />
              <button
                onClick={handleCustomBedah}
                className="btn-architect px-3.5 py-2 rounded font-mono text-xs font-bold shrink-0 cursor-pointer"
              >
                {t.aiLab.btnBedah}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Concise 3-Step Execution Plan */}
        <div className="lg:col-span-7 border-2 border-[#121212] dark:border-sky-500/50 rounded-lg surface-card overflow-hidden flex flex-col justify-between">
          <div className="bg-[#121212] text-[#F4F1EA] px-5 py-3.5 flex items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] text-[#FF3B00] font-bold uppercase block">
                {t.aiLab.planHeader}
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
                {t.aiLab.step1}
              </span>
              <p className="text-xs leading-relaxed text-secondary-tone">{activePlan.learn}</p>
            </div>
            <div className="p-3.5 rounded surface-muted border ledger-border">
              <span className="font-mono text-[11px] font-bold text-sky-700 dark:text-sky-400 block mb-1">
                {t.aiLab.step2}
              </span>
              <p className="text-xs leading-relaxed text-secondary-tone">{activePlan.orchestrate}</p>
            </div>
            <div className="p-3.5 rounded surface-muted border ledger-border">
              <span className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                {t.aiLab.step3}
              </span>
              <p className="text-xs leading-relaxed text-secondary-tone">{activePlan.audit}</p>
            </div>
          </div>

          <div className="px-5 py-3 surface-muted border-t ledger-border flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs text-secondary-tone">
              {t.aiLab.interested}
            </span>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-safety px-3.5 py-1.5 rounded font-mono text-xs font-bold inline-flex items-center gap-1.5"
            >
              <span>{t.aiLab.ctaWa}</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
