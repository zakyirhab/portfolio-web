import React, { useEffect, useState } from 'react'

interface InteractiveCursorBackgroundProps {
  isCyberMode?: boolean
}

export const InteractiveCursorBackground: React.FC<InteractiveCursorBackgroundProps> = ({
  isCyberMode = false
}) => {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [dotPos, setDotPos] = useState({ x: -200, y: -200 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let animId: number
    let targetX = -200
    let targetY = -200
    let currentX = -200
    let currentY = -200

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setDotPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (target) {
        const isClickable =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.hasAttribute('role') ||
          window.getComputedStyle(target).cursor === 'pointer'
        setIsPointer(!!isClickable)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animate = () => {
      // Smooth lerp for glow halo
      currentX += (targetX - currentX) * 0.14
      currentY += (targetY - currentY) * 0.14
      setPos({ x: currentX, y: currentY })
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [isVisible])

  // Don't display custom cursor on touch/mobile devices
  return (
    <>
      {/* Dynamic Cursor Light Glow that follows mouse in background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="absolute rounded-full transition-transform duration-75 ease-out blur-3xl"
          style={{
            transform: `translate3d(${pos.x - 220}px, ${pos.y - 220}px, 0)`,
            width: '440px',
            height: '440px',
            background: isCyberMode
              ? 'radial-gradient(circle, rgba(255, 59, 0, 0.12) 0%, rgba(255, 107, 0, 0.05) 45%, transparent 75%)'
              : 'radial-gradient(circle, rgba(255, 59, 0, 0.08) 0%, rgba(30, 58, 138, 0.04) 50%, transparent 75%)',
            willChange: 'transform'
          }}
        />
      </div>

      {/* Cyber Thematic Custom Cursor */}
      {isCyberMode && isVisible && (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {/* Outer Crosshair / Targeting Ring */}
          <div
            className="absolute rounded-full border transition-all duration-100 ease-out flex items-center justify-center"
            style={{
              transform: `translate3d(${pos.x - (isPointer ? 20 : 14)}px, ${pos.y - (isPointer ? 20 : 14)}px, 0)`,
              width: isPointer ? '40px' : '28px',
              height: isPointer ? '40px' : '28px',
              borderColor: isPointer ? '#FF3B00' : 'rgba(255, 59, 0, 0.5)',
              backgroundColor: isPointer ? 'rgba(255, 59, 0, 0.08)' : 'transparent',
              willChange: 'transform'
            }}
          >
            {/* Crosshair ticks */}
            <span className="absolute w-1 h-0.5 bg-[#FF3B00] -left-1" />
            <span className="absolute w-1 h-0.5 bg-[#FF3B00] -right-1" />
            <span className="absolute h-1 w-0.5 bg-[#FF3B00] -top-1" />
            <span className="absolute h-1 w-0.5 bg-[#FF3B00] -bottom-1" />
          </div>

          {/* Center Precision Point */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#FF3B00] shadow-[0_0_8px_#FF3B00]"
            style={{
              transform: `translate3d(${dotPos.x - 3}px, ${dotPos.y - 3}px, 0)`,
              willChange: 'transform'
            }}
          />
        </div>
      )}
    </>
  )
}
