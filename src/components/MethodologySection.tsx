import React from 'react'

export const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-12 sm:py-14 border-b ledger-border">
      <div className="max-w-3xl mb-8">
        <div className="font-mono text-xs text-[#FF3B00] font-bold tracking-widest uppercase mb-1.5">
          // 04. CARA KERJA &amp; STANDAR KUALITAS
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
          Eksekusi Cepat dengan Armada AI, Dikunci Ketat oleh Audit Arsitek
        </h2>
      </div>

      {/* 3-Stage Architectural Blueprint Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <article className="surface-card border ledger-border rounded-lg p-5">
          <div className="font-mono text-xs font-bold text-[#FF3B00] mb-2">01 // RISET &amp; ARSITEKTUR</div>
          <h3 className="font-display font-bold text-lg mb-1.5">Pahami Alur &amp; Tutup Celah</h3>
          <p className="text-xs sm:text-sm text-secondary-tone leading-relaxed">
            Mempelajari cepat aturan main bisnis Anda dan mengunci potensi kebocoran kas/data sebelum kode ditulis.
          </p>
        </article>

        <article className="surface-card border ledger-border rounded-lg p-5">
          <div className="font-mono text-xs font-bold text-[#FF3B00] mb-2">02 // ORKESTRASI AI</div>
          <h3 className="font-display font-bold text-lg mb-1.5">Eksekusi Lintas Teknologi</h3>
          <p className="text-xs sm:text-sm text-secondary-tone leading-relaxed">
            Mengomandoi armada AI untuk membangun modul sistem maupun alur otomasi cerdas dalam hitungan hari.
          </p>
        </article>

        <article className="surface-card border ledger-border rounded-lg p-5">
          <div className="font-mono text-xs font-bold text-[#FF3B00] mb-2">03 // UJI LAPANGAN</div>
          <h3 className="font-display font-bold text-lg mb-1.5">Audit Ketat &amp; Uji Hardware</h3>
          <p className="text-xs sm:text-sm text-secondary-tone leading-relaxed">
            Setiap baris kode diuji terhadap skenario error, offline, hingga pengetesan langsung di perangkat keras fisik.
          </p>
        </article>
      </div>

      {/* Comparative Ledger Table */}
      <div className="surface-card border ledger-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b ledger-border font-mono text-xs uppercase surface-muted">
                <th className="p-3.5 border-r ledger-border">Parameter</th>
                <th className="p-3.5 border-r ledger-border text-secondary-tone">Developer Manual Biasa</th>
                <th className="p-3.5 border-r ledger-border text-secondary-tone">"Vibe Coder" Tanpa Audit</th>
                <th className="p-3.5 bg-[#FF3B00]/10 font-bold text-[#FF3B00]">
                  Zaky Irhab (AI-Orchestrated Architect)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y ledger-border">
              <tr>
                <td className="p-3.5 font-mono text-xs font-bold border-r ledger-border">Kecepatan Rilis</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">2 – 4 Bulan</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">Cepat tapi rapuh di produksi</td>
                <td className="p-3.5 font-semibold text-[#FF3B00]">Hitungan Hari &amp; Siap Produksi</td>
              </tr>
              <tr>
                <td className="p-3.5 font-mono text-xs font-bold border-r ledger-border">Keamanan Kas &amp; Data</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">Sering luput race-condition</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">Rawan tembus &amp; saldo minus</td>
                <td className="p-3.5 font-semibold">Atomic Locking &amp; Guardrail Ketat</td>
              </tr>
              <tr>
                <td className="p-3.5 font-mono text-xs font-bold border-r ledger-border">Uji Perangkat Fisik</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">Hanya simulator laptop</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">Tidak pernah tes hardware</td>
                <td className="p-3.5 font-semibold">Dites langsung di Printer &amp; HP Fisik</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
