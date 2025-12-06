"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './deep-dive.module.css';
import Image from 'next/image';
import MouseParallax from './mouse-parallax';

export default function DeepDive() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1.5, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    return (
        <section ref={containerRef} className={styles.section}>
            <div className={styles.sticky}>
                <div className={styles.visualContainer}>
                    <motion.div style={{ scale, rotate }} className={styles.visual}>
                        <Image src="/abstract-flow.png" alt="Deep Dive Visual" fill className={styles.image} />
                    </motion.div>
                    <motion.div style={{ scale: useTransform(scrollYProgress, [0.2, 0.8], [1.2, 0.8]), rotate: useTransform(scrollYProgress, [0, 1], [45, 0]) }} className={styles.visualRing} />
                    <div className={styles.glow} />
                </div>
                <div className={styles.content}>
                    <MouseParallax strength={0.03}>
                        <motion.h2 style={{ opacity }} className={styles.title}>
                            The Deep Dive
                        </motion.h2>
                    </MouseParallax>
                    <MouseParallax strength={0.015}>
                        <motion.p style={{ opacity }} className={styles.text}>
                            Immerse yourself in the unknown. <br />
                            Where texture meets emotion.
                        </motion.p>
                    </MouseParallax>
                </div>
            </div>
        </section>
    );
}
