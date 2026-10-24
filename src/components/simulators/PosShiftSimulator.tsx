import React, { useState } from 'react'

export const PosShiftSimulator: React.FC = () => {
  const [posStock, setPosStock] = useState<number>(5)
  const [posCash, setPosCash] = useState<number>(450000)
  const [posReceiptStatus, setPosReceiptStatus] = useState<string>('READY')
  const [posLog, setPosLog] = useState<{ type: string; content: React.ReactNode } | null>(null)

  const handleSimPos = (action: 'normal' | 'minus' | 'close_shift') => {
    if (action === 'normal') {
      if (posStock >= 2) {
        setPosStock((prev) => prev - 2)
        setPosCash((prev) => prev + 30000)
        setPosReceiptStatus('PRINTED')
        setPosLog({
          type: 'success',
          content: (
            <div className="space-y-0.5">
              <div className="flex justify-between font-bold text-emerald-600 dark:text-emerald-400">
                <span>[TX_OK] 2x PLASTIK HD 15x30</span>
                <span>Rp 30.000</span>
              </div>
              <div className="text-[10px] text-stone-500">PAYMENT: DYNAMIC QRIS (NMID: ID102938)</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                &gt; STOK DIPOTONG OTOMATIS: SISA {posStock - 2} PACK
              </div>
            </div>
          )
        })
      } else {
        setPosLog({
          type: 'error',
          content: (
            <div className="text-red-500 font-bold">
              [BLOCKED] Stok menipis! Tidak cukup untuk 2 Pack.
            </div>
          )
        })
      }
    } else if (action === 'minus') {
      setPosReceiptStatus('BLOCKED')
      setPosLog({
        type: 'error',
        content: (
          <div className="space-y-0.5 text-red-500 font-bold">
            <div>[GUARDRAIL TRIGGERED] TRANSAKSI DITOLAK KERAS!</div>
            <div className="text-[10px] text-red-400 font-normal">
              Permintaan: 10 Pack | Stok Fisik: {posStock} Pack.
            </div>
            <div className="text-[10px] text-stone-600 dark:text-stone-300">
              Cegah selisih pembukuan di akhir bulan.
            </div>
          </div>
        )
      })
    } else if (action === 'close_shift') {
      setPosReceiptStatus('SHIFT_LOCKED')
      setPosLog({
        type: 'shift',
        content: (
          <div className="space-y-0.5 border-t border-stone-300 pt-1 font-mono text-xs">
            <div className="font-bold text-center text-[#FF3B00]">=== LAPORAN SHIFT CLOSING ===</div>
            <div className="flex justify-between">
              <span>TOTAL UANG FISIK DI LACI:</span>
              <span className="font-bold">Rp {posCash.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-emerald-600 font-bold">
              <span>STATUS AUDIT SHIFT:</span>
              <span>BALANCE [MATCH]</span>
            </div>
            <div className="text-[10px] text-stone-500 text-center mt-1">
              *** SHIFT DIKUNCI — SILAKAN OPER KE KASIR BERIKUTNYA ***
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A]">
          <span className="text-[10px] text-[#71717A] block">STOK PLASTIK HD</span>
          <span className="text-base font-bold text-white">{posStock} Pack</span>
        </div>
        <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A]">
          <span className="text-[10px] text-[#71717A] block">SALDO KAS SHIFT</span>
          <span className="text-base font-bold text-emerald-400">
            Rp {posCash.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleSimPos('normal')}
          className="flex-1 py-2 px-3 rounded bg-[#18181B] border border-[#27272A] hover:border-[#FF3B00] text-white font-semibold transition cursor-pointer"
        >
          + Jual 2 Pack (QRIS)
        </button>
        <button
          onClick={() => handleSimPos('minus')}
          className="flex-1 py-2 px-3 rounded bg-red-950/30 border border-red-500/50 text-red-400 hover:bg-red-900/50 font-semibold transition cursor-pointer"
        >
          ! Paksa Jual 10 Pack
        </button>
        <button
          onClick={() => handleSimPos('close_shift')}
          className="w-full py-2.5 px-3 rounded bg-[#FF3B00] hover:bg-[#E03400] text-white font-bold transition cursor-pointer shadow-[0_0_15px_rgba(255,59,0,0.3)]"
        >
          [LOCK] Atomic Shift Closing &amp; Cetak Struk
        </button>
      </div>

      <div className="bg-[#FAF8F5] text-[#121212] p-4 rounded-lg shadow-inner border border-neutral-300 font-mono text-[11px] leading-snug">
        <div className="text-center border-b border-dashed border-neutral-400 pb-2 mb-2 font-bold">
          TOKO CAHAYA PLASTIK — ESC/POS 58mm
        </div>
        <div className="space-y-1 min-h-[75px]">
          {posLog ? (
            posLog.content
          ) : (
            <>
              <div className="flex justify-between">
                <span>SHIFT #02 (ATOMIC LOCK)</span>
                <span className="font-bold text-emerald-700">AKTIF</span>
              </div>
              <div className="flex justify-between">
                <span>GUARD ANTI-MINUS:</span>
                <span className="font-bold text-emerald-700">ON</span>
              </div>
              <div className="text-neutral-500 mt-1">&gt; Siap menerima transaksi...</div>
            </>
          )}
        </div>
        <div className="border-t border-dashed border-neutral-400 pt-2 mt-2 flex justify-between text-[10px] text-neutral-500">
          <span>CRC32: 9F8A</span>
          <span className="font-bold uppercase">{posReceiptStatus}</span>
        </div>
      </div>
    </div>
  )
}
