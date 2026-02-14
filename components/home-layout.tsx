"use client"

import { useState, useEffect } from "react";
import Header from "./header";
import ScrollProgress from "./scroll-progress";
import Footer from "./footer";
import { usePathname, useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const portfolioOwner = {
    name: "Mohsin Ikram",
    title: "Senior Software Engineer",
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const [activeNav, setActiveNav] = useState("home");
    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useIsMobile();

    useEffect(() => {
        if (pathname.startsWith("/projects")) {
            setActiveNav("projects")
        }
    }, [pathname])

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const sections = ["home", "about", "projects", "journey", "skills", "contact"];
            const scrollPosition = window.scrollY + 100; // Offset for header

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveNav(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Call once to set initial state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            router.push(`/#${sectionId}`);
            return;
        }

        setActiveNav(sectionId)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div style={{
            boxShadow: isMobile ? "none" : "8px 8px 0px 0px rgba(0,0,0,1)",
        }} className="min-h-screen page-wrapper mt-0 md:pt-2 lg:pt-4 border-2 border-black lg:border-4">
            <ScrollProgress />
            <Header activeNav={activeNav} onNavChange={scrollToSection} />
            {children}
            <Footer name={portfolioOwner.name} title={portfolioOwner.title} onNavChange={scrollToSection} />
        </div>
    )
}

export default HomeLayout;