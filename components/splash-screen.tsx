"use client"

import { motion, Variants } from "framer-motion"

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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#FCD34D] to-[#F8B500]">
      {/* Decorative icons */}
      <motion.div className="absolute top-20 left-12 text-4xl" variants={floatingVariants} animate="animate">
        <div className="bg-cyan-300 border-2 border-black p-2 rounded transform -rotate-12">{"</>"}</div>
      </motion.div>

      <motion.div
        className="absolute top-24 right-12 text-3xl font-bold"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <div className="bg-yellow-100 border-2 border-black px-4 py-2 rounded transform rotate-12 font-mono">&gt;_</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 text-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <div className="bg-cyan-300 border-2 border-black p-3 rounded">
          <div className="w-8 h-8 border-2 border-black"></div>
        </div>
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
          <div className="bg-cyan-300 border-4 border-black px-6 py-4 text-5xl font-black">M</div>
          <div className="bg-pink-400 border-4 border-black px-6 py-4 text-5xl font-black">B</div>
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
      <motion.div
        className="absolute bottom-12 right-12 text-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <div className="border-2 border-black w-12 h-12 flex items-center justify-center bg-yellow-100 rounded">💾</div>
      </motion.div>
    </div>
  )
}
