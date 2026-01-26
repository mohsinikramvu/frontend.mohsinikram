'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

interface FooterProps {
  name: string
  title: string
  onNavChange: (sectionId: string) => void
}

export default function Footer({ name, title, onNavChange }: FooterProps) {
  return (
    <motion.footer
      className="border-t-4 border-black py-8 px-6 md:px-12 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section - Name and Title */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-black text-black mb-1">{name}</h3>
            <p className="text-sm md:text-base text-gray-700">{title}</p>
          </motion.div>

          {/* Center Section - Navigation */}
          <motion.div
            className="flex gap-6 md:gap-8 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {['Home', 'About', 'Experience', 'Skills'].map((item) => (
              <motion.button
                key={item}
                onClick={() => onNavChange(item.toLowerCase())}
                className="text-sm md:text-base font-bold text-black hover:text-cyan-500 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          {/* Right Section - Terminal Button */}
          <motion.button
            className="bg-cyan-400 border-3 border-black px-4 py-2 md:px-6 md:py-3 font-bold text-black flex items-center gap-2 hover:bg-cyan-300 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 0 -2px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Terminal size={20} />
            <span>Terminal</span>
          </motion.button>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="border-t-2 border-gray-300 mt-8 pt-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600">© 2025 {name}</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
