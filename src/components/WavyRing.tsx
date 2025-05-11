// "use client"
// import { useRef, useEffect } from "react"
// import { useTheme } from "next-themes"

// export function WavyRing({
//   points = 120,
//   amplitude = 18,
//   speed = 0.08,
//   layers = 7,
// }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const { resolvedTheme } = useTheme()

//   // Color and style based on theme
//   const isDark = resolvedTheme === "dark"
//   const color = isDark ? "rgba(255,255,255,0.13)" : "rgba(30,30,30,0.10)"
//   const shadowColor = isDark ? "#fff" : "#222"
//   const blendMode = "lighter"
//   const lineWidth = 2.2
//   const shadowBlur = 24

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     let running = true

//     function draw() {
//       if (!ctx || !canvas || !running) return
//       // Fill parent (Hero section)
//       const dpr = window.devicePixelRatio || 1
//       const w = canvas.offsetWidth
//       const h = canvas.offsetHeight
//       canvas.width = w * dpr
//       canvas.height = h * dpr
//       ctx.setTransform(1, 0, 0, 1, 0, 0)
//       ctx.scale(dpr, dpr)
//       ctx.clearRect(0, 0, w, h)
//       ctx.save()
//       ctx.translate(w / 2, h / 2)
//       ctx.globalCompositeOperation = blendMode

//       // Responsive base radius: 38% of the smaller viewport dimension
//       const baseRadius = Math.min(w, h) * 0.38

//       // Use time-based animation for smooth, slow movement
//       const now = performance.now() * 0.01 * (speed)

//       // Draw fuzzy layers
//       for (let l = 0; l < layers; l++) {
//         ctx.beginPath()
//         for (let i = 0; i <= points; i++) {
//           const theta = (i / points) * Math.PI * 2
//           // Gentle, slow, smooth noise
//           const noise =
//             Math.sin(theta * 2 + now + l) * 0.5 +
//             Math.cos(theta * 1.5 - now - l) * 0.5
//           const r = baseRadius + Math.sin(theta + now + l) * amplitude * 0.5 + noise * amplitude
//           const x = Math.cos(theta) * r
//           const y = Math.sin(theta) * r
//           if (i === 0) ctx.moveTo(x, y)
//           else ctx.lineTo(x, y)
//         }
//         ctx.closePath()
//         ctx.shadowColor = shadowColor
//         ctx.shadowBlur = shadowBlur + l * 2
//         ctx.strokeStyle = color
//         ctx.lineWidth = lineWidth + l * 0.7
//         ctx.stroke()
//       }
//       ctx.restore()
//       requestAnimationFrame(draw)
//     }
//     draw()
//     return () => {
//       running = false
//     }
//   }, [points, amplitude, speed, layers, color, shadowColor, blendMode, lineWidth, shadowBlur])

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "absolute",
//         inset: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         pointerEvents: "none",
//         background: "transparent",
//         display: "block",
//       }}
//     />
//   )
// } 

"use client";                               // ✅ semicolon stops "unused-expression" error

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

/* ────────────────────────────────────────────────────────────────
   Props & default values
   ───────────────────────────────────────────────────────────── */
interface WavyRingProps {
  points?: number
  amplitude?: number
  speed?: number
  layers?: number
}

export function WavyRing({
  points = 220,
  amplitude = 36,
  speed = 0.06,
  layers = 12,
}: WavyRingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  /* ── Style derived from theme ──────────────────────────────── */
  const isDark = (resolvedTheme ?? "dark") === "dark"
  const strokeColor = isDark ? "rgba(255,255,255,0.20)" : "rgba(30,30,30,0.15)"
  const shadowColor = isDark ? "#ffffff" : "#101010"
  const blendMode   = "lighter"
  const baseLineW   = 2.6
  const baseBlur    = 34

  /* ── Animation loop ────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let running = true

    const draw = () => {
      if (!ctx || !canvas || !running) return

      const dpr = window.devicePixelRatio || 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      ctx.save()
      ctx.translate(w / 2, h / 2)
      ctx.globalCompositeOperation = blendMode

      const baseRadius = Math.min(w, h) * 0.40
      const now = performance.now() * speed/40;

      for (let l = 0; l < layers; l++) {
        ctx.beginPath()
        for (let i = 0; i <= points; i++) {
          const θ = (i / points) * Math.PI * 2
          const ripple =
            Math.sin(θ * 3 + now * 1.3 + l) * 0.4 +
            Math.sin(θ * 9 + now * 2.7 - l) * 0.25
          const r = baseRadius + ripple * amplitude
          const x = Math.cos(θ) * r
          const y = Math.sin(θ) * r
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.shadowColor = shadowColor
        ctx.shadowBlur  = baseBlur + l * 2
        ctx.strokeStyle = strokeColor
        ctx.lineWidth   = baseLineW + l * 0.6
        ctx.stroke()
      }

      ctx.restore()
      requestAnimationFrame(draw)
    }

    draw()
    return () => { running = false }
  }, [points, amplitude, speed, layers, strokeColor, shadowColor])

  /* ── Canvas element ────────────────────────────────────────── */
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
        display: "block",
      }}
    />
  )
}
