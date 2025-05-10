"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description:
      "Led the development of a microservices architecture using Node.js and React. Implemented CI/CD pipelines and improved application performance by 40%.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications using Next.js and TypeScript. Collaborated with the design team to implement responsive UIs.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description:
      "Built interactive user interfaces using React and Redux. Optimized website performance and implemented SEO best practices.",
  },
]

export function Timeline() {
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
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-border" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      {experience.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 