"use client";

import { projects } from "@/lib/data";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HomeLayout from "@/components/home-layout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const isMobile = useIsMobile();

    const [currentSlide, setCurrentSlide] = useState(0);

    if (!project) {
        return notFound();
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [project.screenshots.length]);


    return (
        <HomeLayout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-12 pb-12 px-6 md:px-12"
            >
                {/* Navigation & Header */}
                <div className="container mx-auto pb-6 flex flex-wrap gap-4 items-center justify-between">
                    <Link href="/projects" className="flex items-center gap-2 text-black/70 hover:text-black transition-colors font-medium">
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:shadow-none hover:bg-cyan gap-2 px-4 py-2 rounded-full border-2 border-black bg-white hover:text-black transition-all duration-200 ease-in-out font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                    >
                        Visit Site <ExternalLink size={16} />
                    </a>
                </div>

                {/* Hero Slider Section */}
                <div className="container mx-auto mb-12">
                    <div style={{
                        boxShadow: isMobile ? "5px 5px 0px rgba(0, 0, 0, 1)" : "8px 8px 0px rgba(0, 0, 0, 1)",
                    }} className="relative w-full aspect-video overflow-hidden border-3 border-black bg-white">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentSlide}
                                src={project.screenshots[currentSlide]}
                                alt={`${project.title} screenshot ${currentSlide + 1}`}
                                className="w-full h-full object-cover object-top"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-black/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>

                        {project.screenshots.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full hover:bg-black hover:text-white transition-colors z-10"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full hover:bg-black hover:text-white transition-colors z-10"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {project.screenshots.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full border border-black transition-colors ${currentSlide === index ? 'bg-black' : 'bg-white'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="absolute top-4 left-4 bg-white border-2 border-black px-4 py-2 text-sm font-black md:text-xl z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            {project.title}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-0 md:px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
                                <span className="bg-black text-white px-2 py-1 transform -rotate-2 inline-block">Project</span>
                                Overview
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
                                {project.longDescription || project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                boxShadow: isMobile ? "4px 4px 0px rgba(0, 0, 0, 1)" : "8px 8px 0px rgba(0, 0, 0, 1)",
                            }}
                            className="p-6 border-3 border-black bg-[#f0f0f0]"
                        >
                            <h3 className="text-2xl font-bold mb-3">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-800">
                                <li>Intuitive User Interface designed for seamless navigation.</li>
                                <li>Optimized performance ensuring fast load times.</li>
                                <li>Responsive design that looks great on all devices.</li>
                                {/* Placeholder features as they aren't in data yet, can be added to data later */}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Sidebar / Role & Tech */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                boxShadow: isMobile ? "4px 4px 0px rgba(0, 0, 0, 1)" : "8px 8px 0px rgba(0, 0, 0, 1)",
                            }}
                            className="p-6 border-3 border-black bg-white"
                        >
                            {/* <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 rounded-full -mr-12 -mt-12 z-0 opacity-50" /> */}

                            <h3 className="text-xl font-black mb-4 relative z-10">My Role</h3>
                            <div className="prose relative z-10">
                                <p className="font-medium text-lg mb-2">{project.role || "Developer"}</p>
                                <p className="text-gray-600 text-sm">
                                    Responsible for full-lifecycle development, including architecture design, frontend implementation, and backend integration.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-xl font-black mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white border-2 border-black rounded font-medium text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                                        style={{ borderColor: project.color }}
                                    >
                                        {tech}
                                    </span>
                                )) || (
                                        <span className="text-gray-500 italic">Tech stack not listed</span>
                                    )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="p-6 border-3 border-dashed border-black/30 rounded-xl text-center"
                        >
                            <p className="text-sm text-gray-500 mb-4">Interested in building something similar?</p>
                            <Link href="/#contact" className="inline-block px-6 py-2 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform">
                                Let's Talk
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </HomeLayout>
    );
}
