import Image from "next/image";
import Hero from "@/components/hero";
import EtherealOrbs from "@/components/ethereal-orbs";
import ParallaxGallery from "@/components/parallax-gallery";
import DeepDive from "@/components/deep-dive";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <CustomCursor />
      <Hero />
      <EtherealOrbs />
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <p>
            Beyond the visible spectrum lies a world of infinite possibility.
          </p>
          <p>
            Where form follows fantasy, and gravity is but a suggestion.
          </p>
        </div>
      </section>
      <ParallaxGallery />
      <DeepDive />
      <Footer />
    </main>
  );
}
