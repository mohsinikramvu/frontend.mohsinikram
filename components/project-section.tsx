import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react";
import { FaLink } from "react-icons/fa";

const projects = [
    {
        id: "project1",
        title: "Gigsta.AI",
        description: "Gigsta.AI is a platform that helps freelancers and small businesses to find and manage their gig work.",
        image: "/portfolio/react/gigsta-ai.png",
        link: "https://gigsta.ai/",
        category: "React & Node",
        color: "#66d9ef"
    },
    {
        id: "project2",
        title: "DoneEasy",
        description: "Unlock the Future of Business Commerce with DoneEasy!",
        image: "/portfolio/nextjs/doneeasy-1.png",
        link: "https://www.doneeasy.io/",
        category: "NextJS",
        color: "#ffd93d"
    },
    {
        id: "project3",
        title: "ForThem",
        description: "Queer Goods, Made right. ForThem is built by and for the queer community.",
        image: "/portfolio/nextjs/forthem.png",
        link: "https://forthem.com/",
        category: "NextJS",
        color: "#ff6b9d"
    },
];

export default function ProjectSection() {
    const { scrollY } = useScroll()
    const sectionRef = useRef<HTMLDivElement>(null)
    const isMobile = useIsMobile();
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    }
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }
    const lineWidth = useTransform(scrollY, [0, 1], ["0px", "100px"]);
    return (
        <motion.section ref={sectionRef} variants={containerVariants}
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} id="projects" className="pt-12 pb-12 px-6 md:px-12">
            <motion.div variants={itemVariants} className="mb-8">
                <h2 className="section-title">
                    Projects
                </h2>
                <div className="flex items-center justify-between gap-2">
                    <motion.div
                        className="h-2 bg-primary border-2 border-black"
                        style={{ width: lineWidth }}
                    />
                    <motion.a href="/projects" className="text-primary font-semibold">
                        View All
                    </motion.a>
                </div>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={itemVariants}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="border-3 bg-white border-black p-4 h-80 cursor-pointer relative group overflow-hidden"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        style={{
                            boxShadow: isMobile ? "4px 4px 0px rgba(0, 0, 0, 1)" : "8px 8px 0px rgba(0, 0, 0, 1)",
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        whileHover={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 1)" }}
                    >
                        <div className="h-full w-full absolute top-0 left-0 bg-black/5" />
                        <div className="bg-white flex flex-col gap-1 rounded p-4 
                            left-3 right-3 absolute -bottom-full group-hover:bottom-3 transition-all duration-500 ease-in-out">
                            <h3 className="text-lg font-black text-black inline-flex justify-between gap-2">
                                <span>{project.title}</span>
                                <span style={{ backgroundColor: project.color }} className={`text-xs p-1 rounded mb-1`}>{project.category}</span>
                            </h3>
                            <p className="text-sm text-black line-clamp-3 mb-4">{project.description}</p>
                            <a href={project.link} style={{ color: project.color }} target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold`}>
                                View Link
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}