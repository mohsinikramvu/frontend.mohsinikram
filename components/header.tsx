"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Flame, Moon } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface HeaderProps {
  activeNav?: string
  onNavChange?: (section: string) => void
}

export default function Header({ activeNav = "home", onNavChange }: HeaderProps) {
  const [hidden, setHidden] = useState(false)
  const isMobile = useIsMobile()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <motion.header
      className={"navbar mx-3 lg:mx-4 mt-7"}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-140%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      style={{
        boxShadow: isMobile ? "4px 4px 0px 0px rgba(0,0,0,1)" : "6px 6px 0px 0px rgba(0,0,0,1)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="mx-auto px-3 lg:px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.button
            onClick={() => onNavChange?.("home")}
            className="bg-cyan border-3 border-black rounded px-4 py-2 font-black text-black text-xl cursor-pointer"
            style={{
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
            }}
            whileHover={{
              rotate: 2,
              backgroundColor: "#22d3ee",
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileTap={{ rotate: 0 }}
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
          {/* <motion.div
            className="hidden lg:flex items-center gap-2 bg-white border-3 border-black px-4 py-2 cursor-pointer"
            style={{
              boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
            }}
            whileHover={{
              scale: 1,
              rotate: 1,
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileTap={{ rotate: 0 }}
          >
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="font-bold font-handwriting text-black">Creator of LazyFire</span>
          </motion.div> */}

          {/* CTA and Theme Toggle */}
          <div className="flex gap-4">
            <motion.button
              className="bg-cyan border-2 md:border-3 border-black px-4 lg:px-6 py-2 rounded font-bold text-black cursor-pointer"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
              whileHover={{
                rotate: -1,
                backgroundColor: "#22d3ee",
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileTap={{ rotate: 0 }}
            >
              Get in Touch!
            </motion.button>
            <motion.button
              className="bg-cyan border-2 md:border-3 border-black w-10 md:w-12 rounded flex items-center justify-center text-black font-bold cursor-pointer"
              style={{
                boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              }}
              whileHover={{
                rotate: 15,
                backgroundColor: "#22d3ee",
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileTap={{ rotate: 0 }}
            >
              <Moon className="w-5 h-5 fill-current" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
