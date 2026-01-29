"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"
import ReactIcon from "./icons/skills/ReactIcon"
import { Code2 } from "lucide-react"
import { FaTools } from "react-icons/fa"
import { SiContentful } from "react-icons/si";
import { SiOpensearch } from "react-icons/si";

interface SkillCard {
  category: string
  icon: React.ReactNode
  color: string
  skills: string[]
  iconColor?: string
}

const skillsData: SkillCard[] = [
  {
    category: "FRONTEND TECHNOLOGIES",
    icon: <ReactIcon color="#66d9ef" />,
    color: "bg-accent",
    iconColor: "#66d9ef",
    skills: ["React.js", "NextJS", "Angular", "VueJS", "SvelteJS", "GatsbyJS", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "STATE MANAGEMENT",
    icon: <Code2 size={40} color="#ffd93d" />,
    color: "bg-accent",
    iconColor: "#ffd93d",
    skills: ["Redux", "Context API", "MobX", "Zustand", "Recoil", "Jotai", "Pinia"],
  },
  {
    category: "UI & TESTING LIBRARIES",
    icon: <SiOpensearch size={35} color="#a8e6cf" />,
    color: "bg-accent",
    iconColor: "#a8e6cf",
    skills: ["Material UI", "Ant Design", "Chakra UI", "Tailwind CSS", "Jest", "Cypress"],
  },
  {
    category: "HEADLESS CMS PLATFORMS",
    icon: <SiContentful size={35} color="#ff6b9d" />,
    color: "bg-accent",
    iconColor: "#ff6b9d",
    skills: ["Contentful", "Sanity", "Prismic", "Strapi", "Builder.io", "Webflow", "WordPress"],
  },
  {
    category: "WORKFLOW & AGILE TOOLS",
    icon: <FaTools size={35} color="#58c4dc" />,
    color: "bg-pink-400",
    iconColor: "#58c4dc",
    skills: ["GitHub", "Jira", "Trello", "GitLab", "Bitbucket", "Asana", "ClickUp", "Scrum", "CI/CD"],
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
      scale: 1,
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
      scale: 1,
    },
  }

  return (
    <>
      {/* Main Skills Grid */}
      <motion.section
        className="pb-12 px-6 md:px-12"
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
            className="mb-12"
          >
            <h2 className="section-title">
              Skills
            </h2>
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
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => setHoveredCard(card.category)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}
                className="border-3 border-black p-6 bg-white cursor-pointer relative group"
              >
                <p style={{ backgroundColor: card.iconColor }} className="absolute left-0 top-0 w-full h-1.5 z-10"></p>
                {/* Header with icon and title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-3 border-black">
                  <span className="group-hover:scale-125 transition-all ease-in-out">{card.icon}</span>
                  <h3 className="text-xl font-black text-black">{card.category}</h3>
                </div>

                {/* Skills badges */}
                <div className="grid grid-cols-2 gap-3">
                  {card.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      custom={idx}
                      variants={badgeVariants}
                      style={{
                        boxShadow: "3px 3px 0px rgba(0,0,0,1)",
                      }}
                      whileHover={{
                        boxShadow: "0px 0px 0px rgba(0,0,0,1)",
                        backgroundColor: card.iconColor,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                      className="border-2 border-black px-3 py-2 text-sm font-bold text-black"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              <div className="bg-yellow border-4 border-black inline-block px-6 py-3 mb-8">
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
                    className="bg-accent border-3 border-black inline-block px-4 py-2 mb-6 font-black"
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
              <div className="bg-yellow border-4 border-black inline-block px-6 py-3">
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
                        className={`w-5 h-5 border-2 border-black ${i < lang.level ? "bg-yellow" : "bg-white"}`}
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
