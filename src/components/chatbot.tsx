"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './chatbot.module.css';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Robot Trigger */}
            <motion.div
                className={styles.robotContainer}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <iframe
                    src='https://my.spline.design/genkubgreetingrobot-4x2SrDdey4bDG6En783nA8hn/?ui_watermark=false&ui_logo=false'
                    frameBorder='0'
                    className={styles.splineCanvas}
                />
            </motion.div>

            {/* Chat Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    >
                        <div className={styles.header}>
                            <h3>Aether Bot</h3>
                            <button onClick={() => setIsOpen(false)}>✕</button>
                        </div>
                        <div className={styles.messages}>
                            <div className={styles.message + ' ' + styles.bot}>
                                Hello! I am the guardian of the void. How can I assist you today?
                            </div>
                        </div>
                        <div className={styles.inputArea}>
                            <input type="text" placeholder="Type a message..." />
                            <button>→</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
