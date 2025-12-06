import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h2>AETHER</h2>
                        <p>A Life Extraordinary</p>
                    </div>
                    <div className={styles.newsletter}>
                        <h3>Stay Connected</h3>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Enter your email" />
                            <button>Join</button>
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottomSection}>
                    <div className={styles.links}>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">ArtStation</a>
                    </div>
                    <p className={styles.copy}>&copy; 2024 Aether. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
