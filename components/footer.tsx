'use client'

import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";

interface FooterProps {
  name: string
  title: string
  onNavChange: (sectionId: string) => void
}

export default function Footer({ name, title, onNavChange }: FooterProps) {
  const isMobile = useIsMobile();
  return (
    <motion.footer
      className="py-8 px-6 md:px-12 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section - Name and Title */}
          <motion.div
            className="flex-1 text-center md:text-left"
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
                className="text-sm md:text-base font-bold text-black hover:text-cyan transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-8 border-t-2 border-gray-300 mt-8 pt-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} {name}</p>
          </motion.div>
          <div className='flex gap-2 items-center'>
            <IoIosMail size={isMobile ? 20 : 25} color='#66d9ef' />
            <motion.a className={isMobile ? 'text-xs' : ''} href="mailto:haiderdev1999@gmail.com" whileHover={{ scale: 1, color: "#66d9ef" }} whileTap={{ scale: 0.95 }}>
              haiderdev1999[@]gmail[.]com
            </motion.a>
          </div>
          <div className='flex gap-2 items-center'>
            <FaPhone size={isMobile ? 15 : 20} color='#ffd93d' />
            <motion.a className={isMobile ? 'text-xs' : ''} href="tel:+923027471781" whileHover={{ scale: 1, color: "#ffd93d" }} whileTap={{ scale: 0.95 }}>
              +92 302 747 1781
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
