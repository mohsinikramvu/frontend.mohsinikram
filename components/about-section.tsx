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
    console.log(bgOpacity.get())
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <motion.span
              key={i}
              className="font-bold px-2 text-black inline-block"
              style={{
                backgroundColor: `rgba(34,211,238,${bgOpacity.get()})`,
                scale,
                borderBottomWidth: border,
                borderBottomColor: "#000",
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
      className="min-h-screen bg-white pt-20 pb-20 px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
            About Me
          </h2>
          <motion.div
            className="h-2 bg-accent border-2 border-black"
            style={{ width: lineWidth }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            I'm a{" "}
            <HighlightedText
              text="Senior Software Engineer"
              highlight="Senior Software Engineer"
              start={0.1}
              end={0.25}
            />{" "}
            based in{" "}
            <HighlightedText
              text="Lahore, Pakistan"
              highlight="Lahore, Pakistan"
              start={0.25}
              end={0.4}
            />
            , with a passion for building{" "}
            <HighlightedText
              text="scalable and elegant solutions"
              highlight="scalable and elegant solutions"
              start={0.4}
              end={0.55}
            />{" "}
            to complex problems.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            My expertise spans{" "}
            <HighlightedText
              text="distributed systems"
              highlight="distributed systems"
              start={0.55}
              end={0.65}
            />
            ,{" "}
            <HighlightedText
              text="data pipelines"
              highlight="data pipelines"
              start={0.65}
              end={0.75}
            />
            , and{" "}
            <HighlightedText
              text="cloud technologies"
              highlight="cloud technologies"
              start={0.75}
              end={0.85}
            />
            . I thrive in environments where I can leverage{" "}
            <HighlightedText
              text="microservices architecture"
              highlight="microservices architecture"
              start={0.85}
              end={0.95}
            />{" "}
            and{" "}
            <HighlightedText
              text="full-stack development"
              highlight="full-stack development"
              start={0.95}
              end={1}
            />{" "}
            to create impactful products.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying a good espresso.
            I'm always eager to collaborate with like-minded developers and
            tackle new challenges.
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
        </motion.div>
      </div>
    </motion.section>
  )
}
