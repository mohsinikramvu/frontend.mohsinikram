"use client"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Flame, Moon, Menu, X } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface HeaderProps {
  activeNav?: string
  onNavChange?: (section: string) => void
}

export default function Header({ activeNav = "home", onNavChange }: HeaderProps) {
  const [hidden, setHidden] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
      setIsOpen(false)
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
      className={"navbar mx-3 lg:mx-4 mt-7 relative"}
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
          <motion.a
            href="/"
            className="bg-cyan border-3 border-black rounded px-2 py-1 md:px-4 md:py-2 font-black text-black md:text-xl cursor-pointer"
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
          </motion.a>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
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

          {/* CTA and Theme Toggle */}
          <div className="flex gap-4 h-10 items-center">
            <motion.button
              className="bg-cyan hidden md:block border-2 md:border-3 border-black px-4 lg:px-6 py-2 rounded font-bold text-black cursor-pointer"
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
              className="bg-cyan h-full border-2 md:border-3 border-black w-10 md:w-12 rounded flex items-center justify-center text-black font-bold cursor-pointer"
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

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden bg-cyan h-10 w-10 border-2 border-black rounded flex items-center justify-center text-black cursor-pointer"
              style={{
                boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#22d3ee",
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
              whileTap={{ scale: 0.95, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-3 border-black bg-yellow-400 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onNavChange?.(item.id);
                    setIsOpen(false);
                  }}
                  className={`font-bold text-black text-xl text-left py-2 px-2 border-b-2 border-black/10 ${activeNav === item.id ? "bg-white/20" : ""
                    }`}
                  whileTap={{ scale: 0.98, x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                className="bg-cyan border-2 border-black px-4 py-3 rounded font-bold text-black text-center mt-2"
                style={{
                  boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
                }}
                whileTap={{ scale: 0.98, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)", x: 3, y: 3 }}
              >
                Get in Touch!
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
