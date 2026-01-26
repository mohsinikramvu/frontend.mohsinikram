"use client"

import { motion, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const element = sectionRef.current
      const elementTop = element.getBoundingClientRect().top
      const elementHeight = element.clientHeight
      const windowHeight = window.innerHeight

      // Calculate how much of the element is in view (0 to 1)
      const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"))
    const totalHighlights = parts.filter((p) => p.toLowerCase() === highlight.toLowerCase()).length

    return (
      <>
        {parts.map((part, i) => {
          const isHighlighted = part.toLowerCase() === highlight.toLowerCase()
          const highlightIndex = parts.slice(0, i).filter((p) => p.toLowerCase() === highlight.toLowerCase()).length
          const startProgress = highlightIndex / (totalHighlights || 1)
          const endProgress = (highlightIndex + 1) / (totalHighlights || 1)

          // Calculate animation progress for this specific highlight (0 to 1)
          const animationProgress = Math.max(
            0,
            Math.min(1, (scrollProgress - startProgress) / (endProgress - startProgress)),
          )

          return (
            <motion.span
              key={i}
              className={isHighlighted ? "font-bold relative" : ""}
              style={
                isHighlighted
                  ? {
                    backgroundColor: `rgba(34, 211, 238, ${animationProgress})`,
                    borderBottomWidth: `${animationProgress * 3}px`,
                    borderBottomColor: "#000",
                    scale: 1 + animationProgress * 0.1,
                  }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              {isHighlighted && <span className="px-2 text-black">{part}</span>}
              {!isHighlighted && part}
            </motion.span>
          )
        })}
      </>
    )
  }

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

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen bg-white border-t-4 border-black pt-20 pb-20 px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4">About Me</h2>
          <motion.div
            className="h-2 bg-cyan-400 border-2 border-black"
            style={{
              width: `${scrollProgress * 96}px`,
            }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            I'm a <HighlightedText text="Senior Software Engineer" highlight="Senior Software Engineer" /> based in{" "}
            <HighlightedText text="Munich, Germany" highlight="Munich, Germany" />, with a passion for building{" "}
            <HighlightedText text="scalable and elegant solutions" highlight="scalable and elegant solutions" /> to
            complex problems.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            My expertise spans <HighlightedText text="distributed systems" highlight="distributed systems" />,{" "}
            <HighlightedText text="data pipelines" highlight="data pipelines" />, and{" "}
            <HighlightedText text="cloud technologies" highlight="cloud technologies" />. I thrive in environments where
            I can leverage <HighlightedText text="microservices architecture" highlight="microservices architecture" />{" "}
            and <HighlightedText text="full-stack development" highlight="full-stack development" /> to create impactful
            products.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying a good espresso. I'm always eager to collaborate with like-minded developers and tackle new
            challenges.
          </p>
        </motion.div>

        {/* Key Values */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t-4 border-black"
        >
          {[
            { title: "Innovation", desc: "Building next-gen solutions with cutting-edge tech" },
            { title: "Quality", desc: "Obsessed with clean, maintainable, scalable code" },
            { title: "Collaboration", desc: "Great communication and teamwork" },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              className="border-3 border-black p-6 bg-white hover:bg-yellow-300 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-black text-black mb-2">{value.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
