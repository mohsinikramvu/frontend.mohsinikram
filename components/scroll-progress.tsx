"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const MilestoneDot = ({ position, scrollYProgress }: { position: number, scrollYProgress: any }) => {
    const backgroundColor = useTransform(
        scrollYProgress,
        (latest: any) => latest >= position ? "#66d9ef" : "#ffffff"
    )

    return (
        <motion.div
            className="absolute top-0 translate-y-1/2 translate-x-0 w-4 h-4 rounded-full border-3 border-black z-20"
            style={{
                left: `${position * 100}%`,
                transform: "translate(-50%, -60%)",
                backgroundColor
            }}
        />
    )
}

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()

    // Add spring physics for smooth animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 130,
        damping: 35,
        restDelta: 0.010
    })

    // 5 milestone positions around the track
    const milestones = [0.1, 0.3, 0.5, 0.7, 0.9]

    return (
        <div className="fixed top-0 left-0 right-0 z-100 pointer-events-none">
            {/* Progress Bar Container */}
            <div className="relative w-full h-3 bg-black">
                {/* Track */}
                <div className="absolute inset-0 bg-white border-3" />

                {/* Animated Progress Bar */}
                <motion.div
                    className="h-full bg-yellow origin-left relative border-3"
                    style={{
                        scaleX,
                        transformOrigin: "0%"
                    }}
                />

                {/* Milestone Dots */}
                {milestones.map((position, index) => (
                    <MilestoneDot
                        key={index}
                        position={position}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </div>
    )
}
