"use client";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";

const galleryItems = [
    {
        id: 1,
        title: "Neon Dreams",
        description: "A journey through the synthetic cityscape.",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Digital Void",
        description: "Exploring the empty spaces between data.",
        image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Cyber Zen",
        description: "Finding peace in the machine.",
        image: "https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Abstract Reality",
        description: "Where code meets consciousness.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Future Nostalgia",
        description: "Memories of a time yet to come.",
        image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Electric Soul",
        description: "The spark within the silicon.",
        image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1000&auto=format&fit=crop"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Gallery() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <main className={styles.container}>
            <motion.div
                className={styles.header}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ y, opacity }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className={styles.title}>Visual Archives</h1>
                <p className={styles.subtitle}>A collection of digital artifacts and ethereal moments.</p>
            </motion.div>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className={styles.card}
                        variants={itemVariants}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
