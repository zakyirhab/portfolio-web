import React, { useRef, useState, useEffect } from 'react'

export const AdbCurveSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [telemetry, setTelemetry] = useState<{ text: string; safe: boolean }>({
    text: 'KURVA BEZIER MANUSIA (ADB FISIK) — AMAN / NATURAL',
    safe: true
  })

  const drawCurve = (mode: 'human' | 'bot') => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
    ctx.lineWidth = 1
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    if (mode === 'human') {
      // Human Bezier with natural jitter
      ctx.beginPath()
      ctx.strokeStyle = '#10B981'
      ctx.lineWidth = 2.5
      ctx.moveTo(30, 130)
      ctx.bezierCurveTo(90, 20 + Math.random() * 15, 220, 160 + Math.random() * 20, 280, 40)
      ctx.stroke()

      // Control points
      ctx.fillStyle = '#10B981'
      ctx.beginPath()
      ctx.arc(30, 130, 4, 0, Math.PI * 2)
      ctx.arc(280, 40, 4, 0, Math.PI * 2)
      ctx.fill()

      setTelemetry({
        text: 'KURVA BEZIER MANUSIA (ADB FISIK) — AMAN / NATURAL (Variasi sentuhan teracak)',
        safe: true
      })
    } else {
      // Linear rigid bot line
      ctx.beginPath()
      ctx.strokeStyle = '#EF4444'
      ctx.lineWidth = 2
      ctx.moveTo(30, 130)
      ctx.lineTo(280, 40)
      ctx.stroke()

      ctx.fillStyle = '#EF4444'
      ctx.beginPath()
      ctx.arc(30, 130, 4, 0, Math.PI * 2)
      ctx.arc(280, 40, 4, 0, Math.PI * 2)
      ctx.fill()

      setTelemetry({
        text: 'GARIS LURUS KAKU (BOT DETECTED) — 100% TERDETEKSI & RAWAN BANNED!',
        safe: false
      })
    }
  }

  useEffect(() => {
    drawCurve('human')
  }, [])

  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex gap-2">
        <button
          onClick={() => drawCurve('human')}
          className="flex-1 py-2 px-3 rounded bg-[#18181B] border border-emerald-500/50 hover:bg-emerald-950/30 text-emerald-400 font-bold transition cursor-pointer"
        >
          Uji Kurva Bezier (Human)
        </button>
        <button
          onClick={() => drawCurve('bot')}
          className="flex-1 py-2 px-3 rounded bg-[#18181B] border border-red-500/50 hover:bg-red-950/30 text-red-400 font-bold transition cursor-pointer"
        >
          Bandingkan Bot Lurus (Rigid)
        </button>
      </div>

      <div className="p-2 rounded-lg bg-black border border-[#27272A] flex justify-center">
        <canvas
          ref={canvasRef}
          width={310}
          height={160}
          className="w-full max-w-[310px] h-[160px] block"
        />
      </div>

      <div
        className={`p-2.5 rounded-lg border text-[11px] leading-snug ${
          telemetry.safe
            ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
            : 'bg-red-950/20 border-red-500/40 text-red-300'
        }`}
      >
        <span className="font-bold">{telemetry.text}</span>
      </div>
    </div>
  )
}
