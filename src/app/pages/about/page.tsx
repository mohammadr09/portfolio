import Image from "next/image";
import Navbar from "@/app/lib/components/navbar";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Image
        src="/mountain.png"
        alt="Background"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.headerSection}>
        <h1>About Me</h1>
        <p>
          Learn more about my background, interests, and what I&apos;m passionate about!
        </p>
      </div>

      {/* <hr
        className={styles.hr}
        style={{
          borderColor: "rgba(255,255,255,0.25)",
          margin: "2rem auto",
          width: "60%",
        }}
      /> */}

      <div className={styles.aboutContent}>
        <p>
          I&apos;m Mohammad, a rising junior at Stuyvesant High School passionate about
          coding, math, and history.
        </p>
        <p>
          I specialize in Python, Java, and web development using React and Next.js. I
          currently work as a software engineer on StuyPulse — Stuyvesant&apos;s official
          FIRST Robotics team.
        </p>
        <p>
          I enjoy building creative, purposeful projects, whether it&apos;s a Pokedex
          generator, this very site, or other tools that blend tech and design.
        </p>
        <p>
          Outside of programming, I like studying classic texts, exploring philosophy, and
          sometimes capturing cool photos when I stumble on beautiful scenery.
        </p>
      </div>
    </div>
  );
}