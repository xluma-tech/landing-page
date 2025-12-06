"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './hero.module.css';
import Image from 'next/image';
import MouseParallax from './mouse-parallax';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className={styles.container}>
            <motion.div style={{ y, opacity }} className={styles.background}>
                <Image
                    src="/hero-bg.png"
                    alt="Aether Background"
                    fill
                    className={styles.image}
                    priority
                    quality={100}
                />
                <div className={styles.overlay} />
            </motion.div>

            {/* Floating Particles */}
            <div className={styles.particles}>
                {mounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.particle}
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [null, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Central Glow */}
            <motion.div
                className={styles.glow}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Smoky Animation */}
            <motion.div
                className={styles.smokeContainer}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/smoke-ring.png"
                    alt="Smoke"
                    width={800}
                    height={800}
                    className={styles.smokeImage}
                />
            </motion.div>
            <motion.div
                className={styles.smokeContainer}
                initial={{ scale: 1.2, opacity: 0.4 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/smoke-ring.png"
                    alt="Smoke Layer"
                    width={800}
                    height={800}
                    className={styles.smokeImage}
                />
            </motion.div>

            <div className={styles.content}>
                <MouseParallax strength={0.02}>
                    <motion.h1
                        style={{ y: textY, opacity: textOpacity }}
                        className={styles.title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        AETHER
                    </motion.h1>
                </MouseParallax>
                <MouseParallax strength={0.01}>
                    <motion.p
                        style={{ y: textY, opacity: textOpacity }}
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        A Life Extraordinary
                    </motion.p>
                </MouseParallax>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className={styles.scrollLine} />
                <span>Scroll</span>
            </motion.div>
        </div>
    );
}
