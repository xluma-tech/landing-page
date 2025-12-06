"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './ethereal-orbs.module.css';
import Image from 'next/image';
import MouseParallax from './mouse-parallax';

function Orb({
    src,
    className,
    speed = 1,
    rotateSpeed = 1,
    scaleRange = [0.8, 1.2],
    progress
}: {
    src: string,
    className: string,
    speed?: number,
    rotateSpeed?: number,
    scaleRange?: [number, number],
    progress: MotionValue<number>
}) {
    const y = useTransform(progress, [0, 1], ['0%', `${speed * 100}%`]);
    const rotate = useTransform(progress, [0, 1], [0, rotateSpeed * 360]);
    const scale = useTransform(progress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);

    return (
        <motion.div style={{ y, rotate, scale }} className={className}>
            <Image src={src} alt="Orb" width={500} height={500} className={styles.orbImage} />
        </motion.div>
    );
}

export default function EtherealOrbs() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 1, 0]);

    return (
        <section ref={containerRef} className={styles.section}>
            <div className={styles.sticky}>
                {/* Background Layer - Slow, Blurred */}
                <Orb src="/orb-1.png" className={styles.orbBack1} speed={-0.2} rotateSpeed={0.5} progress={scrollYProgress} />
                <Orb src="/orb-2.png" className={styles.orbBack2} speed={0.3} rotateSpeed={-0.3} progress={scrollYProgress} />

                {/* Midground Layer - Normal Speed, Sharp */}
                <Orb src="/orb-2.png" className={styles.orbMid1} speed={-0.8} rotateSpeed={1} progress={scrollYProgress} />
                <Orb src="/orb-1.png" className={styles.orbMid2} speed={0.6} rotateSpeed={-0.8} progress={scrollYProgress} />

                {/* Foreground Layer - Fast, Large */}
                <Orb src="/orb-1.png" className={styles.orbFront1} speed={-1.5} rotateSpeed={0.2} scaleRange={[1, 1.5]} progress={scrollYProgress} />

                <div className={styles.content}>
                    <MouseParallax strength={0.03}>
                        <motion.h2 style={{ opacity }} className={styles.heading}>Double Bubble</motion.h2>
                    </MouseParallax>
                    <MouseParallax strength={0.015}>
                        <motion.p style={{ opacity }} className={styles.text}>
                            Suspended in time, floating in space. <br />
                            The ethereal dance of light and shadow.
                        </motion.p>
                    </MouseParallax>
                </div>
            </div>
        </section>
    );
}
