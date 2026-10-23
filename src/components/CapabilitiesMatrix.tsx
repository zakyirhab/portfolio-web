import { Terminal } from '@phosphor-icons/react'

export const CapabilitiesMatrix: React.FC = () => {
  const categories = [
    {
      title: 'Mobile & Hardware Integration',
      desc: 'Sistem Android native yang terhubung langsung dengan fisik toko dan operasional lapangan.',
      skills: [
        'Android (Kotlin) Architecture',
        'ESC/POS Thermal Bluetooth Printing',
        'Barcode / QRIS Scanner Integration',
        'Offline-First SQLite / Room DB',
        'Atomic Shift & Cashbook Auditing'
      ]
    },
    {
      title: 'Full-Stack Web & Cloud DRM',
      desc: 'Platform web modern dengan perlindungan lisensi ketat dan biaya infrastruktur hemat.',
      skills: [
        'React 19 & TypeScript & Vite',
        'Supabase (PostgreSQL, RLS, RPC Stored Procedures)',
        'Canvas PDF Streaming (Google Drive Bypass)',
        'Dynamic Forensic Watermarking',
        'Serverless APIs (Vercel & Cloudflare)'
      ]
    },
    {
      title: 'Applied AI & Opinion Listening',
      desc: 'Pipeline data teks untuk mengubah komentar berisik menjadi analisis persepsi objektif.',
      skills: [
        'Python NLP Pipeline',
        'Indonesian Slang & Typo Normalizer',
        'Sentiment Multi-Class Classification',
        'Web Scraping & Social Media Crawling',
        'Bot & Duplicate Comment Filtering'
      ]
    },
    {
      title: 'Device & Workflow Automation',
      desc: 'Orkestrasi otomasi tingkat rendah pada perangkat fisik tanpa terdeteksi bot emulator.',
      skills: [
        'Android Debug Bridge (ADB) Daemon',
        'UIAutomator2 Node Hierarchy Parsing',
        'Humanized Touch Randomization',
        'Automated Workflow Scripting',
        'Fault-Tolerant Reconnect Protocols'
      ]
    }
  ]

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-gray-900 bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-900 border border-gray-800 text-emerald-400 text-xs font-mono mb-4">
            <Terminal size={16} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Spesialisasi arsitektur yang saya kuasai dan mandori.
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Setiap komponen di bawah ini didasarkan pada proyek produksi yang sudah selesai diuji coba &mdash; bukan teori tutorial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="liquid-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-800/80">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
