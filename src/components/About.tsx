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
              I'm a passionate Full Stack Developer with a keen eye for creating
              elegant solutions in the least amount of time. I specialize in
              building responsive web applications using modern technologies like
              React, Next.js, and Node.js.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while reading tech blogs.
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
                  I've written over 1 million lines of code in my career, but my
                  favorite line is still the first "Hello, World!" I ever wrote.
                  It's a reminder that every great journey starts with a single
                  step.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 