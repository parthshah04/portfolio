"use client"

import { motion } from "framer-motion"
import { Coffee } from "lucide-react"

export function About() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
            I’m a software developer shaped by fast-paced startup environments—where I’ve worked on both product-driven platforms and service-based solutions. I thrive in lean teams where everyone rallies behind a shared goal, and I’ve come to value simple solutions to real problems over shiny features.
            I often describe myself as a lifelong learner and problem solver, because that’s what the job really is: constant adaptation, curiosity, and iteration. I bring a results-focused mindset, always aiming for clean code, user-first experiences, and measurable outcomes.
            </p>
            <br />
            <p>
            Outside of work, I’m often lost in tech blogs, sketching out random app ideas, or automating my home just for fun—sometimes it’s productive, sometimes it’s just chaos I enjoy.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 p-6 rounded-lg bg-muted/50 border"
          >
            <div className="flex items-start gap-4">
              <Coffee className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Fun Fact</h3>
                <p className="text-muted-foreground">
                People joke that AI will code us out of a job; I’m busy letting it lint my pull requests and draft test cases so I can focus on tougher problems—proof that the best way to face disruption is to harness it.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 