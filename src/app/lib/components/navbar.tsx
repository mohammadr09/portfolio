import Link from 'next/link';
import styles from '@/app/lib/components/navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/" className={styles.a}>Home</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/pages/projects" className={styles.a}>Projects</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/pages/about" className={styles.a}>About</Link>
                </li>
            </ul>
        </div>
    );
}
