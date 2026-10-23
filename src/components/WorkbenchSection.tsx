import React, { useState, useEffect, useRef } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import type { BlueprintProject } from '../types/portfolio'

export const WorkbenchSection: React.FC<{ activeIndex: number; onSelectTab: (idx: number) => void }> = ({
  activeIndex,
  onSelectTab
}) => {
  const { projects, addProjectPhoto, openAdmin } = usePortfolio()
  const [rightMode, setRightMode] = useState<'sim' | 'photo'>('sim')
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(0)

  // Simulator 1: POS state
  const [posStock, setPosStock] = useState<number>(5)
  const [posCash, setPosCash] = useState<number>(450000)
  const [posReceiptStatus, setPosReceiptStatus] = useState<string>('READY')
  const [posLog, setPosLog] = useState<{ type: string; content: React.ReactNode } | null>(null)

  // Simulator 2: DRM state
  const [drmSlot2, setDrmSlot2] = useState<'empty' | 'active'>('empty')
  const [drmSlot3, setDrmSlot3] = useState<'standby' | 'blocked'>('standby')
  const [drmLog, setDrmLog] = useState<string>('> [STREAM] Render Hal 142/245 ke Canvas (Tanpa File PDF Asli).')

  // Simulator 3: NLP state
  const [nlpSampleIdx, setNlpSampleIdx] = useState<number>(0)

  // Simulator 4: ADB Bezier Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [bezierTelemetry, setBezierTelemetry] = useState<{ text: string; safe: boolean }>({
    text: 'KURVA BEZIER MANUSIA (ADB FISIK)',
    safe: true
  })

  const currentProject: BlueprintProject = projects[activeIndex] || projects[0]

  useEffect(() => {
    setCurrentPhotoIdx(0)
    if (!currentProject.hasPhotos) {
      setRightMode('sim')
    }
  }, [activeIndex, currentProject.hasPhotos])

  const drawTouchCurve = (mode: 'human' | 'bot') => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 1
    for (let x = 0; x < canvas.width; x += 25) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }
    for (let y = 0; y < canvas.height; y += 25) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    const start = { x: 45, y: 115 }
    const end = { x: 335, y: 35 }

    if (mode === 'human') {
      const cp1 = { x: 120, y: 20 + Math.random() * 25 }
      const cp2 = { x: 240, y: 125 - Math.random() * 25 }

      ctx.strokeStyle = '#34D399'
      ctx.lineWidth = 2.5
      ctx.beginPath()
      ctx.moveTo(start.x, start.y)

      const steps = 28
      for (let i = 1; i <= steps; i++) {
        const t = i / steps
        const u = 1 - t
        const bx = u * u * u * start.x + 3 * u * u * t * cp1.x + 3 * u * t * t * cp2.x + t * t * t * end.x
        const by = u * u * u * start.y + 3 * u * u * t * cp1.y + 3 * u * t * t * cp2.y + t * t * t * end.y
        const jitterY = i < steps ? (Math.random() - 0.5) * 3.2 : 0
        ctx.lineTo(bx, by + jitterY)

        ctx.fillStyle = 'rgba(52, 211, 153, 0.55)'
        ctx.fillRect(bx - 1.5, by + jitterY - 1.5, 3, 3)
      }
      ctx.stroke()

      setBezierTelemetry({
        text: 'KURVA BEZIER + JITTER (ADB FISIK) — AMAN / MANUSIA ALAMI',
        safe: true
      })
    } else {
      ctx.strokeStyle = '#EF4444'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 4])
      ctx.beginPath()
      ctx.moveTo(start.x, start.y)
      ctx.lineTo(end.x, end.y)
      ctx.stroke()
      ctx.setLineDash([])

      setBezierTelemetry({
        text: 'GARIS LINIER KONSTAN (EMULATOR BOT) — TERDETEKSI & DIBLOKIR!',
        safe: false
      })
    }

    ctx.fillStyle = '#FF3B00'
    ctx.beginPath()
    ctx.arc(start.x, start.y, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#38BDF8'
    ctx.beginPath()
    ctx.arc(end.x, end.y, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  useEffect(() => {
    if (activeIndex === 3 && rightMode === 'sim') {
      const timer = setTimeout(() => drawTouchCurve('human'), 50)
      return () => clearTimeout(timer)
    }
  }, [activeIndex, rightMode])

  const handleSimPos = (action: 'normal' | 'minus' | 'close_shift') => {
    if (action === 'normal') {
      if (posStock >= 2) {
        const nextStock = posStock - 2
        const nextCash = posCash + 70000
        setPosStock(nextStock)
        setPosCash(nextCash)
        setPosReceiptStatus('PRINTED OK')
        setPosLog({
          type: 'ok',
          content: (
            <>
              <div className="flex justify-between font-bold text-emerald-700">
                <span>[OK] JUAL 2 PACK HD</span>
                <span>+70.000</span>
              </div>
              <div className="flex justify-between">
                <span>METODE:</span>
                <span>DYNAMIC QRIS</span>
              </div>
              <div className="flex justify-between">
                <span>SISA STOK FISIK:</span>
                <span>{nextStock} PACK</span>
              </div>
            </>
          )
        })
      } else {
        handleSimPos('minus')
      }
    } else if (action === 'minus') {
      setPosReceiptStatus('LOCKED')
      setPosLog({
        type: 'err',
        content: (
          <>
            <div className="p-1 bg-red-100 text-red-800 font-bold rounded">
              [DITOLAK] GUARD ANTI-SALDO MINUS!
            </div>
            <div className="mt-1">Minta: 10 Pack | Stok: {posStock} Pack</div>
            <div className="text-[10px] text-stone-600">Transaksi dibatalkan otomatis.</div>
          </>
        )
      })
    } else if (action === 'close_shift') {
      setPosStock(5)
      setPosReceiptStatus('SHIFT CLOSED')
      setPosLog({
        type: 'close',
        content: (
          <>
            <div className="font-bold border-b border-stone-300 pb-0.5">=== ATOMIC SHIFT CLOSING ===</div>
            <div className="flex justify-between">
              <span>KAS TERKUNCI:</span>
              <span>Rp {posCash.toLocaleString('id-ID')}</span>
            </div>
            <div className="text-emerald-700 font-bold mt-0.5">&gt; Shift ditutup &amp; dikunci berantai.</div>
          </>
        )
      })
    }
  }

  const handleUploadProjectPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        addProjectPhoto(currentProject.id, {
          url: event.target.result as string,
          caption: `Dokumentasi Baru: ${file.name}`
        })
      }
    }
    reader.readAsDataURL(file)
  }

  const currentPhoto = currentProject.photos[currentPhotoIdx] || currentProject.photos[0]

  return (
    <section id="workbench" className="py-12 sm:py-14 border-b ledger-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="font-mono text-xs text-[#FF3B00] font-bold tracking-widest uppercase mb-1.5">
            // 03. 4 BUKTI SISTEM NYATA LINTAS INDUSTRI
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            Bukti Kemampuan Belajar &amp; Eksekusi di 4 Medan Teknis Berbeda
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-secondary-tone max-w-md font-mono">
          Dilengkapi <strong>Simulator Interaktif</strong> dan <strong>Galeri Dokumentasi Foto</strong> (khusus proyek NLP hanya menampilkan simulasi demi privasi data).
        </p>
      </div>

      {/* System Dossier Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => onSelectTab(idx)}
            className={`sys-tab text-left p-3.5 rounded-lg transition group cursor-pointer ${
              activeIndex === idx
                ? 'border-2 border-[#FF3B00] surface-card shadow-sm'
                : 'border ledger-border surface-card hover:border-[#FF3B00]'
            }`}
          >
            <div className="flex items-center justify-between font-mono text-[11px] mb-1">
              <span
                className={`px-1.5 py-0.5 rounded font-bold ${
                  activeIndex === idx
                    ? 'bg-[#FF3B00] text-white'
                    : 'surface-muted border ledger-border text-secondary-tone'
                }`}
              >
                {proj.code}
              </span>
              <span className="text-secondary-tone">
                {proj.hasPhotos ? 'SIMULASI + FOTO' : 'MURNI SIMULASI'}
              </span>
            </div>
            <h3 className="font-display font-bold text-sm sm:text-base group-hover:text-[#FF3B00] transition">
              {proj.title.split('(')[0].trim()}
            </h3>
            <p className="text-xs text-secondary-tone mt-0.5 line-clamp-1">{proj.subtitle}</p>
          </button>
        ))}
      </div>

      {/* ACTIVE SYSTEM BLUEPRINT WORKBENCH */}
      <div className="border-2 border-[#121212] dark:border-sky-500/50 rounded-lg surface-card overflow-hidden shadow-md">
        {/* Dossier Top Header Bar */}
        <div className="bg-[#121212] text-[#F4F1EA] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b ledger-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FF3B00] text-white font-bold">
              {currentProject.code}
            </span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                {currentProject.title}
              </h3>
              <p className="font-mono text-[11px] text-stone-300">{currentProject.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {currentProject.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded bg-stone-800 text-stone-200 border border-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Workbench Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT COLUMN: Concise Audit Ledger (Mandor vs AI) */}
          <div className="lg:col-span-6 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r ledger-border space-y-5">
            <div>
              <span className="font-mono text-[11px] uppercase text-secondary-tone font-bold block mb-1">
                MASALAH INTI YANG DISELESAIKAN
              </span>
              <p className="text-sm leading-relaxed font-medium">{currentProject.problem}</p>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase text-secondary-tone font-bold block mb-1.5">
                ARSITEKTUR KUNCI
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {currentProject.features.map((feat, fIdx) => (
                  <li key={fIdx} className="p-2 rounded surface-muted border ledger-border font-medium">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* TRANSPARENT AUDIT: MANDOR VS AI */}
            <div className="border ledger-border rounded-lg overflow-hidden">
              <div className="surface-muted px-3.5 py-2 border-b ledger-border flex items-center justify-between font-mono text-[11px]">
                <span className="font-bold">PEMBAGIAN TUGAS: ARSITEK VS. AI</span>
                <span className="text-[#FF3B00] font-bold">100% DIAUDIT</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x ledger-border text-xs">
                <div className="p-3.5 surface-card">
                  <span className="font-mono text-[11px] font-bold text-[#FF3B00] block mb-1.5">
                    PERAN SAYA (ARSITEK):
                  </span>
                  <ul className="space-y-1.5">
                    {currentProject.mandorRole.map((role, rIdx) => (
                      <li key={rIdx} className="leading-relaxed font-medium">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3.5 surface-muted">
                  <span className="font-mono text-[11px] font-bold text-secondary-tone block mb-1.5">
                    PERAN AI (EKSEKUTOR):
                  </span>
                  <ul className="space-y-1.5 text-secondary-tone">
                    {currentProject.aiRole.map((role, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MODE SWITCHER (SIMULATOR vs FOTO BUKTI) */}
          <div className="lg:col-span-6 p-5 sm:p-6 surface-muted flex flex-col justify-between">
            <div>
              {/* Top Mode Switcher Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b ledger-border">
                <div className="inline-flex rounded p-1 surface-card border ledger-border font-mono text-xs">
                  <button
                    onClick={() => setRightMode('sim')}
                    className={`px-3 py-1.5 rounded font-bold transition cursor-pointer ${
                      rightMode === 'sim'
                        ? 'bg-[#121212] text-white'
                        : 'text-secondary-tone hover:text-[#FF3B00]'
                    }`}
                  >
                    ⚡ Simulasi Interaktif
                  </button>
                  {currentProject.hasPhotos && (
                    <button
                      onClick={() => setRightMode('photo')}
                      className={`px-3 py-1.5 rounded font-bold transition cursor-pointer ${
                        rightMode === 'photo'
                          ? 'bg-[#FF3B00] text-white'
                          : 'text-secondary-tone hover:text-[#FF3B00]'
                      }`}
                    >
                      📸 Bukti Foto / Screenshot
                    </button>
                  )}
                </div>

                {!currentProject.hasPhotos && (
                  <span className="font-mono text-[11px] px-2 py-1 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 font-semibold">
                    🔒 Proyek NLP: Hanya Simulasi (Privasi Data)
                  </span>
                )}
              </div>

              {/* =====================================
                   WRAPPER A: INTERACTIVE SIMULATORS
                   ===================================== */}
              {rightMode === 'sim' && (
                <div className="space-y-3.5">
                  {/* SIMULATOR 0: CAHAYAPLASTIK POS */}
                  {activeIndex === 0 && (
                    <div className="space-y-3.5">
                      <p className="text-xs text-secondary-tone">
                        Uji langsung: sistem memblokir transaksi jika stok kurang dari permintaan (anti-minus) dan mengunci penutupan shift kasir.
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded surface-card border ledger-border">
                          <span className="text-[10px] text-secondary-tone block">STOK PLASTIK HD</span>
                          <span className="text-base font-bold">{posStock} Pack</span>
                        </div>
                        <div className="p-2.5 rounded surface-card border ledger-border">
                          <span className="text-[10px] text-secondary-tone block">SALDO KAS SHIFT</span>
                          <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                            Rp {posCash.toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 font-mono text-xs">
                        <button
                          onClick={() => handleSimPos('normal')}
                          className="flex-1 py-2 px-2.5 rounded surface-card border ledger-border hover:border-[#FF3B00] font-semibold transition cursor-pointer"
                        >
                          + Jual 2 Pack (QRIS)
                        </button>
                        <button
                          onClick={() => handleSimPos('minus')}
                          className="flex-1 py-2 px-2.5 rounded surface-card border border-red-400 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white font-semibold transition cursor-pointer"
                        >
                          ! Paksa Jual 10 Pack
                        </button>
                        <button
                          onClick={() => handleSimPos('close_shift')}
                          className="w-full py-2 px-3 rounded bg-[#121212] text-white hover:bg-[#FF3B00] font-semibold transition cursor-pointer"
                        >
                          🔒 Atomic Shift Closing &amp; Cetak Struk
                        </button>
                      </div>

                      <div className="bg-white text-stone-900 p-3.5 rounded shadow-inner border border-stone-300 font-mono text-[11px] leading-snug">
                        <div className="text-center border-b border-dashed border-stone-400 pb-1.5 mb-2">
                          <div className="font-bold text-xs">TOKO CAHAYA PLASTIK — ESC/POS 58mm</div>
                        </div>
                        <div className="space-y-1 min-h-[85px]">
                          {posLog ? (
                            posLog.content
                          ) : (
                            <>
                              <div className="flex justify-between">
                                <span>SHIFT #02 (ATOMIC LOCK)</span>
                                <span>AKTIF</span>
                              </div>
                              <div className="flex justify-between">
                                <span>GUARD ANTI-MINUS:</span>
                                <span className="font-bold">ON</span>
                              </div>
                              <div className="text-stone-500 mt-1">&gt; Siap menerima transaksi...</div>
                            </>
                          )}
                        </div>
                        <div className="border-t border-dashed border-stone-400 pt-1.5 mt-2 flex justify-between text-[10px] text-stone-500">
                          <span>CRC32: 9F8A</span>
                          <span>{posReceiptStatus}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 1: KATALOG RESTORASI DRM */}
                  {activeIndex === 1 && (
                    <div className="space-y-3.5">
                      <p className="text-xs text-secondary-tone">
                        PostgreSQL <code>SELECT ... FOR UPDATE</code> mengunci kuota maksimal 2 perangkat. Coba paksa login perangkat ke-3 di bawah.
                      </p>
                      <div className="space-y-2 font-mono text-xs">
                        <div className="p-2.5 rounded surface-card border border-emerald-500 flex items-center justify-between">
                          <span>📱 Perangkat #1: MacBook Air</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                            AKTIF (1/2)
                          </span>
                        </div>
                        <div className="p-2.5 rounded surface-card border ledger-border flex items-center justify-between">
                          <span>
                            {drmSlot2 === 'active'
                              ? '📱 Perangkat #2: iPad Pro'
                              : '💻 Slot Perangkat #2: [KOSONG]'}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded ${
                              drmSlot2 === 'active'
                                ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold'
                                : 'surface-muted'
                            }`}
                          >
                            {drmSlot2 === 'active' ? 'AKTIF (2/2)' : 'TERSEDIA'}
                          </span>
                        </div>
                        <div
                          className={`p-2.5 rounded surface-card flex items-center justify-between transition ${
                            drmSlot3 === 'blocked'
                              ? 'border-2 border-red-500'
                              : 'border ledger-border opacity-75'
                          }`}
                        >
                          <span>🕵️ Perangkat #3 (Bagi-Pakai Akun)</span>
                          <span
                            className={`px-2 py-0.5 rounded font-bold ${
                              drmSlot3 === 'blocked' ? 'bg-red-600 text-white' : 'surface-muted'
                            }`}
                          >
                            {drmSlot3 === 'blocked' ? '403 BLOCKED' : 'STANDBY'}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 font-mono text-xs">
                        <button
                          onClick={() => {
                            setDrmSlot2('active')
                            setDrmLog('> [ROW LOCK] Kuota 2/2 penuh. Streaming Canvas diizinkan.')
                          }}
                          className="flex-1 py-2 px-3 rounded surface-card border ledger-border hover:border-[#FF3B00] font-semibold transition cursor-pointer"
                        >
                          + Login Device #2
                        </button>
                        <button
                          onClick={() => {
                            setDrmSlot2('active')
                            setDrmSlot3('blocked')
                            setDrmLog('> [POSTGRES REJECT] Lisensi penuh (2/2)! Koneksi ke-3 ditolak.')
                          }}
                          className="flex-1 py-2 px-3 rounded bg-[#FF3B00] text-white font-semibold transition cursor-pointer"
                        >
                          ⚡ Paksa Device #3
                        </button>
                        <button
                          onClick={() => {
                            setDrmSlot2('empty')
                            setDrmSlot3('standby')
                            setDrmLog('> [STREAM] Render Hal 142/245 ke Canvas (Tanpa File PDF Asli).')
                          }}
                          className="py-2 px-3 rounded surface-card border ledger-border text-secondary-tone cursor-pointer"
                        >
                          Reset
                        </button>
                      </div>

                      <div className="p-3 rounded bg-[#121212] text-stone-200 font-mono text-[11px] space-y-1">
                        <div className="text-sky-400">SELECT * FROM license_locks WHERE key='RST-99' FOR UPDATE;</div>
                        <div className={drmSlot3 === 'blocked' ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                          {drmLog}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 2: APPLIED NLP */}
                  {activeIndex === 2 && (
                    <div className="space-y-3.5">
                      <p className="text-xs text-secondary-tone">
                        Simulasi pipeline pembersihan bahasa gaul (slang) Indonesia dan sensor data privasi sebelum masuk ke klasifikasi sentimen.
                      </p>
                      <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                        <button
                          onClick={() => setNlpSampleIdx(0)}
                          className={`text-left p-2.5 rounded surface-card border transition cursor-pointer ${
                            nlpSampleIdx === 0
                              ? 'border-[#FF3B00] bg-[#FF3B00]/10 font-bold'
                              : 'ledger-border hover:border-[#FF3B00]'
                          }`}
                        >
                          Sampel Keluhan: "Bener2 parah bgt pelayanannya lelet pol mslhnya udh bayar lunas dr kmrn!!"
                        </button>
                        <button
                          onClick={() => setNlpSampleIdx(1)}
                          className={`text-left p-2.5 rounded surface-card border transition cursor-pointer ${
                            nlpSampleIdx === 1
                              ? 'border-[#FF3B00] bg-[#FF3B00]/10 font-bold'
                              : 'ledger-border hover:border-[#FF3B00]'
                          }`}
                        >
                          Sampel Pujian: "Gokil sih fitur barunya sat-set bgt ga pake ribet mantul pokoke 👍"
                        </button>
                      </div>

                      <div className="p-3.5 rounded surface-card border ledger-border font-mono text-xs space-y-2">
                        <div>
                          <span className="text-[10px] text-secondary-tone block">HASIL NORMALISASI BAKU:</span>
                          <div className="font-semibold text-sky-700 dark:text-sky-300 mt-0.5">
                            {nlpSampleIdx === 0
                              ? '"benar-benar parah sekali pelayanannya lambat sekali masalahnya sudah bayar lunas dari kemarin"'
                              : '"luar biasa fitur barunya cepat dan tanggap sekali tidak pakai rumit mantap betul pokoknya"'}
                          </div>
                        </div>
                        <div className="pt-2 border-t ledger-border flex items-center justify-between">
                          <span
                            className={`px-2 py-0.5 rounded font-bold ${
                              nlpSampleIdx === 0
                                ? 'bg-red-500/20 text-red-600 dark:text-red-400'
                                : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                            }`}
                          >
                            {nlpSampleIdx === 0 ? 'NEGATIF (94.2%)' : 'POSITIF (96.8%)'}
                          </span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                            PII ANONYMIZED
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 3: INSTAHUMAN BEZIER */}
                  {activeIndex === 3 && (
                    <div className="space-y-3.5">
                      <p className="text-xs text-secondary-tone">
                        Bandingkan injeksi sentuhan kurva Bezier via ADB di HP Android fisik vs garis lurus kaku pada bot emulator.
                      </p>
                      <div className="relative rounded border ledger-border bg-[#121212] overflow-hidden">
                        <canvas
                          ref={canvasRef}
                          width={380}
                          height={150}
                          className="w-full h-[145px] block"
                        ></canvas>
                        <div className="px-3 py-1.5 bg-black/70 border-t border-stone-800 font-mono text-[10px] text-stone-300 flex justify-between">
                          <span>{bezierTelemetry.text}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 font-mono text-xs">
                        <button
                          onClick={() => drawTouchCurve('human')}
                          className="flex-1 py-2 px-3 rounded bg-[#FF3B00] text-white font-semibold transition cursor-pointer"
                        >
                          🖐️ Kurva Manusia (Bezier)
                        </button>
                        <button
                          onClick={() => drawTouchCurve('bot')}
                          className="flex-1 py-2 px-3 rounded surface-card border ledger-border hover:border-red-500 font-semibold transition cursor-pointer"
                        >
                          🤖 Garis Bot (Terblokir)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* =====================================
                   WRAPPER B: PHOTO EVIDENCE GALLERY
                   ===================================== */}
              {rightMode === 'photo' && currentProject.hasPhotos && (
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden border ledger-border bg-[#121212] aspect-video flex items-center justify-center">
                    <img
                      src={currentPhoto?.url}
                      alt={currentPhoto?.caption || 'Foto Bukti Proyek'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src =
                          'https://placehold.co/800x450/121212/F4F1EA?text=Gambar+Belum+Diisi'
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-sm px-3.5 py-2 flex items-center justify-between gap-2 font-mono text-[11px] text-white">
                      <span className="truncate">{currentPhoto?.caption}</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#FF3B00] text-[10px] font-bold shrink-0">
                        {currentPhotoIdx + 1} / {currentProject.photos.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      {currentProject.photos.map((_, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setCurrentPhotoIdx(pIdx)}
                          className={`px-2.5 py-1 rounded border font-mono text-xs transition cursor-pointer ${
                            pIdx === currentPhotoIdx
                              ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-bold'
                              : 'ledger-border surface-card hover:border-[#FF3B00]'
                          }`}
                        >
                          Foto #{pIdx + 1}
                        </button>
                      ))}
                    </div>

                    <label className="cursor-pointer px-2.5 py-1.5 rounded border border-dashed border-[#FF3B00] text-[#FF3B00] hover:bg-[#FF3B00] hover:text-white transition font-mono text-[11px] font-bold inline-flex items-center gap-1">
                      <span>+ Pasang Foto Screenshot</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleUploadProjectPhoto}
                      />
                    </label>
                  </div>

                  <div className="p-2.5 rounded surface-card border ledger-border font-mono text-[11px] text-secondary-tone flex items-center justify-between">
                    <span>💡 Foto yang kamu upload di atas otomatis tersimpan ke memori browser &amp; web.</span>
                    <button
                      onClick={openAdmin}
                      className="text-[#FF3B00] font-bold hover:underline cursor-pointer"
                    >
                      Buka Panel Admin &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Hardware Assurance Note */}
            <div className="mt-4 pt-3 border-t ledger-border flex items-center justify-between font-mono text-[11px] text-secondary-tone">
              <span>✔ DIUJI DI PERANGKAT FISIK</span>
              <span>{rightMode === 'sim' ? 'MODE: SIMULATOR AKTIF' : 'MODE: BUKTI FOTO PROYEK'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
