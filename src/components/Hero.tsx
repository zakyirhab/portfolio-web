import { ArrowDown, ChatTeardropDots, CheckSquareOffset, HardHat, TerminalWindow } from '@phosphor-icons/react'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-gray-900">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Asymmetrical Title & Statement */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 border border-gray-800 text-gray-300 text-xs font-mono w-fit">
              <HardHat size={16} className="text-amber-400" weight="fill" />
              <span>AI-ORCHESTRATED SYSTEM ARCHITECT & FOREMAN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Membangun sistem digital produksi nyata.
              <span className="block text-gray-400 font-normal mt-2 text-2xl sm:text-4xl">
                Dimandori dengan ketat, ditenagai kecepatan AI modern.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Saya tidak menjual jam mengetik sintaks manual. Saya adalah arsitek sistem yang memetakan logika bisnis, risiko kecurangan arus kas, dan celah keamanan &mdash; lalu mengendalikan armada AI untuk mengeksekusi kode secara presisi dan teruji di hardware riil.
            </p>

            {/* Direct Conversion Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/6282236358872?text=Halo%20Zaky,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20sistem."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-gray-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_24px_rgba(16,185,129,0.25)] active:scale-98"
              >
                <ChatTeardropDots size={18} weight="bold" />
                <span>Konsultasi WhatsApp Langsung</span>
              </a>

              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-200 font-medium text-sm hover:bg-gray-800 hover:text-white transition-all active:scale-98"
              >
                <span>Lihat Sistem yang Sudah Jalan</span>
                <ArrowDown size={16} weight="bold" />
              </a>
            </div>

            {/* Quick Transparent Credibility Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-800/80 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckSquareOffset size={16} className="text-emerald-400" />
                <span>0% Bohong Skillset</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquareOffset size={16} className="text-emerald-400" />
                <span>Uji di Hardware Nyata</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquareOffset size={16} className="text-emerald-400" />
                <span>Rilis Hari, Bukan Bulan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal "Foreman Mindset" Box */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 backdrop-blur-xl shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <TerminalWindow size={16} className="text-emerald-400" />
                  <span>zaky@system-foreman:~</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
              </div>

              <div className="py-4 space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <p className="text-emerald-400 font-semibold">$ foreman --inspect-workflow</p>
                  <p className="text-gray-300">
                    [ANALYSIS] Identifikasi celah bisnis kasir toko fisik &amp; DRM lisensi.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-gray-950/80 border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>Role Breakdown</span>
                    <span className="text-emerald-400">100% Operational Transparency</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between items-center text-gray-300">
                      <span>Zaky (Mandor / Arsitek)</span>
                      <span className="text-gray-400">Logika, Security, Hardware, Edge-Cases</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-full" />
                    </div>
                    <div className="flex justify-between items-center text-gray-300 pt-1">
                      <span>AI (Orchestrated Workers)</span>
                      <span className="text-gray-400">Rapid Code Syntax Generation</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-sky-500 h-1.5 rounded-full w-full" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-emerald-400 font-semibold">$ foreman --verify-gate</p>
                  <p className="text-gray-300">
                    [PASS] Bluetooth ESC/POS printer thermal: CONNECTED
                  </p>
                  <p className="text-gray-300">
                    [PASS] Supabase atomic 2-device RPC lock: VERIFIED
                  </p>
                  <p className="text-gray-300">
                    [PASS] NLP text normalization pipeline: CLEAN
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-400 border-t border-gray-800">
                  <span>Status: Production Stable</span>
                  <span className="text-emerald-400 font-semibold">Zero-Bulls**t Guarantee</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
