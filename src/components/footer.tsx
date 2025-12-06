import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <h2>AETHER</h2>
                    <p>A Life Extraordinary</p>
                </div>
                <div className={styles.links}>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className={styles.copy}>
                    &copy; {new Date().getFullYear()} Aether. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
