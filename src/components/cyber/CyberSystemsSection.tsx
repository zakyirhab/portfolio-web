import React, { useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'
import { PosShiftSimulator } from '../simulators/PosShiftSimulator'
import { DrmSecuritySimulator } from '../simulators/DrmSecuritySimulator'
import { NlpSentimentSimulator } from '../simulators/NlpSentimentSimulator'
import { AdbCurveSimulator } from '../simulators/AdbCurveSimulator'

interface CyberSystemsSectionProps {
  activeIndex: number
  onSelectTab: (idx: number) => void
}

export const CyberSystemsSection: React.FC<CyberSystemsSectionProps> = ({
  activeIndex,
  onSelectTab
}) => {
  const { projects, language } = usePortfolio()
  const [viewModes, setViewModes] = useState<Record<string, 'sim' | 'photo'>>({
    pos: 'sim',
    drm: 'sim',
    nlp: 'sim',
    adb: 'sim'
  })
  const [activePhotoIdx, setActivePhotoIdx] = useState<Record<string, number>>({
    pos: 0,
    drm: 0,
    nlp: 0,
    adb: 0
  })

  const toggleViewMode = (id: string, mode: 'sim' | 'photo') => {
    setViewModes((prev) => ({ ...prev, [id]: mode }))
  }

  const renderSimulator = (id: string) => {
    switch (id) {
      case 'pos':
        return <PosShiftSimulator />
      case 'drm':
        return <DrmSecuritySimulator />
      case 'nlp':
        return <NlpSentimentSimulator />
      case 'adb':
        return <AdbCurveSimulator />
      default:
        return null
    }
  }

  return (
    <section id="systems" className="py-12 sm:py-16 border-t border-[#27272A] text-[#EDEDED]">
      {/* Figma Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="font-mono text-xs text-[#71717A] tracking-wider uppercase mb-1">
            02 / SELECTED SYSTEMS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Built to operate.
          </h2>
        </div>
        <div className="font-mono text-xs text-[#A1A1AA] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-ping" />
          <span className="uppercase tracking-wider">INTERACTIVE PROJECT SIMULATORS</span>
        </div>
      </div>

      {/* Tabs / Switcher to pick which project to highlight */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 font-mono text-xs">
        {projects.map((proj, idx) => {
          const isSelected = activeIndex === idx
          return (
            <button
              key={proj.id}
              onClick={() => onSelectTab(idx)}
              className={`p-3 rounded-lg border text-left transition cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-[#FF3B00] bg-[#1C1513] text-white shadow-[0_0_15px_rgba(255,59,0,0.2)]'
                  : 'border-[#27272A] bg-[#111113] text-[#71717A] hover:border-[#3F3F46] hover:text-[#D4D4D8]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-[#71717A] font-bold">0{idx + 1}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-[#FF3B00]' : 'bg-[#3F3F46]'
                  }`}
                />
              </div>
              <span className="font-bold text-xs truncate text-white">{proj.code}</span>
              <span className="text-[11px] truncate mt-0.5">{proj.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active Project Full Card */}
      {(() => {
        const cur = projects[activeIndex] || projects[0]
        const mode = viewModes[cur.id] || 'sim'
        const photoIndex = activePhotoIdx[cur.id] || 0
        const activePhoto = cur.photos && cur.photos[photoIndex]

        return (
          <div className="border border-[#27272A] rounded-xl bg-[#0D0E11] p-6 sm:p-8 shadow-2xl space-y-8">
            {/* Top Bar inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#27272A]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#FF3B00] bg-[#FF3B00]/10 px-2 py-0.5 rounded border border-[#FF3B00]/30">
                    {cur.code}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cur.tags.map((tg, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] text-[#A1A1AA] bg-[#1C1C1F] px-2 py-0.5 rounded border border-[#27272A]"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                  {cur.title}
                </h3>
                <p className="font-mono text-xs text-[#71717A]">{cur.subtitle}</p>
              </div>

              {/* Toggle Simulator vs Photo Documentation */}
              <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                <button
                  onClick={() => toggleViewMode(cur.id, 'sim')}
                  className={`px-3 py-1.5 rounded-md border transition cursor-pointer flex items-center gap-1.5 ${
                    mode === 'sim'
                      ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-bold'
                      : 'border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{language === 'id' ? 'Live Simulator' : 'Live Simulator'}</span>
                </button>

                {cur.hasPhotos && cur.photos && cur.photos.length > 0 && (
                  <button
                    onClick={() => toggleViewMode(cur.id, 'photo')}
                    className={`px-3 py-1.5 rounded-md border transition cursor-pointer flex items-center gap-1.5 ${
                      mode === 'photo'
                        ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-bold'
                        : 'border-[#27272A] bg-[#18181B] text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    <span>{language === 'id' ? 'Bukti Foto Hardware' : 'Photo Proof'}</span>
                    <span className="text-[10px] opacity-80">({cur.photos.length})</span>
                  </button>
                )}
              </div>
            </div>

            {/* Architecture / Division of Labor Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 font-mono text-xs">
                {/* Core Problem solved */}
                <div className="p-4 rounded-lg bg-[#141416] border border-[#27272A] space-y-1">
                  <span className="text-[10px] text-[#FF3B00] uppercase font-bold tracking-wider">
                    {language === 'id' ? 'MASALAH SISTEM UTAMA:' : 'PRIMARY SYSTEM BOTTLENECK:'}
                  </span>
                  <p className="text-white leading-relaxed">{cur.problem}</p>
                </div>

                {/* Mandor vs AI Roles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A] space-y-1">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider block">
                      {language === 'id' ? 'TUGAS MANDOR (ARSITEK):' : 'MY ARCHITECT ROLE:'}
                    </span>
                    <ul className="space-y-1 text-[#A1A1AA] text-[11px] leading-relaxed">
                      {cur.mandorRole.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A] space-y-1">
                    <span className="text-[10px] text-sky-400 uppercase font-bold tracking-wider block">
                      {language === 'id' ? 'TUGAS AI (EKSEKUTOR):' : 'AI FLEET EXECUTION:'}
                    </span>
                    <ul className="space-y-1 text-[#A1A1AA] text-[11px] leading-relaxed">
                      {cur.aiRole.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key features bullets */}
                <div className="p-4 rounded-lg bg-[#141416] border border-[#27272A] space-y-2">
                  <span className="text-[10px] text-[#71717A] uppercase font-bold tracking-wider block">
                    {language === 'id' ? 'GUARDRAILS & ARSITEKTUR KUNCI:' : 'KEY GUARDRAILS & ARCHITECTURE:'}
                  </span>
                  <ul className="space-y-1.5 text-white text-[11px]">
                    {cur.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold shrink-0">[OK]</span>
                        <span>{feat.replace(/^\[OK\]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Interactive Simulator or Photo Proof */}
              <div className="lg:col-span-7">
                {mode === 'sim' ? (
                  <div className="border border-[#27272A] rounded-xl overflow-hidden bg-[#111113] p-1 shadow-inner">
                    <div className="px-3 py-2 border-b border-[#27272A] flex items-center justify-between font-mono text-[11px] text-[#71717A]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-white font-semibold">LIVE REPRODUCIBLE ENGINE</span>
                      </span>
                      <span>SYS://{cur.id.toUpperCase()}</span>
                    </div>
                    <div className="p-3 sm:p-5">{renderSimulator(cur.id)}</div>
                  </div>
                ) : (
                  <div className="border border-[#27272A] rounded-xl overflow-hidden bg-[#111113] p-4 space-y-4">
                    {activePhoto ? (
                      <div className="space-y-3">
                        <div className="rounded-lg overflow-hidden border border-[#27272A] bg-black max-h-[380px] flex items-center justify-center">
                          <img
                            src={activePhoto.url}
                            alt={activePhoto.caption}
                            className="max-h-[380px] w-auto object-contain mx-auto"
                            onError={(e) => {
                              ;(e.target as HTMLImageElement).src =
                                'https://placehold.co/600x400/121212/FF3B00?text=HARDWARE+TEST'
                            }}
                          />
                        </div>
                        <div className="flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
                          <span>{activePhoto.caption}</span>
                          <span className="text-[#71717A]">
                            {photoIndex + 1} / {cur.photos.length}
                          </span>
                        </div>

                        {/* Thumbnails */}
                        {cur.photos.length > 1 && (
                          <div className="flex gap-2 pt-2 border-t border-[#27272A] overflow-x-auto pb-1">
                            {cur.photos.map((ph, pi) => (
                              <button
                                key={pi}
                                onClick={() =>
                                  setActivePhotoIdx((prev) => ({ ...prev, [cur.id]: pi }))
                                }
                                className={`w-16 h-12 rounded border overflow-hidden shrink-0 cursor-pointer transition ${
                                  photoIndex === pi
                                    ? 'border-[#FF3B00] ring-1 ring-[#FF3B00]'
                                    : 'border-[#27272A] opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={ph.url}
                                  alt={ph.caption}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-8 text-center font-mono text-xs text-[#71717A]">
                        {language === 'id'
                          ? 'Tidak ada foto publik untuk sistem ini.'
                          : 'No public photos for this system.'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}
