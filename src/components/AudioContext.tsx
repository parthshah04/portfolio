"use client"
import { createContext, useContext, useState } from "react"

interface AudioContextType {
  isAudioPlaying: boolean
  setIsAudioPlaying: (playing: boolean) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  // Default to true (music on)
  const [isAudioPlaying, setIsAudioPlaying] = useState(true)
  return (
    <AudioContext.Provider value={{ isAudioPlaying, setIsAudioPlaying }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioContext)
  if (!ctx) throw new Error("useAudio must be used within AudioProvider")
  return ctx
} 