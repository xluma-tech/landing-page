"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './parallax-gallery.module.css';
import Image from 'next/image';
import MouseParallax from './mouse-parallax';

const images = [
    { src: '/abstract-flow.png', title: "LIQUIDITY", text: "Flowing through the digital ether." },
    { src: '/silk-waves.png', title: "TEXTURE", text: "Feeling the unseen fabric of reality." },
    { src: '/glass-shards.png', title: "REFRACTION", text: "Breaking light into infinite spectrums." },
    { src: '/smoke-ring.png', title: "EPHEMERAL", text: "Moments that vanish before they form." },
];

export default function ParallaxGallery() {
    return (
        <section className={styles.gallery}>
            {images.map((img, i) => (
                <GalleryItem key={i} {...img} />
            ))}
        </section>
    );
}

function GalleryItem({ src, title, text }: { src: string, title: string, text: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]); // Subtle zoom
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]); // Text opacity
    const textY = useTransform(scrollYProgress, [0.2, 0.8], ['50px', '-50px']);

    return (
        <div ref={ref} className={styles.itemWrapper}>
            <motion.div style={{ scale }} className={styles.imageContainer}>
                <Image src={src} alt={title} fill className={styles.image} quality={100} />
            </motion.div>
            <div className={styles.overlay} />
            <div className={styles.textContainer}>
                <MouseParallax strength={0.04}>
                    <motion.h2 style={{ y: textY, opacity }}>{title}</motion.h2>
                </MouseParallax>
                <MouseParallax strength={0.02}>
                    <motion.p style={{ y: textY, opacity }}>{text}</motion.p>
                </MouseParallax>
            </div>
        </div>
    );
}
