"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Server,
  Terminal,
  Type,
  Webhook,
} from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "DevOps",
    icon: Terminal,
    items: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Tools",
    icon: Webhook,
    items: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <skillGroup.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 