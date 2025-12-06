"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './ethereal-orbs.module.css';
import Image from 'next/image';
import MouseParallax from './mouse-parallax';

function GeometricShape({
    className,
    speed = 1,
    rotateSpeed = 1,
    scaleRange = [0.8, 1.2],
    zRange = [0, 0],
    progress
}: {
    className: string,
    speed?: number,
    rotateSpeed?: number,
    scaleRange?: [number, number],
    zRange?: [number, number],
    progress: MotionValue<number>
}) {
    const y = useTransform(progress, [0, 1], ['0%', `${speed * 100}%`]);
    const rotate = useTransform(progress, [0, 1], [0, rotateSpeed * 360]);
    const scale = useTransform(progress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);
    const z = useTransform(progress, [0, 1], [zRange[0], zRange[1]]);

    return (
        <motion.div style={{ y, rotate, scale, z }} className={`${className} ${styles.shapeContainer}`}>
            <motion.div
                className={`${styles.ring} ${styles.ring1}`}
                animate={{ rotateX: 360, rotateY: 180 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={`${styles.ring} ${styles.ring2}`}
                animate={{ rotateX: -360, rotateZ: 90 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={`${styles.ring} ${styles.ring3}`}
                animate={{ rotateY: 360, rotateX: 45 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
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
                {/* Background Layer - Slow, Far Z */}
                <GeometricShape className={styles.orbBack1} speed={-0.2} rotateSpeed={0.5} zRange={[-200, -100]} progress={scrollYProgress} />
                <GeometricShape className={styles.orbBack2} speed={0.3} rotateSpeed={-0.3} zRange={[-300, -150]} progress={scrollYProgress} />

                {/* Midground Layer - Normal Speed, Mid Z */}
                <GeometricShape className={styles.orbMid1} speed={-0.8} rotateSpeed={1} zRange={[-50, 50]} progress={scrollYProgress} />
                <GeometricShape className={styles.orbMid2} speed={0.6} rotateSpeed={-0.8} zRange={[0, 100]} progress={scrollYProgress} />

                {/* Foreground Layer - Fast, Close Z */}
                <GeometricShape className={styles.orbFront1} speed={-1.5} rotateSpeed={0.2} scaleRange={[1, 1.5]} zRange={[100, 300]} progress={scrollYProgress} />

                <div className={styles.content}>
                    <MouseParallax strength={0.03}>
                        <motion.h2 style={{ opacity }} className={styles.heading}>Geometric Harmony</motion.h2>
                    </MouseParallax>
                    <MouseParallax strength={0.015}>
                        <motion.p style={{ opacity }} className={styles.text}>
                            Structures born from pure logic. <br />
                            Rotating in the void of digital space.
                        </motion.p>
                    </MouseParallax>
                </div>
            </div>
        </section>
    );
}
