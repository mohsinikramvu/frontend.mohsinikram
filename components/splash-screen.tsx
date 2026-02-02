"use client"

import { motion, Variants } from "framer-motion"
import FragmentIcon from "./icons/FragmentIcon"
import FloppyIcon from "./icons/FloppyIcon"

export default function SplashScreen() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const progressVariants: Variants = {
    animate: {
      scaleX: [0, 1],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div style={{ height: "calc(100vh - 0px)" }} className="flex items-center justify-center bg-linear-to-br from-[#FCD34D] to-[#F8B500]">
      {/* Decorative icons */}
      <motion.div
        className="hidden md:block absolute top-20 left-12 border-black p-1 rounded-lg cursor-pointer"
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
        className="hidden md:block absolute top-20 right-10 cursor-pointer transition-all duration-300"
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
        className="hidden md:block absolute bottom-20 left-10 cursor-pointer transition-all duration-300"
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

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* MB Logo */}
        <motion.div className="flex gap-2" variants={itemVariants}>
          <div className="bg-cyan-300 border-4 border-black px-6 py-4 w-24 rounded text-5xl font-black text-center">M</div>
          <div className="bg-pink-400 border-4 border-black px-6 py-4 w-24 rounded text-5xl font-black text-center">I</div>
        </motion.div>

        {/* Loading Bar */}
        <motion.div className="w-64 h-4 bg-black relative overflow-hidden" variants={itemVariants}>
          <motion.div
            className="h-full bg-yellow-100 border-2 border-black"
            variants={progressVariants}
            animate="animate"
          />
        </motion.div>

        {/* Text */}
        <motion.p className="text-center text-black font-semibold text-lg font-mono" variants={itemVariants}>
          Loading portfolio...
        </motion.p>
      </motion.div>

      {/* Bottom right corner element */}
      {/* <motion.div
        className="absolute bottom-12 right-12 text-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <div className="border-2 border-black w-12 h-12 flex items-center justify-center bg-yellow-100 rounded">💾</div>
      </motion.div> */}
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
    </div>
  )
}
