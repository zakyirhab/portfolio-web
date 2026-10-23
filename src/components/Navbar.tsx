import { Cpu, ArrowUpRight } from '@phosphor-icons/react'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-gray-950/80 border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/60 transition-colors">
            <Cpu size={18} weight="bold" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-100 tracking-tight text-sm">Zaky Irhab</span>
            <span className="text-[11px] font-mono text-gray-400">zakyirhab.it.com</span>
          </div>
        </a>

        {/* Live Availability Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Freelance & Custom Builds</span>
        </div>

        {/* Navigation & Action */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-6 text-xs text-gray-300 font-medium">
            <a href="#systems" className="hover:text-emerald-400 transition-colors">Featured Systems</a>
            <a href="#foreman-framework" className="hover:text-emerald-400 transition-colors">How I Work</a>
            <a href="#capabilities" className="hover:text-emerald-400 transition-colors">Capabilities</a>
          </nav>
          <a
            href="https://wa.me/6282236358872?text=Halo%20Zaky,%20saya%20tertarik%20berdiskusi%20tentang%20kebutuhan%20sistem/aplikasi."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 text-gray-950 font-semibold text-xs tracking-tight hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </header>
  )
}
