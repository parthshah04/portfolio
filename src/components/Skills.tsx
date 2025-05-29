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
    category: "Programming Languages",
    icon: Type,
    items: [
      "JavaScript", "TypeScript","C#​ ​(​.​NET)​", "Python", "Java", "C++", "C", "PHP", "Solidity", "SQL", "HTML", "CSS"
    ],
  },
  {
    category: "Frameworks & Libraries (Backend / APIs)",
    icon: Server,
    items: [
      "Java Spring Boot", "Spring MVC", "Node.js", "Express.js", "Django", "Apollo GraphQL", "Convex"
    ],
  },
  {
    category: "Frameworks & Libraries (Frontend / UI)",
    icon: Code2,
    items: [
      "React.js", "React Native", "Next.js", "Angular", "AngularJS", "Tailwind CSS", "Shadcn UI", "React Hook Form"
    ],
  },
  {
    category: "Mobile",
    icon: Code2,
    items: [
      "Android (Kotlin/Java)", "Android Neural Networks API"
    ],
  },
  {
    category: "Architecture & Design",
    icon: Database,
    items: [
      "Microservices", "PWA", "Offline‑First Design", "Solution Architecture", "Metadata‑Driven Frameworks"
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Server,
    items: [
      "AWS (Lambda, S3)", "Azure", "Google Cloud Platform", "Vercel", "DigitalOcean", "Docker", "Kubernetes", "Containerization"
    ],
  },
  {
    category: "CI/CD & Build Tools",
    icon: Terminal,
    items: [
      "Git", "GitHub", "Maven", "NPM/Yarn", "CI/CD (GitHub Actions, Jenkins)"
    ],
  },
  {
    category: "Messaging & Streaming",
    icon: Webhook,
    items: [
      "Apache Kafka", "WebSockets", "Event‑Driven Architecture"
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    items: [
      "MongoDB", "PostgreSQL", "MySQL", "JSON file‑based storage", "IPFS"
    ],
  },
  {
    category: "Blockchain & Web3",
    icon: Code2,
    items: [
      "Ethereum", "Binance Smart Chain (BSC)", "Polygon", "Solidity", "Hardhat", "Chainlink", "Ethers.js", "web3.js", "DeFi", "Dex", "NFTs", "ICOs", "Custom Crypto Modules"
    ],
  },
  {
    category: "Authentication & Security",
    icon: Terminal,
    items: [
      "OAuth 2.0", "JWT", "AES‑256 & RSA encryption", "HTTPS", "TDD", "​dotTrace", "​dotMemory", "​AppDynamics", "​Mocha", "Jest", "Smart‑contract audit best practices", "Data‑privacy compliance"
    ],
  },
  {
    category: "Integrations & APIs",
    icon: Webhook,
    items: [
      "Google Maps API", "Google Sign‑In", "OpenAI API", "Plaid", "Yodlee", "SaltEdge", "OSINT APIs"
    ],
  },
  {
    category: "Data Science & AI/ML",
    icon: Database,
    items: [
      "ARIMA & time‑series modeling", "ETL pipelines", "XGBoost", "VGG‑19", "Model quantization", "Vector search", "TensorFlow", "PyTorch"
    ],
  },
  {
    category: "Operating Systems & Platforms",
    icon: Terminal,
    items: [
      "Linux (Ubuntu, CentOS)", "Windows", "macOS"
    ],
  },
  {
    category: "Methodologies & Soft Skills",
    icon: Terminal,
    items: [
      "Agile/Scrum", "Teamwork", "Leadership", "Communication", "Critical Thinking", "Creativity", "Strategic Planning", "Business Strategy", "Process & Project Management"
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
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-background border shadow-sm w-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <skillGroup.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-muted text-foreground border-border hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
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