import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'

export const FooterSection: React.FC = () => {
  const { profile, openAdmin, t } = usePortfolio()

  return (
    <footer className="border-t ledger-border surface-card mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
        <div className="border-2 border-[#121212] dark:border-sky-500/40 rounded-lg p-6 sm:p-8 surface-muted flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#FF3B00] text-white font-bold">
              {t.footer.badge}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
              {t.footer.title}
            </h2>
            <p className="text-xs sm:text-sm text-secondary-tone">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0 font-mono text-xs">
            <a
              href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-safety py-3.5 px-6 rounded font-bold text-center flex-1 lg:flex-initial"
            >
              {t.footer.ctaWa}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="py-3.5 px-4 rounded border ledger-border surface-card hover:border-[#FF3B00] font-semibold transition"
            >
              {t.footer.ctaEmail}
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded border ledger-border surface-card hover:border-[#FF3B00] font-semibold transition"
            >
              {t.footer.ctaGithub}
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t ledger-border flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-secondary-tone">
          <div>&copy; {new Date().getFullYear()} {profile.fullName} &mdash; {profile.brandTitle}.</div>
          <div className="flex items-center gap-4">
            <span>{t.footer.tagline}</span>
            <button
              onClick={openAdmin}
              className="hover:text-[#FF3B00] font-bold transition flex items-center gap-1 cursor-pointer"
              title="Akses Panel Admin (PIN Protected)"
            >
              <span>[ {t.footer.adminPanel} ]</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
