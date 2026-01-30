import { motion, useTransform, useScroll, MotionValue } from "framer-motion";

type HighlightTextProps = {
    text: string;
    bgColor: string;
    direction?: "left" | "right";
};

const HighlightText = ({ text, bgColor = "#FFD700", direction = "left" }: HighlightTextProps) => {
    const { scrollYProgress } = useScroll();
    const highlightWidth: MotionValue<string> = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["0%", "100%"]
    );

    return (
        <span className="relative inline-block px-2 font-bold text-black">
            <motion.span
                className="absolute inset-0"
                style={{
                    backgroundColor: bgColor,
                    width: highlightWidth,
                    left: direction === "left" ? 0 : "auto",
                    right: direction === "right" ? 0 : "auto",
                    transformOrigin: direction === "left" ? "left" : "right"
                }}
            />
            <span className="z-10 relative">{text}</span>
        </span>
    );
};

export default HighlightText;