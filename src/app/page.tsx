import Image from "next/image";
import Navbar from "./lib/components/navbar";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Image
        src="/mountain.png"
        alt="Background"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.textContainer}>
        <div className={styles.overlayText}>
          <h1>Welcome!</h1>
          <p>
            Hi, I&apos;m Mohammad. <br />
            I&apos;m a rising-junior at Stuy.
            I specialize in Python, Java, and Web Development with React and NextJS
          </p>
        </div>

        <div className={styles.funFacts}>
          <h2>Fun Facts</h2>
          <ul>
            <li>🎓 I attend Stuyvesant High School in NYC</li>
            <li>💻 I&apos;m a software engineer at StuyPulse</li>
            <li>📐 My favorite subjects at school are math and history</li>
            <br />
            <li>☕ I&apos;m fueled by coffee most school mornings</li>
            <li>📚 I enjoy reading and studying texts</li>
            <li>🌐 I develop websites for fun and love learning new stuff</li>
            <li>📷 I occasionally like to take pictures of beautiful scenery</li>
          </ul>
        </div>
      </div>

      <div className={styles.pageLinks}>
        <Link href="/pages/projects" className={styles.linkButton}>View Projects</Link>
        <Link href="/pages/about" className={styles.linkButton}>About Me</Link>
      </div>
    </div>
  );
}
