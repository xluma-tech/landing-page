"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.logo}>
                <Link href="/">AETHER</Link>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}><Link href="/">Origins</Link></li>
                <li className={styles.link}><Link href="/gallery">Gallery</Link></li>
                <li className={styles.link}><Link href="/#deep-dive">Deep Dive</Link></li>
                <li className={styles.link}><Link href="/contact">Contact</Link></li>
            </ul>
        </motion.nav>
    );
}
