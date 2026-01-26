"use client"

import { motion } from "framer-motion"
import type React from "react"

interface AnimatedIconProps {
  children: React.ReactNode
  delay?: number
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  style?: React.CSSProperties
}

export default function AnimatedIcon({ children, delay = 0, position, style }: AnimatedIconProps) {
  const floatAnimation = {
    y: [0, -10, 0],
    x: [0, Math.random() > 0.5 ? 5 : -5, 0],
    rotate: [0, 2, -2, 0],
  }

  const positionClasses = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
  }

  return (
    <motion.div
      className={`absolute ${position ? positionClasses[position] : ""}`}
      animate={floatAnimation}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
