"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Moon, Sun, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/AudioContext"

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { isAudioPlaying, setIsAudioPlaying } = useAudio()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    // Run on mount and on route change
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    const audio = new Audio("/audio/theme-song.mp3")
    audio.loop = true
    if (isAudioPlaying) {
      audio.play().catch(() => {
        setIsAudioPlaying(false)
      })
    }
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [isAudioPlaying])

  if (!mounted) return null

  // Hide name on landing page at top, show otherwise
  const showName = pathname !== "/" || isScrolled

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {showName ? (
            <Link href="/" className="text-xl font-bold">
              Parth Shah
            </Link>
          ) : (
            <span />
          )}

          <nav className="flex items-center gap-4">
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
            >
              {isAudioPlaying ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  )
} 