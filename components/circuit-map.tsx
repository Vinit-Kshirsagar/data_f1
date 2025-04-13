"use client"

import { useEffect, useRef } from "react"

export function CircuitMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw circuit
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    // Example Bahrain circuit (simplified)
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.lineTo(150, 50)
    ctx.lineTo(200, 100)
    ctx.lineTo(250, 100)
    ctx.lineTo(300, 150)
    ctx.lineTo(300, 200)
    ctx.lineTo(250, 250)
    ctx.lineTo(200, 250)
    ctx.lineTo(150, 200)
    ctx.lineTo(100, 200)
    ctx.lineTo(50, 150)
    ctx.lineTo(50, 50)
    ctx.stroke()

    // Draw start/finish line
    ctx.beginPath()
    ctx.strokeStyle = "#ff0000"
    ctx.lineWidth = 5
    ctx.moveTo(100, 50)
    ctx.lineTo(100, 70)
    ctx.stroke()

    // Draw sectors
    ctx.font = "12px Arial"
    ctx.fillStyle = "#ffffff"
    ctx.fillText("S1", 150, 80)
    ctx.fillText("S2", 270, 180)
    ctx.fillText("S3", 120, 180)

    // Draw driver positions (example)
    // Verstappen
    ctx.beginPath()
    ctx.fillStyle = "#0600EF"
    ctx.arc(200, 100, 5, 0, Math.PI * 2)
    ctx.fill()

    // Leclerc
    ctx.beginPath()
    ctx.fillStyle = "#DC0000"
    ctx.arc(180, 100, 5, 0, Math.PI * 2)
    ctx.fill()
  }, [])

  return (
    <div className="relative h-[200px] w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
