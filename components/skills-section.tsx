"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"

interface SkillCard {
  category: string
  icon: string
  color: string
  skills: string[]
}

const skillsData: SkillCard[] = [
  {
    category: "FRONTEND",
    icon: "⚛️",
    color: "bg-cyan-400",
    skills: ["React.js", "Redux", "MobX", "Angular", "Bootstrap", "Material-UI", "React Native", "Ionic"],
  },
  {
    category: "LANGUAGES",
    icon: "</> ",
    color: "bg-yellow-400",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin", "SQL", "HTML", "CSS"],
  },
  {
    category: "BACKEND",
    icon: "🟢",
    color: "bg-pink-400",
    skills: ["Node.js", "Express.js", "Hapi", "Firebase", "Cloud Functions", "AWS Lambda", "AWS S3", "NGINX"],
  },
  {
    category: "CLOUD & DEVOPS",
    icon: "☁️",
    color: "bg-emerald-300",
    skills: ["Google Cloud", "AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "DATABASES",
    icon: "💾",
    color: "bg-cyan-400",
    skills: ["MongoDB", "Firestore", "RethinkDB", "Redis", "PostgreSQL", "SQL Server"],
  },
  {
    category: "TOOLS & MORE",
    icon: "🔧",
    color: "bg-pink-400",
    skills: ["Git", "Elasticsearch", "GraphQL", "pandas", "Jest", "Cypress"],
  },
]

const architectureSkills = ["Microservices", "SaaS", "Pub/Sub", "Routing Slip", "Dead Letter Queues"]
const methodologySkills = ["Agile", "Scrum", "CI/CD", "TDD"]

export default function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    },
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "#FBBF24",
    },
  }

  return (
    <>
      {/* Main Skills Grid */}
      <motion.section
        className="min-h-screen bg-white border-t-4 border-black pt-20 pb-20 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.8 }}
            className="mb-16"
          >
            <div className="bg-yellow-400 border-4 border-black inline-block px-6 py-3 mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-black">SKILLS</h2>
            </div>
          </motion.div>

          {/* Skills Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {skillsData.map((card) => (
              <motion.div
                key={card.category}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(card.category)}
                onMouseLeave={() => setHoveredCard(null)}
                className="border-4 border-black p-8 bg-white cursor-pointer"
              >
                {/* Header with icon and title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-3 border-black">
                  <span className="text-3xl">{card.icon}</span>
                  <h3 className="text-xl font-black text-black">{card.category}</h3>
                </div>

                {/* Skills badges */}
                <div className="grid grid-cols-2 gap-3">
                  {card.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      custom={idx}
                      variants={badgeVariants}
                      className="border-3 border-black px-3 py-2 text-sm font-bold text-black bg-white hover:bg-yellow-400 transition-colors duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Architecture & Methodologies Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {/* Architecture */}
            <motion.div variants={cardVariants} className="bg-yellow-400 border-4 border-black p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-4 border-black">
                <span className="text-2xl">🏗️</span>
                <h3 className="text-2xl font-black text-black">ARCHITECTURE</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {architectureSkills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    custom={idx}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.08, backgroundColor: "#000" }}
                    className="border-3 border-black px-4 py-2 text-sm font-black text-black bg-white hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Methodologies */}
            <motion.div variants={cardVariants} className="bg-yellow-400 border-4 border-black p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-4 border-black">
                <span className="text-2xl">👥</span>
                <h3 className="text-2xl font-black text-black">METHODOLOGIES</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {methodologySkills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    custom={idx}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.08, backgroundColor: "#000" }}
                    className="border-3 border-black px-4 py-2 text-sm font-black text-black bg-white hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education & Languages Section */}
      <motion.section
        className="min-h-screen bg-white border-t-4 border-black pt-20 pb-20 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Education */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="border-4 border-black p-8 bg-white"
            >
              <div className="bg-yellow-400 border-4 border-black inline-block px-6 py-3 mb-8">
                <h3 className="text-2xl font-black text-black">EDUCATION</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-black text-black mb-2">Bachelor's Degree in Computer Science</h4>
                  <p className="text-gray-700 font-bold mb-4">University of Tirana</p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-cyan-400 border-3 border-black inline-block px-4 py-2 mb-6 font-black"
                  >
                    2013 - 2016
                  </motion.div>

                  <p className="text-gray-600 font-bold flex items-center gap-2">📍 Tirana, Albania</p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="border-4 border-black p-8 bg-white space-y-6"
            >
              <div className="bg-yellow-400 border-4 border-black inline-block px-6 py-3">
                <h3 className="text-2xl font-black text-black">LANGUAGES</h3>
              </div>

              {[
                { language: "Albanian", level: 3 },
                { language: "English", level: 3 },
                { language: "German", level: 3 },
                { language: "Italian", level: 3 },
              ].map((lang, idx) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="border-3 border-black p-4 flex items-center justify-between hover:bg-yellow-50 transition-colors duration-300"
                >
                  <span className="font-bold text-lg text-black">{lang.language}</span>
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-5 h-5 border-2 border-black ${i < lang.level ? "bg-yellow-400" : "bg-white"}`}
                        animate={i < lang.level ? { scale: [1, 1.2, 1] } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
