"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Initialize audio element
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/theme-song.mp3")
      audioRef.current.loop = true
    }

    // Check if audio was previously playing
    const wasPlaying = localStorage.getItem("audioPlaying") === "true"

    if (wasPlaying) {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        localStorage.setItem("audioPlaying", "false")
      })
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  useEffect(() => {
    // Pause audio on route change if user had muted it
    if (audioRef.current && localStorage.getItem("audioPlaying") === "false") {
      audioRef.current.pause()
    }
  }, [pathname])

  return null // This is a background component, no UI needed
} 