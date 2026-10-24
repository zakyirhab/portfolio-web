import React, { useEffect, useRef } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

export const Blueprint3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { isBlueprintMode } = usePortfolio()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = width / 2
    let mouseY = height / 2
    let targetMouseX = width / 2
    let targetMouseY = height / 2
    let time = 0

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // 3D Isometric Grid parameters
    const cols = 28
    const rows = 20
    const spacing = 45

    const render = () => {
      time += 0.015
      // Smooth interpolation for mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      ctx.clearRect(0, 0, width, height)

      // Perspective tilt influenced by mouse
      const tiltX = (mouseX / width - 0.5) * 0.35
      const tiltY = (mouseY / height - 0.5) * 0.25

      const originX = width / 2
      const originY = height * 0.42

      // Color scheme based on Light Paper vs Blueprint Dark
      const strokeLine = isBlueprintMode
        ? 'rgba(56, 189, 248, 0.16)'
        : 'rgba(255, 59, 0, 0.12)'
      const strokeSecondary = isBlueprintMode
        ? 'rgba(35, 61, 99, 0.25)'
        : 'rgba(18, 18, 18, 0.05)'
      const nodeFill = isBlueprintMode
        ? 'rgba(255, 85, 34, 0.55)'
        : 'rgba(255, 59, 0, 0.45)'

      // Pre-compute 3D points
      const points: { x: number; y: number; z: number }[][] = []

      for (let r = 0; r < rows; r++) {
        points[r] = []
        for (let c = 0; c < cols; c++) {
          const worldX = (c - cols / 2) * spacing
          const worldZ = (r - rows / 2) * spacing

          // Subtle organic wave equation
          const distFromCenter = Math.sqrt(worldX * worldX + worldZ * worldZ) * 0.008
          const wave =
            Math.sin(distFromCenter * 3 - time) * 22 +
            Math.cos((worldX * 0.02) + time * 0.8) * 12

          // Isometric 3D Projection with tilt
          const isoX = originX + (worldX - worldZ) * Math.cos(Math.PI / 6 + tiltX)
          const isoY =
            originY +
            (worldX + worldZ) * Math.sin(Math.PI / 6 + tiltY) * 0.55 -
            wave

          points[r][c] = { x: isoX, y: isoY, z: wave }
        }
      }

      // Draw Rows lines
      ctx.lineWidth = 1
      for (let r = 0; r < rows; r++) {
        ctx.beginPath()
        ctx.strokeStyle = r % 4 === 0 ? strokeLine : strokeSecondary
        for (let c = 0; c < cols; c++) {
          const p = points[r][c]
          if (c === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        }
        ctx.stroke()
      }

      // Draw Column lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath()
        ctx.strokeStyle = c % 4 === 0 ? strokeLine : strokeSecondary
        for (let r = 0; r < rows; r++) {
          const p = points[r][c]
          if (r === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        }
        ctx.stroke()
      }

      // Draw subtle glowing coordinate nodes on intersections
      for (let r = 0; r < rows; r += 3) {
        for (let c = 0; c < cols; c += 3) {
          const p = points[r][c]
          ctx.fillStyle = nodeFill
          ctx.beginPath()
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [isBlueprintMode])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-300"
    />
  )
}
