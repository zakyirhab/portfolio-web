import React, { useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

interface PresetPrompt {
  id: string
  label: string
  prompt: string
  researchPlan: string[]
  orchestrationStack: string[]
  auditChecks: string[]
}

export const CyberAiLabSection: React.FC = () => {
  const { profile, language } = usePortfolio()
  const [selectedPreset, setSelectedPreset] = useState<number>(0)
  const [customQuery, setCustomQuery] = useState<string>('')
  const [activePlan, setActivePlan] = useState<PresetPrompt | null>(null)

  const PRESETS: PresetPrompt[] =
    language === 'id'
      ? [
          {
            id: 'wa-crm',
            label: 'Otomasi WhatsApp CRM & Sinkronisasi Sheets',
            prompt: 'Otomasi order masuk dari WA group ke Google Sheets & auto reply katalog PDF.',
            researchPlan: [
              'Analisis webhook WhatsApp Business API vs Baileys socket multi-device.',
              'Pemetaan skema data: Nama, No Telp, Alamat, Pesanan, Total Bayar.',
              'Mekanisme deduplikasi pesan masuk agar invoice tidak tercatat ganda.'
            ],
            orchestrationStack: [
              'Node.js + Baileys / Evolution API untuk bridge WA.',
              'Google Sheets API v4 (Service Account batch append).',
              'Claude / OpenAI untuk ekstraksi teks pesanan un-structured.'
            ],
            auditChecks: [
              'Tes ketahanan koneksi jika token WA putus (Auto-reconnect).',
              'Validasi nominal rupiah sebelum append ke database.',
              'Audit PII (Privasi data pelanggan tidak di-log sembarangan).'
            ]
          },
          {
            id: 'rag-doc',
            label: 'RAG Internal Knowledge Base Dokumen Legal/SOP',
            prompt: 'Bangun bot tanya-jawab SOP internal ribuan lembar PDF tanpa halusinasi.',
            researchPlan: [
              'Benchmarking chunking strategy (Recursive vs Markdown vs Semantic).',
              'Penyusunan metadata filter: Divisi, Tahun Berlaku, Level Kerahasiaan.',
              'Rancangan anti-halusinasi dengan threshold Cosine Similarity ketat.'
            ],
            orchestrationStack: [
              'Python FastAPI + LangChain / LlamaIndex.',
              'Vector Database: Qdrant / PgVector PostgreSQL.',
              'Cohere Rerank model untuk memprioritaskan dokumen paling otoritatif.'
            ],
            auditChecks: [
              'Kompilasi ground-truth test suite (50 pertanyaan jebakan).',
              'Audit kutipan: Bot wajib menyertakan halaman asli sumber PDF.',
              'Validasi access-control: Staf junior tidak bisa tanya file direksi.'
            ]
          },
          {
            id: 'scraping-monitor',
            label: 'Scraper E-Commerce & Notifikasi Fluktuasi Harga',
            prompt: 'Pantau harga kompetitor di 5 marketplace setiap jam & kirim alert Telegram.',
            researchPlan: [
              'Identifikasi proteksi antibot (Cloudflare Turnstile, Datadome, rate limits).',
              'Evaluasi API internal reverse-engineering vs browser headless Playwright.',
              'Perancangan skema alert: Hanya kirim notif jika harga turun > 5%.'
            ],
            orchestrationStack: [
              'Python + Crawlee / Playwright Stealth + Rotating Proxy Pool.',
              'Redis Queue + Celery untuk jadwal scraping terdistribusi.',
              'Telegram Bot API untuk push notifikasi instan.'
            ],
            auditChecks: [
              'Fallback selector jika marketplace mengubah class CSS frontend.',
              'Audit log kuota proxy agar biaya operasional tetap hemat.',
              'Tes toleransi kegagalan: Retry exponential backoff.'
            ]
          }
        ]
      : [
          {
            id: 'wa-crm',
            label: 'WhatsApp CRM to Google Sheets Automation',
            prompt: 'Automate order parsing from WhatsApp groups directly into Google Sheets with PDF replies.',
            researchPlan: [
              'Evaluate official WhatsApp Cloud API vs resilient socket bridges.',
              'Design schema mapping: Customer Name, Phone, Address, Line Items, Total.',
              'Message deduplication to prevent duplicate invoice entries.'
            ],
            orchestrationStack: [
              'Node.js + Baileys / Evolution API runtime.',
              'Google Sheets API v4 (Batch append with service account).',
              'Claude 3.5 Sonnet / GPT-4o for unstructured intent parsing.'
            ],
            auditChecks: [
              'Connection drops and socket auto-reconnect resilience.',
              'Deterministic currency and item quantity verification.',
              'PII auditing: Never log unmasked customer details in plain text.'
            ]
          },
          {
            id: 'rag-doc',
            label: 'Strict RAG Knowledge Base for Corporate SOPs',
            prompt: 'Internal Q&A assistant across thousands of SOP pages with strict zero-hallucination guardrails.',
            researchPlan: [
              'Chunking evaluation: Recursive character vs Semantic splitters.',
              'Metadata hierarchy: Department, Effective Year, Classification level.',
              'Strict cosine distance thresholding to reject out-of-scope questions.'
            ],
            orchestrationStack: [
              'Python FastAPI + LangChain / LlamaIndex pipeline.',
              'Vector Storage: Qdrant / PgVector PostgreSQL.',
              'Cohere Reranker to elevate highest authority compliance clauses.'
            ],
            auditChecks: [
              '50-adversarial questions validation test suite.',
              'Citation accuracy audit: Always enforce direct page references.',
              'Role-based access control (RBAC) filtering on vector chunks.'
            ]
          },
          {
            id: 'scraping-monitor',
            label: 'Marketplace Price Monitoring & Telegram Alerts',
            prompt: 'Scrape 5 e-commerce competitors hourly and broadcast real-time price drops to Telegram.',
            researchPlan: [
              'Analyze anti-bot barriers (Cloudflare, fingerprinting, IP throttling).',
              'Reverse-engineer private mobile endpoints vs stealth browser runners.',
              'Alert delta logic: Notify solely on significant price variances (>5%).'
            ],
            orchestrationStack: [
              'Python + Crawlee / Playwright Stealth + Residential Proxies.',
              'Redis + Celery scheduled task orchestration.',
              'Telegram Bot API instant alert dispatch.'
            ],
            auditChecks: [
              'Resilient fallback DOM selectors against frontend redesigns.',
              'Proxy bandwidth optimization to minimize running costs.',
              'Exponential backoff error recovery handling.'
            ]
          }
        ]

  const handleBedahPreset = (idx: number) => {
    setSelectedPreset(idx)
    setActivePlan(PRESETS[idx])
  }

  const handleCustomBedah = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customQuery.trim()) return

    const customPlan: PresetPrompt = {
      id: 'custom-' + Date.now(),
      label: customQuery.slice(0, 40) + '...',
      prompt: customQuery,
      researchPlan: [
        language === 'id'
          ? `Riset mendalam spesifikasi kebutuhan: "${customQuery}" & batasan teknologinya.`
          : `Deep technical requirement mapping for: "${customQuery}" & boundary constraints.`,
        language === 'id'
          ? 'Pemetaan skema input/output data, dependensi pihak ketiga, dan model lisensi.'
          : 'I/O data structure drafting, external API dependencies, and licensing checks.'
      ],
      orchestrationStack: [
        language === 'id'
          ? 'Orkestrasi model AI (LLM / Computer Vision) untuk logika reasoning kustom.'
          : 'AI reasoning fleet (LLM / Computer Vision) tailored for the pipeline.',
        language === 'id'
          ? 'Runtime TypeScript / Python + Webhook async untuk kecepatan eksekusi.'
          : 'TypeScript / Python async microservice runtime for responsive processing.'
      ],
      auditChecks: [
        language === 'id'
          ? 'Pengujian edge-case dan validasi langsung di perangkat nyata sebelum deploy.'
          : 'Physical hardware & edge-case validation before production release.',
        language === 'id'
          ? 'Implementasi fallback plan jika terjadi interupsi API atau server down.'
          : 'Graceful fallback architecture for network interruptions or model outages.'
      ]
    }
    setActivePlan(customPlan)
  }

  const currentPlan = activePlan || PRESETS[selectedPreset]

  return (
    <section id="ai-lab" className="py-12 sm:py-16 border-t border-[#27272A] text-[#EDEDED]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-xs text-[#FF3B00] tracking-wider uppercase mb-1 font-bold">
            03 / RAPID AI R&D LAB
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Architecting the Unfamiliar.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#A1A1AA] max-w-md">
          {language === 'id'
            ? 'Punya masalah operasional unik? Uji pendekatan bedah arsitektur teknis saya di bawah ini.'
            : 'Facing a unique technical bottleneck? Test how I break down problems into production systems.'}
        </p>
      </div>

      {/* Preset Buttons + Custom Input */}
      <div className="border border-[#27272A] rounded-xl bg-[#111113] p-5 sm:p-7 space-y-6">
        <div>
          <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider block mb-3">
            {language === 'id'
              ? 'PILIH SKENARIO OTOMASI LINTAS BIDANG:'
              : 'SELECT AN AUTOMATION SCENARIO:'}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 font-mono text-xs">
            {PRESETS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => handleBedahPreset(idx)}
                className={`p-3 rounded-lg border text-left transition cursor-pointer flex flex-col justify-between ${
                  currentPlan.id === p.id
                    ? 'border-[#FF3B00] bg-[#1C1513] text-white'
                    : 'border-[#27272A] bg-[#161619] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-white'
                }`}
              >
                <span className="text-[10px] text-[#FF3B00] font-bold mb-1">SCENARIO 0{idx + 1}</span>
                <span className="font-bold leading-snug">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input */}
        <form onSubmit={handleCustomBedah} className="pt-2 border-t border-[#27272A]">
          <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider block mb-2">
            {language === 'id'
              ? 'ATAU TIK MASALAH OPERASIONAL KUSTOM ANDA:'
              : 'OR TYPE YOUR CUSTOM BOTTLENECK:'}
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder={
                language === 'id'
                  ? 'Contoh: Otomasi rekap faktur PDF scan ke SAP ERP via WhatsApp...'
                  : 'e.g. Scanned PDF invoice data extraction to ERP via WhatsApp bot...'
              }
              className="flex-1 px-4 py-2.5 rounded-lg bg-[#18181B] border border-[#27272A] text-white text-xs font-mono placeholder-[#52525B] focus:border-[#FF3B00] focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-[#FF3B00] hover:bg-[#E03400] text-white font-mono font-bold text-xs transition cursor-pointer shrink-0"
            >
              {language === 'id' ? 'Bedah Arsitektur' : 'Architect It'}
            </button>
          </div>
        </form>
      </div>

      {/* Blueprint Execution Breakdown Card */}
      {currentPlan && (
        <div className="mt-6 border border-[#27272A] rounded-xl bg-[#0D0E11] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#27272A]">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#FF3B00] font-bold uppercase tracking-wider">
                ARCHITECTURAL EXECUTION BLUEPRINT
              </span>
              <h4 className="font-display font-bold text-lg text-white">{currentPlan.label}</h4>
            </div>
            <span className="font-mono text-xs text-[#71717A] self-start sm:self-auto">
              // READY FOR RAPID PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
            {/* Phase 1 */}
            <div className="p-4 rounded-lg bg-[#141416] border border-[#27272A] space-y-2">
              <span className="text-[10px] text-[#FF3B00] font-bold uppercase tracking-wider block">
                1. RAPID DOMAIN R&D
              </span>
              <ul className="space-y-1.5 text-[#A1A1AA] text-[11px] leading-relaxed">
                {currentPlan.researchPlan.map((step, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-white font-bold">&bull;</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-4 rounded-lg bg-[#141416] border border-[#27272A] space-y-2">
              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block">
                2. AI FLEET ORCHESTRATION
              </span>
              <ul className="space-y-1.5 text-[#A1A1AA] text-[11px] leading-relaxed">
                {currentPlan.orchestrationStack.map((step, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-white font-bold">&bull;</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="p-4 rounded-lg bg-[#141416] border border-[#27272A] space-y-2">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                3. HARDWARE & GATING AUDIT
              </span>
              <ul className="space-y-1.5 text-[#A1A1AA] text-[11px] leading-relaxed">
                {currentPlan.auditChecks.map((step, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-white font-bold">&bull;</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#A1A1AA]">
              {language === 'id'
                ? 'Tertarik membangun arsitektur ini untuk bisnis Anda?'
                : 'Interested in building this architecture for your operations?'}
            </span>
            <a
              href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                `Halo Zaky, saya tertarik membangun sistem otomasi: ${currentPlan.label}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#FF3B00] hover:bg-[#E03400] text-white font-bold flex items-center justify-center gap-2 transition"
            >
              <span>{language === 'id' ? 'Diskusikan Sistem Ini' : 'Discuss This System'}</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
