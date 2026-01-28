import { motion, MotionValue } from "framer-motion";

export default function PageGap({ height, ref }: { height: MotionValue<number>, ref: React.RefObject<null> }) {
    return (
        <motion.div
            ref={ref}
            style={{ height }}
            className="page-gap"
        />
    );
}
