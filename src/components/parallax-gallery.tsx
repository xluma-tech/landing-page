"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './parallax-gallery.module.css';
import Image from 'next/image';

const items = [
    { id: 1, src: '/abstract-flow.png', title: "LIQUIDITY", text: "Flowing through the digital ether." },
    { id: 2, src: '/silk-waves.png', title: "TEXTURE", text: "Feeling the unseen fabric of reality." },
    { id: 3, src: '/glass-shards.png', title: "REFRACTION", text: "Breaking light into infinite spectrums." },
    { id: 4, src: '/smoke-ring.png', title: "EPHEMERAL", text: "Moments that vanish before they form." },
];

export default function ParallaxGallery({ onSelect }: { onSelect: (src: string | null) => void }) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSelect = (item: typeof items[0]) => {
        setSelectedId(item.id);
        onSelect(item.src);
    };

    const handleClose = () => {
        setSelectedId(null);
        onSelect(null);
    };

    return (
        <section className={styles.gallery}>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        className={styles.card}
                        onClick={() => handleSelect(item)}
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Image src={item.src} alt={item.title} fill className={styles.image} />
                        <motion.div className={styles.overlay}>
                            <motion.h3 className={styles.title}>{item.title}</motion.h3>
                            <motion.p className={styles.text}>{item.text}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className={styles.expandedOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        {items.filter(item => item.id === selectedId).map(item => (
                            <motion.div
                                key={item.id}
                                layoutId={`card-${item.id}`}
                                className={styles.expandedCard}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className={styles.closeButton} onClick={handleClose}>✕</button>
                                <div className={styles.expandedImageContainer}>
                                    <Image src={item.src} alt={item.title} fill className={styles.image} />
                                </div>
                                <motion.div className={styles.expandedContent}>
                                    <motion.h2 className={styles.title}>{item.title}</motion.h2>
                                    <motion.p className={styles.text}>{item.text}</motion.p>
                                    <p style={{ marginTop: '1rem', opacity: 0.6 }}>
                                        This is the expanded view. The background of the website has now adapted to match this card's theme.
                                        Explore the details and immerse yourself in the visual experience.
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
