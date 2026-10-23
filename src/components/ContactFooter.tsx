import {
  ChatTeardropDots,
  EnvelopeSimple,
  GithubLogo,
  ArrowUpRight,
  ShieldCheck
} from '@phosphor-icons/react'

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="py-20 md:py-28 relative bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner */}
        <div className="rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-950 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              DISKUSI TERBUKA &bull; ZERO PRETEXT
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Punya masalah operasional toko atau butuh sistem kustom yang cepat dan handal?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              Ceritakan alur bisnis Anda. Saya akan menganalisis celah risikonya dan menyiapkan arsitektur sistem yang siap dibangun bersama AI dalam hitungan hari.
            </p>

            {/* Direct Contact CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="https://wa.me/6282236358872?text=Halo%20Zaky,%20saya%20ingin%20berdiskusi%20tentang%20pembuatan%20sistem."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-gray-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_24px_rgba(16,185,129,0.3)] active:scale-95"
              >
                <ChatTeardropDots size={20} weight="bold" />
                <span>WhatsApp: +62 822-3635-8872</span>
              </a>

              <a
                href="mailto:zakyirhab09@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all active:scale-95"
              >
                <EnvelopeSimple size={20} />
                <span>Email Langsung</span>
              </a>

              <a
                href="https://github.com/zakyirhab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all active:scale-95"
              >
                <GithubLogo size={20} />
                <span>GitHub (@zakyirhab)</span>
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-800/80 flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Transparansi 100%: Pembayaran berbasis milestone fungsional &amp; garansi operasional.</span>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} Zaky Irhab &bull; zakyirhab.it.com
          </div>
          <div className="flex items-center gap-6">
            <span>Orchestrated with AI, Built with Conviction</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Back to top &uarr;</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
