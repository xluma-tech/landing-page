"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface MouseParallaxProps {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

export default function MouseParallax({ children, strength = 0.02, className }: MouseParallaxProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the movement
    const springX = useSpring(x, { damping: 25, stiffness: 150 });
    const springY = useSpring(y, { damping: 25, stiffness: 150 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            // Calculate distance from center (-0.5 to 0.5)
            const xRelative = (e.clientX - innerWidth / 2);
            const yRelative = (e.clientY - innerHeight / 2);

            // Apply strength factor
            x.set(xRelative * strength);
            y.set(yRelative * strength);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y, strength]);

    return (
        <motion.div style={{ x: springX, y: springY }} className={className}>
            {children}
        </motion.div>
    );
}
