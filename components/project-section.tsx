import { motion, useScroll, useTransform, Variants } from "framer-motion"

export default function ProjectSection() {
    const { scrollY } = useScroll()
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
        <section id="projects" className="pt-20 pb-12 px-6 md:px-12">
            <motion.div variants={itemVariants} className="mb-12">
                <h2 className="section-title">
                    Projects
                </h2>
                <motion.div
                    className="h-2 bg-primary border-2 border-black"
                    style={{ width: lineWidth }}
                />
            </motion.div>
        </section>
    )
}