import React, { useState } from 'react'

interface NlpSample {
  raw: string
  normalized: string
  sentiment: 'POSITIF' | 'NEGATIF' | 'NETRAL'
  score: number
  piiMasked: string
}

export const NlpSentimentSimulator: React.FC = () => {
  const [sampleIdx, setSampleIdx] = useState<number>(0)

  const SAMPLES: NlpSample[] = [
    {
      raw: 'jln rusak parah bgt d dpn ruma pak ahmad no 12 rt03 gamau d benerin cape bgt!',
      normalized:
        'jalan rusak parah sangat di depan rumah pak [MASKED_NAME] no [MASKED_ADDR] tidak mau dibenahi capek sangat',
      sentiment: 'NEGATIF',
      score: 0.94,
      piiMasked: 'Nama warga & alamat disamarkan otomatis demi privasi (UU PDP).'
    },
    {
      raw: 'program beasiswa kmarin mantap bgt gais, adek sy lolos seleksi trims pemda',
      normalized:
        'program beasiswa kemarin mantap sangat teman-teman, adik saya lolos seleksi terima kasih pemda',
      sentiment: 'POSITIF',
      score: 0.89,
      piiMasked: 'Sentimen kepuasan publik terverifikasi tanpa kebocoran data siswa.'
    },
    {
      raw: 'jadwal pelayanan ktp d kelurahan buka jam brp y? infonya gaje di web',
      normalized:
        'jadwal pelayanan ktp di kelurahan buka jam berapa ya? informasinya tidak jelas di web',
      sentiment: 'NETRAL',
      score: 0.61,
      piiMasked: 'Kategori tiket: Permohonan Informasi / Pertanyaan Layanan Umum.'
    }
  ]

  const cur = SAMPLES[sampleIdx]

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="flex gap-2">
        {SAMPLES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSampleIdx(i)}
            className={`flex-1 py-1.5 px-2 rounded border text-center transition cursor-pointer ${
              sampleIdx === i
                ? 'border-[#FF3B00] bg-[#FF3B00] text-white font-bold'
                : 'border-[#27272A] bg-[#141416] text-neutral-400 hover:text-white'
            }`}
          >
            Komentar #{i + 1}
          </button>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A] space-y-1">
        <span className="text-[10px] text-amber-400 font-bold uppercase block">
          1. RAW UNSTRUCTURED MEDSOS SLANG:
        </span>
        <p className="text-neutral-300 italic">"{cur.raw}"</p>
      </div>

      <div className="p-3 rounded-lg bg-[#141416] border border-[#27272A] space-y-1">
        <span className="text-[10px] text-sky-400 font-bold uppercase block">
          2. NORMALIZED INDONESIAN LEXICON &amp; PRIVACY MASKING:
        </span>
        <p className="text-white font-medium">"{cur.normalized}"</p>
      </div>

      <div className="p-3.5 rounded-lg bg-black border border-[#27272A] flex items-center justify-between text-xs">
        <div>
          <span className="text-[10px] text-neutral-500 uppercase block">HASIL KLASIFIKASI:</span>
          <span
            className={`font-bold ${
              cur.sentiment === 'POSITIF'
                ? 'text-emerald-400'
                : cur.sentiment === 'NEGATIF'
                ? 'text-red-400'
                : 'text-amber-400'
            }`}
          >
            {cur.sentiment} (Confidence: {Math.round(cur.score * 100)}%)
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-neutral-500 uppercase block">AUDIT PRIVASI:</span>
          <span className="text-emerald-400 font-bold">[OK] ZERO LEAK</span>
        </div>
      </div>
      <div className="text-[11px] text-neutral-500 italic text-right">// {cur.piiMasked}</div>
    </div>
  )
}
