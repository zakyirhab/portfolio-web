import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'

export const MethodologySection: React.FC = () => {
  const { t } = usePortfolio()

  return (
    <section id="methodology" className="py-12 sm:py-14 border-b ledger-border">
      <div className="max-w-3xl mb-8">
        <div className="font-mono text-xs text-[#FF3B00] font-bold tracking-widest uppercase mb-1.5">
          {t.methodology.sectionTag}
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
          {t.methodology.title}
        </h2>
      </div>

      {/* 3-Stage Architectural Blueprint Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <article className="surface-card border ledger-border rounded-lg p-5">
          <div className="font-mono text-xs font-bold text-[#FF3B00] mb-2">{t.methodology.card1Tag}</div>
          <h3 className="font-display font-bold text-lg mb-1.5">{t.methodology.card1Title}</h3>
          <p className="text-xs sm:text-sm text-secondary-tone leading-relaxed">
            {t.methodology.card1Desc}
          </p>
        </article>

        <article className="surface-card border ledger-border rounded-lg p-5">
          <div className="font-mono text-xs font-bold text-[#FF3B00] mb-2">{t.methodology.card2Tag}</div>
          <h3 className="font-display font-bold text-lg mb-1.5">{t.methodology.card2Title}</h3>
          <p className="text-xs sm:text-sm text-secondary-tone leading-relaxed">
            {t.methodology.card2Desc}
          </p>
        </article>

        <article className="surface-card border ledger-border rounded-lg p-5">
          <div className="font-mono text-xs font-bold text-[#FF3B00] mb-2">{t.methodology.card3Tag}</div>
          <h3 className="font-display font-bold text-lg mb-1.5">{t.methodology.card3Title}</h3>
          <p className="text-xs sm:text-sm text-secondary-tone leading-relaxed">
            {t.methodology.card3Desc}
          </p>
        </article>
      </div>

      {/* Comparative Ledger Table */}
      <div className="surface-card border ledger-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b ledger-border font-mono text-xs uppercase surface-muted">
                <th className="p-3.5 border-r ledger-border">{t.methodology.tableHeaderParam}</th>
                <th className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.tableHeaderTrad}</th>
                <th className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.tableHeaderVibe}</th>
                <th className="p-3.5 bg-[#FF3B00]/10 font-bold text-[#FF3B00]">
                  {t.methodology.tableHeaderZaky}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y ledger-border">
              <tr>
                <td className="p-3.5 font-mono text-xs font-bold border-r ledger-border">{t.methodology.row1Param}</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.row1Trad}</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.row1Vibe}</td>
                <td className="p-3.5 font-semibold text-[#FF3B00]">{t.methodology.row1Zaky}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-mono text-xs font-bold border-r ledger-border">{t.methodology.row2Param}</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.row2Trad}</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.row2Vibe}</td>
                <td className="p-3.5 font-semibold">{t.methodology.row2Zaky}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-mono text-xs font-bold border-r ledger-border">{t.methodology.row3Param}</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.row3Trad}</td>
                <td className="p-3.5 border-r ledger-border text-secondary-tone">{t.methodology.row3Vibe}</td>
                <td className="p-3.5 font-semibold">{t.methodology.row3Zaky}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
