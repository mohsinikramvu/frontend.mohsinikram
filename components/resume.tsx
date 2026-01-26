"use client"

import { motion } from "framer-motion"
import Header from "./header"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import JourneySection from "./journey-section"
import SkillsSection from "./skills-section"
import ContactSection from "./contact-section"
import Footer from "./footer"
import { useState } from "react"

const portfolioOwner = {
  name: "Mario Ballabani",
  title: "Senior Software Engineer",
}

export default function Resume() {
  const [activeNav, setActiveNav] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white text-black m-6 shadow-2xs shadow-black border-4 border-black">
      <Header activeNav={activeNav} onNavChange={scrollToSection} />

      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="journey">
        <JourneySection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer name={portfolioOwner.name} title={portfolioOwner.title} onNavChange={scrollToSection} />
    </div>
  )
}
