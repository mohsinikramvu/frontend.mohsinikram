import { useState } from "react";
import Header from "./header";
import ScrollProgress from "./scroll-progress";
import Footer from "./footer";

const portfolioOwner = {
    name: "Mohsin Ikram",
    title: "Senior Software Engineer",
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
            boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
        }} className="min-h-screen page-wrapper mt-0 md:pt-2 lg:pt-4 border-2 border-black lg:border-4">
            <ScrollProgress />
            <Header activeNav={activeNav} onNavChange={scrollToSection} />
            {children}
            <Footer name={portfolioOwner.name} title={portfolioOwner.title} onNavChange={scrollToSection} />
        </div>
    )
}

export default HomeLayout;