"use client"

import { motion, Variants, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  /* ---------------- Highlighted Text Component ---------------- */
  const HighlightedText = ({
    text,
    highlight,
    start,
    end,
  }: {
    text: string
    highlight: string
    start: number
    end: number
  }) => {
    const bgOpacity = useTransform(scrollYProgress, [start, end], [0, 1])
    const scale = useTransform(scrollYProgress, [start, end], [1, 1])
    const border = useTransform(scrollYProgress, [start, end], [0, 3])

    const parts = text.split(new RegExp(`(${highlight})`, "gi"))
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <motion.span
              key={i}
              className="font-bold px-2 text-black inline-block"
              style={{
                backgroundColor: `rgba(34,211,238,${bgOpacity.get()})`,
              }}
            >
              {part}
            </motion.span>
          ) : (
            part
          )
        )}
      </>
    )
  }

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
  const highlightWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

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
          style={{ boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}
          variants={itemVariants}
          className="space-y-6 bg-white px-4 md:px-6 lg:px-8 py-6 md:py-8 border-3 border-black">
          <p className="text-md text-gray-800 leading-8">
            Highly experienced and dynamic software engineer with a rich professional background spanning over
            <span className="relative inline-block px-2 font-bold text-black">
              <motion.span
                className="absolute inset-0 bg-yellow-400"
                style={{ width: highlightWidth }}
              />
              <span className="z-10 relative">11 years</span>
            </span>.
            Throughout my career, I've held positions in renowned tech companies across Albania, France, USA, and Germany. My contributions have been pivotal in designing and constructing microservices for distributed systems, implementing data pipelines on Google Cloud, and engaging in
            <span className="relative inline-block px-2 font-bold text-black">
              <motion.span
                className="absolute inset-0 bg-primary"
                style={{ width: highlightWidth }}
              />
              <span className="z-10 relative">full-stack development</span>
            </span>.
          </p>
          <p className="text-md text-gray-800 leading-8">
            My passion for continuous learning and innovation is evident through my active presence on various platforms. I thrive on staying updated with the latest trends and technologies in the ever-evolving tech landscape.
          </p>
          <p className="text-md text-gray-800 leading-8">
            I bring a unique blend of technical expertise, leadership qualities, and a genuine enthusiasm for creating impactful software solutions.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
