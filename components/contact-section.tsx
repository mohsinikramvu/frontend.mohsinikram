'use client'

import { motion, Variants } from 'framer-motion'
import { Github, Linkedin, StickerIcon as StackOverflow } from 'lucide-react'

const contactLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com',
    color: 'bg-accent',
    hoverColor: 'hover:bg-cyan-300',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
    color: 'bg-yellow',
    hoverColor: 'hover:bg-yellow-300',
  },
  {
    name: 'Stack Overflow',
    icon: StackOverflow,
    url: 'https://stackoverflow.com',
    color: 'bg-pink-400',
    hoverColor: 'hover:bg-pink-300',
  },
]

export default function ContactSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  const postItVariants: Variants = {
    initial: { rotate: -3, y: -10 },
    hover: { rotate: 8, y: -15 },
  }

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-white border-t-4 border-black py-20 px-6 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Get In Touch Header */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="inline-block bg-yellow border-4 border-black px-6 py-3 mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-black text-black">GET IN TOUCH</h2>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-center text-2xl md:text-3xl font-bold text-black mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          Let's build something amazing together
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} border-4 border-black p-8 relative group cursor-pointer transition-all duration-300`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Post-it Note */}
                <motion.div
                  className="absolute -top-4 right-4 w-16 h-16 bg-yellow border-2 border-black"
                  variants={postItVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="w-full h-full flex items-center justify-center opacity-30" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Icon size={64} className="text-black" strokeWidth={1.5} />
                  </motion.div>
                  <motion.h3
                    className="text-center text-xl md:text-2xl font-bold text-black italic"
                    whileHover={{ color: '#000' }}
                  >
                    {link.name}
                  </motion.h3>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-b-4 border-black my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  )
}
