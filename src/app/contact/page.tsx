"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";

export default function Contact() {
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
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>Connect with us across the digital ether.</p>
            </motion.div>

            <div className={styles.content}>
                <motion.div
                    className={styles.infoSection}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className={styles.infoItem}>
                        <h3 className={styles.infoTitle}>Email</h3>
                        <p className={styles.infoText}>hello@aether.com</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3 className={styles.infoTitle}>Studio</h3>
                        <p className={styles.infoText}>123 Digital Avenue<br />Cyber City, CC 10101</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3 className={styles.infoTitle}>Socials</h3>
                        <p className={styles.infoText}>@aether_digital</p>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formSection}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <form>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Name</label>
                            <input type="text" className={styles.input} placeholder="Your name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="Your email" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className={styles.button}>Send Message</button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
