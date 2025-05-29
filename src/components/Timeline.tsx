"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Backend Developer",
    company: "Expense Trend",
    period: "Calgary, AB    Aug 2024 – Oct 2024",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Designed and developed scalable RESTful APIs for financial transaction processing, reducing response times by 40%.</li>
        <li>Integrated Plaid, Yodlee, and SaltEdge for real-time financial data sync across systems.</li>
        <li>Architected event-driven pipelines with Apache Kafka for high-volume transaction analytics.</li>
        <li>Implemented OAuth 2.0, JWT, and AES encryption for secure, compliant data access.</li>
        <li>Optimized SQL queries and indexing, boosting analytics DB performance by 30%.</li>
        <li>Collaborated in an Agile team to deliver new API features two sprints ahead of schedule.</li>
      </ul>
    ),
  },
  {
    title: "Backend Developer, Spreadd (Influencer Marketing)",
    company: "Adrixus Tech Studio",
    period: "Vadodara, India    Oct 2022 – Nov 2023",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Built multi-tenant microservices for brands/agencies, improving scalability and maintainability.</li>
        <li>Designed NFT-based engagement models on Ethereum for influencer content monetization.</li>
        <li>Developed real-time analytics dashboard with WebSockets and Kafka for campaign tracking.</li>
        <li>Automated brand–influencer communications via WhatsApp Business and Instagram Graph APIs.</li>
        <li>Engineered payment/subscription workflows with Razorpay and Stripe, increasing revenue efficiency.</li>
        <li>Led migration to event-driven microservices (Kafka, RabbitMQ, WebSockets), cutting latency by 50%.</li>
        <li>Maintained real-time systems, achieving 99.8% uptime via monitoring, tuning, and automated testing.</li>
        <li>Implemented CI/CD with Jenkins and GitHub Actions, reducing deployment times by 45%.</li>
        <li>Optimized DB performance with advanced query tuning and caching (30% faster queries).</li>
        <li>Integrated third-party APIs (Facebook, Instagram, YouTube), boosting engagement by 15%.</li>
        <li>Integrated secure payment solutions (Stripe, Razorpay, BillDesk), enhancing transaction trust.</li>
      </ul>
    ),
  },
  {
    title: "Full Stack Blockchain Developer",
    company: "Adrixus Tech Studio",
    period: "Vadodara, India    Apr 2021 – Oct 2022",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Deployed scalable DeFi platforms, NFT marketplaces, and tokenized asset solutions on Ethereum/BSC.</li>
        <li>Led ICO tokenomics and staking mechanism design for gas-efficient, secure transactions.</li>
        <li>Developed cross-chain modules for asset transfers between Ethereum, Polygon, and BSC.</li>
        <li>Architected blockchain escrow service with multi-signature authentication and trustless release.</li>
        <li>Built token rewards system with staking, governance, and reward distribution.</li>
        <li>Implemented Kafka-powered monitoring for real-time blockchain transaction alerts.</li>
        <li>Partnered with security auditors for smart contract assessments—zero critical findings.</li>
        <li>Contributed to .NET-based backend modules for internal microservices, focusing on clean architecture, async programming, and performance-focused enhancements.</li>
        <li>Collaborated on .NET performance tuning using dotMemory, AppDynamics, and JMeter—diagnosing memory leaks and bottlenecks to boost API throughput by 30%.</li>
      </ul>
    ),
  },
  {
    title: "Blockchain Developer(Apprenticeship)",
    company: "Adrixus Tech Studio",
    period: "Vadodara, India    Dec 2020 – Mar 2021",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Researched Ethereum/BSC scalability and security for smart contract best practices.</li>
        <li>Developed Solidity token-swap and staking contracts (ERC-20, ERC-721, ERC-1155).</li>
        <li>Integrated IPFS for decentralized storage, improving data availability and integrity.</li>
        <li>Implemented Web3 authentication (MetaMask, WalletConnect) for secure DApp onboarding.</li>
      </ul>
    ),
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
                  <div className="text-muted-foreground">
                    {experience.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 