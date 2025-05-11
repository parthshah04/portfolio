"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { WavyRing } from "@/components/WavyRing"

export const TYPED_STRINGS = [
  "A Startup-seasoned full-stack dev..!!!",
  "I turn ideas into elegant, high-impact web & cloud apps",
  "Lifelong learner who thrives on change and new tech!",
  "Collaborative problem-solver delivering data-driven results",
  "Passionate about building accessible, AI-powered experiences"
];

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (typing) {
      if (displayed.length < TYPED_STRINGS[current].length) {
        timeout = setTimeout(() => {
          setDisplayed(TYPED_STRINGS[current].slice(0, displayed.length + 1))
        }, 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 30)
      } else {
        setTyping(true)
        setCurrent((prev) => (prev + 1) % TYPED_STRINGS.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, current])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Animated wavy ring background */}
      <WavyRing />
      {/* Animated music background */}
      {/* Removed: blobs and background animation, now handled globally */}

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Parth Shah
          </h1>
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl min-h-[2.5rem]">
            {displayed}
            <span className="inline-block w-2 h-6 align-middle bg-primary animate-pulse ml-1" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Projects
          </Link>
          <Link
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Download CV
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mt-8"
        >
          <Link href="https://github.com/parthshah04" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/parth-shah-72822816b/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <ArrowDown className="mx-auto h-8 w-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
} 