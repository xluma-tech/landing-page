"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function BackgroundTransition({ image }: { image: string | null }) {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -2, pointerEvents: 'none' }}>
            <AnimatePresence>
                {image && (
                    <motion.div
                        key={image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'absolute', inset: 0 }}
                    >
                        <Image
                            src={image}
                            alt="Global Background"
                            fill
                            style={{ objectFit: 'cover', filter: 'brightness(0.3)' }}
                            quality={100}
                            priority
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
