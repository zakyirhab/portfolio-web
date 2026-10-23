import { Compass } from '@phosphor-icons/react'

export const ForemanFramework: React.FC = () => {
  return (
    <section id="foreman-framework" className="py-20 md:py-28 border-b border-gray-900 bg-gray-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-900 border border-gray-800 text-emerald-400 text-xs font-mono mb-4">
            <Compass size={16} />
            <span>THE FOREMAN METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Mengapa bermitra dengan "Mandor AI" menguntungkan bisnis Anda?
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Developer konvensional butuh 3 bulan mengetik kode manual dari nol, sementara non-teknikal yang asal pakai AI menghasilkan sistem rapuh penuh bug. Saya mengambil titik tengah terbaik: arsitektur sistem level senior yang dikerjakan secepat kilat oleh AI di bawah pengawasan ketat.
          </p>
        </div>

        {/* 3-Step Production Pipeline (Asymmetrical Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1: Arsitektur Bisnis */}
          <div className="liquid-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. SAYA: Desain Logika &amp; Celah Risiko
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Sebelum menulis satu baris pun kode, saya mengaudit alur bisnis Anda: di mana potensi kebocoran uang kasir? Bagaimana kalau koneksi internet mati? Bagaimana sistem mencegah pembajakan file lisensi?
              </p>
            </div>

            <div className="pt-4 border-t border-gray-800 text-xs font-mono text-gray-400 space-y-2">
              <div className="text-emerald-400 font-medium">Output Tahap 1:</div>
              <div>&bull; State diagram pergantian shift</div>
              <div>&bull; Skema database relasional &amp; lock</div>
              <div>&bull; Protokol mitigasi kegagalan hardware</div>
            </div>
          </div>

          {/* Step 2: Eksekusi Kilat AI */}
          <div className="liquid-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2. AI: Eksekusi Sintaks Kecepatan Penuh
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Saya memberikan spesifikasi arsitektur yang sangat terukur kepada model AI canggih. AI menulis ribuan baris sintaks Kotlin, React, SQL Stored Procedure, dan Python dalam hitungan jam &mdash; bukan berminggu-minggu.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-800 text-xs font-mono text-gray-400 space-y-2">
              <div className="text-sky-400 font-medium">Output Tahap 2:</div>
              <div>&bull; 10x percepatan siklus pengerjaan</div>
              <div>&bull; Modul UI responsif &amp; modern</div>
              <div>&bull; Handler API &amp; query database terstruktur</div>
            </div>
          </div>

          {/* Step 3: Mandor Quality Gatekeeper */}
          <div className="liquid-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3. SAYA: Mandor &amp; Uji Hardware Riil
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                AI sering kali berhalusinasi atau abai terhadap kondisi dunia nyata. Tugas saya menolak kode yang cacat, menyambungkan kabel printer thermal, menguji di HP Android fisik, dan memastikan sistem tahan banting.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-800 text-xs font-mono text-gray-400 space-y-2">
              <div className="text-purple-400 font-medium">Output Tahap 3:</div>
              <div>&bull; Zero race-condition di database</div>
              <div>&bull; Uji cetak kertas printer fisik lolos</div>
              <div>&bull; Garansi sistem jalan tanpa alibi teknis</div>
            </div>
          </div>

        </div>

        {/* Realistic Comparison Table */}
        <div className="mt-16 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 sm:p-8 backdrop-blur-md">
          <h3 className="text-lg font-semibold text-white mb-6">Perbandingan Nilai Nyata untuk Bisnis</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400 font-mono">
                  <th className="pb-3 font-medium">Parameter</th>
                  <th className="pb-3 font-medium">Developer Tradisional / Agensi</th>
                  <th className="pb-3 font-medium text-emerald-400">Bermitra dengan Saya (Mandor AI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 text-gray-300">
                <tr>
                  <td className="py-4 font-medium text-white">Waktu Delivery</td>
                  <td className="py-4 text-gray-400">1 – 3 Bulan (Banyak rapat &amp; ngetik lambat)</td>
                  <td className="py-4 text-emerald-300 font-medium">3 – 10 Hari (Sistem siap uji coba)</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Struktur Biaya</td>
                  <td className="py-4 text-gray-400">Tinggi (Membayar gaji tim &amp; jam kerja lama)</td>
                  <td className="py-4 text-emerald-300 font-medium">Sangat Rasional (Hanya bayar hasil akhir fungsional)</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Ketahanan di Lapangan</td>
                  <td className="py-4 text-gray-400">Sering rusak saat koneksi drop atau printer mati</td>
                  <td className="py-4 text-emerald-300 font-medium">Dirancang dari awal untuk hardware toko &amp; offline-safe</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Kejujuran Teknis</td>
                  <td className="py-4 text-gray-400">Sering memakai istilah rumit untuk menutupi keterlambatan</td>
                  <td className="py-4 text-emerald-300 font-medium">100% Terbuka: Fokus solusi bisnis, bukan pamer sintaks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
