"use client"

import { motion } from "framer-motion"
import Header from "./header"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import JourneySection from "./journey-section"
import SkillsSection from "./skills-section"
import ContactSection from "./contact-section"
import Footer from "./footer"
import ScrollProgress from "./scroll-progress"
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
    <div style={{
      boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
    }} className="min-h-screen bg-white text-black rounded max-w-[1400px] m-6 mx-auto shadow-2xs shadow-black border-4 border-black">
      <ScrollProgress />
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
