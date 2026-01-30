"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { motion, Variants } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface TimelineItem {
  id: string
  title: string
  company: string
  period: string
  description: string
  location: string
  color?: string
}

const timelineData: TimelineItem[] = [
  {
    id: "orangetreesystems",
    title: "Senior Software Engineer",
    company: "OrangeTree Systems",
    period: "Feb 2025 - Present",
    description:
      "Part of Core team working on AI-powered Media & Data Intelligence Solutions. Designed and built microservices for distributed systems, engineered data pipelines on Google Cloud, and wrote full-stack code for front/back/cloud.",
    location: "Industrial States, Lahore, Pakistan",
    color: "bg-accent",
  },
  {
    id: "m2logics",
    title: "Senior Software Engineer",
    company: "M2Logics",
    period: "Oct 2024 - April 2025",
    description:
      "Part of Core team leading tech decisions. Led AppriseMobile CRM for Toyota and Microsoft IOT marketing project deployed across USA, Canada, and Australia.",
    location: "Eden Center, Lahore, Pakistan",
    color: "bg-pink-400",
  },
  {
    id: "technologybrainz",
    title: "Software Engineer",
    company: "Technology Brainz",
    period: "Nov 2023 - Sep 2024",
    description:
      "Developed robust backend systems and APIs. Contributed to open-source projects and mentored junior developers in best practices.",
    location: "Kareem Block, Lahore, Pakistan",
    color: "bg-yellow",
  },
  {
    id: "brandjaws",
    title: "Software Engineer",
    company: "BrandJaws",
    period: "July 2019 - Nov 2023",
    description:
      "Developed robust backend systems and APIs. Contributed to open-source projects and mentored junior developers in best practices.",
    location: "Model Town, Lahore, Pakistan",
    color: "bg-yellow",
  },
]

const locations = [
  { name: "M2Logics", x: 62, y: 35 },
  { name: "Technology Brainz", x: 52, y: 40 },
  { name: "BrandJaws", x: 58, y: 48 },
]

export default function JourneySection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const element = sectionRef.current
      const elementTop = element.getBoundingClientRect().top
      const elementHeight = element.clientHeight
      const windowHeight = window.innerHeight

      const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      className="pt-12 pb-20 px-6 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="">
        <motion.div
          style={{ boxShadow: isMobile ? "4px 4px 0px rgba(0, 0, 0, 1)" : "8px 8px 0px rgba(0, 0, 0, 1)" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
          className="mb-12 md:mb-16 bg-white p-4 md:p-6 border-3 border-black"
        >
          <h2 className="text-2xl md:text-4xl font-black text-black text-center">My Journey</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8 relative pl-12">
              {/* Vertical yellow line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-2 bg-yellow border-2 border-black"
                style={{ height: `${Math.max(scrollProgress * 100, 0)}%` }}
                transition={{ duration: 0.3 }}
              />

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                  style={{
                    opacity: scrollProgress > index * 0.25 ? 1 : 0.5,
                  }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-7 top-0 w-5 h-5 bg-black border-3 border-white rounded-full"
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content card */}
                  <motion.div
                    style={{ boxShadow: "5px 5px 0px rgba(0, 0, 0, 1)" }}
                    className="border-3 border-black p-5 bg-white transition-all duration-200 cursor-pointer"
                    whileHover={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 1)" }}
                  >
                    <h3 className="text-lg font-black text-black mb-1">{item.title}</h3>
                    <p className="text-sm font-bold text-cyan-600 mb-2">@ {item.company}</p>
                    <p className="text-xs text-gray-600 mb-3 font-bold">{item.period}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.description}</p>
                    <p className="text-xs font-bold text-gray-500 flex items-center gap-1">📍 {item.location}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 h-1/2 lg:sticky lg:top-40 lg:self-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative border-4 border-black bg-linear-to-br from-amber-100 to-orange-100 overflow-hidden rounded-lg h-full">
              {/* Map background */}
              <motion.div
                className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgba(147, 197, 253, 0.3) 0%, rgba(253, 224, 71, 0.3) 100%)",
                }}
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="30" r="35" fill="#E8D4C0" opacity="0.3" />
                </svg>

                {/* Location markers */}
                {locations.map((loc, idx) => (
                  <motion.div
                    key={loc.name}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {/* Marker circle */}
                    <motion.div
                      className="w-6 h-6 bg-yellow border-3 border-black rounded-full mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    {/* Label */}
                    <motion.div className="bg-yellow border-2 border-black px-2 py-1 text-xs font-black text-black whitespace-nowrap">
                      {loc.name}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Zoom controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <motion.button
                    className="w-10 h-10 bg-accent border-3 border-black font-bold text-lg hover:bg-cyan transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 2))}
                  >
                    +
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-accent border-3 border-black font-bold text-lg hover:bg-cyan transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 1))}
                  >
                    −
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-black border-3 border-black font-bold text-lg text-white hover:bg-gray-800 transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setZoomLevel(1)}
                  >
                    🏠
                  </motion.button>
                </div>

                {/* Pirate character placeholder */}
                <motion.div
                  className="absolute bottom-4 left-4 text-5xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  🏴‍☠️
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
