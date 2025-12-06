"use client";
import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import EtherealOrbs from "@/components/ethereal-orbs";
import ParallaxGallery from "@/components/parallax-gallery";
import DeepDive from "@/components/deep-dive";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import BackgroundTransition from "@/components/background-transition";
import SplineBackground from "@/components/spline-background";
import styles from "./page.module.css";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className={styles.main}>
      <BackgroundTransition image={activeImage} />
      <CustomCursor />
      <Hero />
      <EtherealOrbs />
      <section className={styles.story}>
        <SplineBackground />
        <div className={styles.storyContent}>
          <p>
            Beyond the visible spectrum lies a world of infinite possibility.
          </p>
          <p>
            Where form follows fantasy, and gravity is but a suggestion.
          </p>
        </div>
      </section>
      <ParallaxGallery onSelect={setActiveImage} />
      <DeepDive />
      <Footer />
    </main>
  );
}
