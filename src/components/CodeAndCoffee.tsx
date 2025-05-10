"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import confetti from "canvas-confetti"

export function CodeAndCoffee() {
  const [coffeeCount, setCoffeeCount] = useState(0)

  const handleCoffeeClick = () => {
    setCoffeeCount((prev) => prev + 1)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCoffeeClick}
      className="fixed bottom-4 right-4 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <Coffee className="h-6 w-6" />
      <span className="sr-only">Buy me a coffee</span>
      {coffeeCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {coffeeCount}
        </span>
      )}
    </motion.button>
  )
} 