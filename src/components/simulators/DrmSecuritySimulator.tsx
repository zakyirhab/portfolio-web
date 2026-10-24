import React, { useState } from 'react'

export const DrmSecuritySimulator: React.FC = () => {
  const [drmSlot2, setDrmSlot2] = useState<'empty' | 'active'>('empty')
  const [drmSlot3, setDrmSlot3] = useState<'standby' | 'blocked'>('standby')
  const [drmLog, setDrmLog] = useState<string>(
    '> [STREAM] Render Hal 142/245 ke Canvas (Tanpa File PDF Asli).'
  )

  const handleSimDrm = (action: 'login_dev2' | 'login_dev3' | 'reset') => {
    if (action === 'login_dev2') {
      setDrmSlot2('active')
      setDrmSlot3('standby')
      setDrmLog(
        '> [AUTH OK] Perangkat #2 (iPad Pro) terotorisasi. Kuota lisensi terisi penuh (2/2).'
      )
    } else if (action === 'login_dev3') {
      if (drmSlot2 === 'empty') {
        setDrmLog('> [INFO] Silakan klik login Perangkat #2 terlebih dahulu untuk menguji batas kuota.')
      } else {
        setDrmSlot3('blocked')
        setDrmLog(
          '> [SECURITY REJECT] PostgreSQL Lock: Kuota 2 perangkat habis! Akses diblokir otomatis.'
        )
      }
    } else if (action === 'reset') {
      setDrmSlot2('empty')
      setDrmSlot3('standby')
      setDrmLog('> [SYSTEM RESET] Kuota lisensi di-refresh. Perangkat #2 dilepas (1/2 aktif).')
    }
  }

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="space-y-2">
        <div className="p-3 rounded-lg bg-[#141416] border border-emerald-500/50 flex items-center justify-between text-white">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Perangkat #1: MacBook Air (Akun Utama)</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
            AKTIF (1/2)
          </span>
        </div>

        <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A] flex items-center justify-between text-white">
          <span className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                drmSlot2 === 'active' ? 'bg-emerald-500' : 'bg-neutral-600'
              }`}
            />
            <span>
              {drmSlot2 === 'active' ? 'Perangkat #2: iPad Pro (Karyawan)' : 'Slot Perangkat #2: [KOSONG]'}
            </span>
          </span>
          <span
            className={`px-2 py-0.5 rounded font-bold text-[10px] ${
              drmSlot2 === 'active'
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-neutral-800 text-neutral-400'
            }`}
          >
            {drmSlot2 === 'active' ? 'AKTIF (2/2)' : 'TERSEDIA'}
          </span>
        </div>

        <div
          className={`p-3 rounded-lg border transition ${
            drmSlot3 === 'blocked'
              ? 'bg-red-950/30 border-red-500 text-red-300'
              : 'bg-[#141416] border-[#27272A] text-neutral-400'
          } flex items-center justify-between`}
        >
          <span className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                drmSlot3 === 'blocked' ? 'bg-red-500 animate-ping' : 'bg-neutral-600'
              }`}
            />
            <span>Perangkat #3: Laptop Orang Lain (Coba Patungan)</span>
          </span>
          <span
            className={`px-2 py-0.5 rounded font-bold text-[10px] ${
              drmSlot3 === 'blocked'
                ? 'bg-red-500 text-white'
                : 'bg-neutral-800 text-neutral-400'
            }`}
          >
            {drmSlot3 === 'blocked' ? 'BLOCKED' : 'STANDBY'}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleSimDrm('login_dev2')}
          className="flex-1 py-2 px-3 rounded bg-[#18181B] border border-[#27272A] hover:border-[#FF3B00] text-white font-semibold transition cursor-pointer"
        >
          + Login Perangkat #2
        </button>
        <button
          onClick={() => handleSimDrm('login_dev3')}
          className="flex-1 py-2 px-3 rounded bg-red-950/30 border border-red-500/50 text-red-400 hover:bg-red-900/50 font-semibold transition cursor-pointer"
        >
          ! Paksa Login Perangkat #3
        </button>
        <button
          onClick={() => handleSimDrm('reset')}
          className="py-2 px-3 rounded bg-[#27272A] text-white hover:bg-[#3F3F46] font-semibold transition cursor-pointer"
        >
          Reset
        </button>
      </div>

      <div className="p-3.5 rounded-lg bg-black text-emerald-400 font-mono text-[11px] border border-[#27272A] space-y-1">
        <div className="text-[10px] text-neutral-500 flex justify-between">
          <span>POSTGRESQL AUDIT TRAIL LOG</span>
          <span>SELECT FOR UPDATE</span>
        </div>
        <div className="leading-snug">{drmLog}</div>
      </div>
    </div>
  )
}
