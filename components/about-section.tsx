"use client"

import { motion, Variants, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import HighlightText from "./highlight-text"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile();

  // Scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  /* ---------------- Framer Variants ---------------- */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  /* ---------------- Progress Bar ---------------- */
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "96px"])

  return (
    <motion.section
      ref={sectionRef}
      className="pt-20 pb-12 px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="">
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="section-title">
            About
          </h2>
          <motion.div
            className="h-2 bg-primary border-2 border-black"
            style={{ width: lineWidth }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          style={{ boxShadow: isMobile ? "4px 4px 0px rgba(0, 0, 0, 1)" : "8px 8px 0px rgba(0, 0, 0, 1)" }}
          variants={itemVariants}
          className="space-y-6 bg-white px-4 md:px-6 lg:px-8 py-6 md:py-8 border-3 border-black">
          <p className="text-md text-gray-800 leading-8">
            Highly experienced and results-driven <HighlightText bgColor="#FFD700" text="Senior Frontend Engineer" direction="right" /> and <HighlightText bgColor="#66d9ef" text="Frontend Team Lead" direction="left" /> with over
            <HighlightText bgColor="#a8e6cf" text="seven years" direction="right" /> of professional experience building and scaling modern web applications. Throughout my career, I have led frontend initiatives, architected scalable UI systems, and <HighlightText bgColor="#ff6b9d" text="delivered" direction="left" /> high-performance, user-centric interfaces across diverse products and teams.
          </p>
          <p className="text-md text-gray-800 leading-8">
            My expertise spans frontend architecture, <HighlightText bgColor="#a8e6cf" text="performance optimization" />, <HighlightText text="accessibility" bgColor="#ff6b9d" />, and modern JavaScript ecosystems, combined with hands-on leadership in <HighlightText text="mentoring engineers" bgColor="#FFD700" direction="right" />, driving technical standards, and collaborating closely with product and design stakeholders. I have played a key role in transforming complex requirements into elegant, maintainable, and scalable frontend solutions.
          </p>
          <p className="text-md text-gray-800 leading-8">
            I actively embrace <HighlightText bgColor="#66d9ef" text="AI-assisted development" /> tools to enhance productivity, streamline engineering <HighlightText bgColor="#FFD700" text="workflows" />, and improve code quality, while maintaining a strong focus on best practices and long-term maintainability. Passionate about continuous learning and <HighlightText text="innovation" bgColor="#ff6b9d" />, I stay aligned with emerging frontend <HighlightText bgColor="#FFD700" text="trends and technologies" /> in an ever-evolving digital landscape.
          </p>
          <p className="text-md text-gray-800 leading-8">
            I bring a balanced mix of deep technical expertise, leadership mindset, and genuine enthusiasm for building <HighlightText bgColor="#a8e6cf" text="impactful" />, future-ready software solutions that deliver measurable value.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
