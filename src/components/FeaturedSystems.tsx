import { useState } from 'react'
import { PROJECTS, type ProjectDetail } from '../data/projects'
import {
  ShieldCheck,
  Printer,
  FilePdf,
  ChatCircleText,
  DeviceMobile,
  ArrowRight,
  X,
  CheckCircle,
  HardHat,
  Cpu,
  LockKey
} from '@phosphor-icons/react'

export const FeaturedSystems: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  const getIcon = (id: string) => {
    switch (id) {
      case 'cahaya-plastik':
        return <Printer size={24} className="text-emerald-400" />
      case 'katalog-restorasi':
        return <FilePdf size={24} className="text-sky-400" />
      case 'nlp-sentiment-engine':
        return <ChatCircleText size={24} className="text-purple-400" />
      case 'instahuman-adb':
        return <DeviceMobile size={24} className="text-amber-400" />
      default:
        return <Cpu size={24} className="text-emerald-400" />
    }
  }

  const getBadgeClass = (color: ProjectDetail['statusColor']) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
      case 'sky':
        return 'bg-sky-500/10 border-sky-500/30 text-sky-400'
      case 'purple':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-400'
      case 'amber':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
    }
  }

  return (
    <section id="systems" className="py-20 md:py-28 border-b border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-900 border border-gray-800 text-emerald-400 text-xs font-mono mb-4">
              <ShieldCheck size={16} />
              <span>PROVEN PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Sistem nyata yang telah selesai dan bekerja di lapangan.
            </h2>
            <p className="mt-3 text-base text-gray-400">
              Setiap proyek memecahkan problem operasional nyata: mulai dari uang kas fisik di toko, perlindungan hak cipta digital, hingga pengolahan sentimen data besar.
            </p>
          </div>
          <div className="text-xs font-mono text-gray-500 border-l border-gray-800 pl-4 py-1">
            <span>KLIK KARTU UNTUK AUDIT DETAIL</span>
            <br />
            <span>ROLE MANDOR VS ROLE AI</span>
          </div>
        </div>

        {/* 2-Column Asymmetric High-Density Grid (Anti 3-Card Slop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="liquid-card rounded-3xl p-6 sm:p-8 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header: Tag + Status */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-mono mt-0.5 ${getBadgeClass(project.statusColor)}`}>
                        {project.statusBadge}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Problem & Impact Snippet */}
                <div className="mt-6 p-4 rounded-xl bg-gray-950/70 border border-gray-800/80 space-y-2 text-xs">
                  <div>
                    <span className="text-gray-400 font-mono font-medium">Problem: </span>
                    <span className="text-gray-300">{project.businessProblem}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-mono font-medium">Impact: </span>
                    <span className="text-gray-200">{project.metricsOrImpact}</span>
                  </div>
                </div>
              </div>

              {/* Footer: Tech Stack Tags */}
              <div className="mt-6 pt-4 border-t border-gray-800/80 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-[11px] font-mono text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Architectural Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/80 backdrop-blur-md">
          <div
            className="w-full max-w-3xl max-h-[90dvh] overflow-y-auto rounded-3xl bg-gray-900 border border-gray-800 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <X size={20} weight="bold" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full border text-xs font-mono ${getBadgeClass(selectedProject.statusColor)}`}>
                {selectedProject.statusBadge}
              </span>
              <span className="text-xs font-mono text-gray-500">{selectedProject.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{selectedProject.subtitle}</p>

            {selectedProject.confidentialNotice && (
              <div className="mb-6 p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-2">
                <LockKey size={18} />
                <span>{selectedProject.confidentialNotice}</span>
              </div>
            )}

            {/* The Foreman vs AI Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gray-950 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2">
                  <HardHat size={16} />
                  <span>PERAN SAYA (MANDOR SISTEM)</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedProject.foremanRole}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-950 border border-sky-500/20">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold mb-2">
                  <Cpu size={16} />
                  <span>PERAN AI (KODING KILAT)</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedProject.aiRole}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3 font-mono">
                Highlight Arsitektur Teknis &amp; Pencegahan Bug:
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {selectedProject.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact & Actions */}
            <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400">
                <span className="font-mono text-white font-medium">Hasil Nyata: </span>
                {selectedProject.metricsOrImpact}
              </div>

              <a
                href={`https://wa.me/6282236358872?text=Halo%20Zaky,%20saya%20tertarik%20dengan%20arsitektur%20sistem%20${encodeURIComponent(selectedProject.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 text-gray-950 font-semibold text-xs tracking-tight hover:bg-emerald-400 transition-all text-center"
              >
                Tanyakan Sistem Serupa
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
