import styles from '@/app/lib/components/navbar.module.css';

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            {/* 
                Essentially Three Main Buttons:
                * Home
                * Projects
                * About
            */}

            <ul className={styles.ul}>
                <li className={styles.li}><a href="/" className={styles.a}>Home</a></li>
                <li className={styles.li}><a href="/pages/projects" className={styles.a}>Projects</a></li>
                <li className={styles.li}><a href="/pages/about" className={styles.a}>About</a></li>
            </ul>
        </div>
    );
}