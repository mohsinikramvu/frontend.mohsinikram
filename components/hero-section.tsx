"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import FragmentIcon from "./icons/FragmentIcon"
import FloppyIcon from "./icons/FloppyIcon"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const isMobile = useIsMobile();
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const socialIcons = [
    { icon: "github", label: "GitHub", url: "https://github.com/mohsinikramvu" },
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mohsinikram1999/" },
    // { icon: "twitter", label: "Twitter", url: "https://twitter.com/mohsinikram" },
  ]

  const skills = ["ReactJS", "NextJS", "VueJS", "Angular", "TypeScript", "TailwindCSS", "Node.JS", "Express.JS", "MongoDB"]

  return (
    <motion.section
      className="pt-12 md:pt-20 pb-12 px-6 md:px-12 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <AnimatedIcon position="top-right" delay={0.2}>
        <div className="bg-yellow-primary border-3 border-black p-3 rounded-lg hover:bg-yellow transition-all duration-300 cursor-pointer">
          <code className="text-lg font-black text-black">&gt;_</code>
        </div>
      </AnimatedIcon> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="text-2xl md:text-4xl font-bold text-cyan">Hi there!</span>
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                className="text-2xl md:text-4xl"
              >
                👋
              </motion.span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-6xl font-black text-black leading-tight">I'm Mohsin Ikram.</h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-gray-700 text-md md:text-lg leading-relaxed">
              Based in Lahore, Pakistan. I’m — a Senior Frontend Engineer and Team Lead with over seven years of experience building and leading the development of scalable, performance-driven user interfaces. I combine strong frontend fundamentals with AI-powered tools such as Claude and Cursor to help teams ship faster without compromising quality.
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-black p-3 rounded bg-white text-black cursor-pointer"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                  }}
                  whileHover={{
                    rotate: 0,
                    boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)"
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  whileTap={{ rotate: 0 }}
                >
                  <span className="text-2xl font-black">
                    {social.icon === "github" ? <FaGithub /> : social.icon === "linkedin" ? <FaLinkedin /> : "🐦"}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                className="bg-cyan border-3 border-black px-10 py-4 rounded font-bold text-black cursor-pointer"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                }}
                whileHover={{
                  rotate: 0,
                  backgroundColor: "#22d3ee",
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                whileTap={{ rotate: 0 }}
              >
                Get in Touch!
              </motion.button>

              {/* <motion.button
                className="border-3 border-black px-8 py-3 font-bold text-black cursor-pointer bg-white"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                }}
                whileHover={{
                  rotate: 1,
                  backgroundColor: "#ffd93d",
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileTap={{ rotate: 0 }}
              >
                ☕ Buy me a coffee
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar and Icons */}
          <motion.div variants={itemVariants} className="relative h-96 md:h-[400px] flex items-center justify-center">
            {/* Avatar Card */}
            <motion.div
              className="relative w-full max-w-[400px]"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="bg-background-secondary max-h-[370px] border-2 md:border-4 aspect-square overflow-hidden cursor-pointer relative"
                initial={{ rotate: isMobile ? 0 : -4 }}
                whileHover={{
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.68, -0.55, 0.265, 1.55]
                }}
                style={{
                  transformOrigin: "top right",
                  boxShadow: isMobile ? "4px 4px 0 var(--border)" : "8px 8px 0 var(--border)"
                }}
              >
                <Image
                  src="/hero-image.png"
                  alt="Mohsin Ikram"
                  fill
                  className="object-contain scale-150 translate-y-16"
                  priority
                />
              </motion.div>
              {/* Floating decorator icons around avatar */}
              <motion.div
                className="hidden md:block absolute top-0 -left-8 border-black p-1 rounded-lg cursor-pointer"
                animate={{
                  x: [0, -15, 0],
                  rotate: [0, 5, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1 }}
              >
                <FragmentIcon />
              </motion.div>
              <motion.div
                className="hidden md:block absolute -bottom-2 -left-10 cursor-pointer transition-all duration-300"
                animate={{
                  y: [0, -15, 0],
                  rotate: [5, 0, -5, -10],
                }}
                transition={{
                  duration: 4,
                  delay: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.15, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
              >
                <FloppyIcon />
              </motion.div>
              <motion.div
                style={{
                  boxShadow: "5px 5px 0 var(--border)"
                }}
                className="absolute -bottom-6 right-0 md:-right-6 bg-accent border-2 md:border-3 border-black px-7 py-3 cursor-pointer hover:bg-cyan-300 transition-all duration-300"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="font-bold text-black text-md">Full-Stack Ninja</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block absolute bottom-20 right-20 z-10 bg-yellow border-3 border-black p-2 rounded-lg cursor-pointer hover:bg-yellow transition-all duration-300"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 5, 0],
              }}
              style={{
                boxShadow: "5px 5px 0 var(--border)"
              }}
              transition={{
                duration: 3,
                delay: 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <code className="text-4xl font-black text-black">&gt;_</code>
            </motion.div>


          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center md:justify-center pt-16 pb-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="border-2 border-black px-4 py-2 rounded font-bold text-black bg-white cursor-pointer"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
              whileHover={{
                rotate: -1,
                backgroundColor: "#ffd93d",
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              whileTap={{ rotate: 0 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
