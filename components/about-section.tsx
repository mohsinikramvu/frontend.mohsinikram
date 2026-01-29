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
            Highly experienced and dynamic software engineer with a rich professional background spanning over 11 years. Throughout my career, I've held positions in renowned tech companies across Albania, France, USA, and Germany. My contributions have been pivotal in designing and constructing microservices for distributed systems, implementing data pipelines on Google Cloud, and engaging in full-stack development.
          </p>
          <p className="text-md text-gray-800 leading-8">
            My passion for continuous learning and innovation is evident through my active presence on various platforms. I thrive on staying updated with the latest trends and technologies in the ever-evolving tech landscape.
          </p>
          <p className="text-md text-gray-800 leading-8">
            I bring a unique blend of technical expertise, leadership qualities, and a genuine enthusiasm for creating impactful software solutions.
          </p>
        </motion.div>

        {/* Key Values */}
        {/* <motion.div
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
              className="border-3 border-black p-6 bg-yellow-300 cursor-pointer"
              style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                backgroundColor: "#ffffff",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-black text-black mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </motion.section>
  )
}
