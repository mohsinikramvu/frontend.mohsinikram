"use client"

import { motion } from "framer-motion"
import { Flame, Moon } from "lucide-react"

interface HeaderProps {
  activeNav?: string
  onNavChange?: (section: string) => void
}

export default function Header({ activeNav = "home", onNavChange }: HeaderProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
  ]

  return (
    <motion.header
      className="bg-yellow-400 border-b-4 border-black sticky top-0 z-50 pt-2 pb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.button
            onClick={() => onNavChange?.("home")}
            className="bg-cyan-400 border-3 border-black px-4 py-2 font-black text-black text-xl cursor-pointer transition-all duration-300"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              backgroundColor: "#06b6d4",
              boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            MI
          </motion.button>
        </div>

        <div className="flex items-center gap-8">
          {/* Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavChange?.(item.id)}
                className={`font-bold text-black text-lg cursor-pointer transition-all duration-300 ${activeNav === item.id ? "underline decoration-4 decoration-black underline-offset-4" : "hover:underline hover:decoration-4 hover:decoration-black hover:underline-offset-4"
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* LazyFire Badge */}
          <motion.div
            className="hidden lg:flex items-center gap-2 bg-white border-3 border-black px-4 py-2 cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
            }}
          >
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="font-bold font-handwriting text-black">Creator of LazyFire</span>
          </motion.div>

          {/* CTA and Theme Toggle */}
          <div className="flex gap-4">
            <motion.button
              className="bg-cyan-400 border-3 border-black px-6 py-2 font-bold text-black cursor-pointer transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: "#06b6d4",
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch!
            </motion.button>
            <motion.button
              className="bg-cyan-400 border-3 border-black w-12 flex items-center justify-center text-black font-bold cursor-pointer transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotate: 15,
                backgroundColor: "#06b6d4",
                boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Moon className="w-5 h-5 fill-current" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
