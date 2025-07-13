import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

import Navbar from "@/app/lib/components/navbar";

export default function Projects() {
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
                <h1>My Projects</h1>
                <p>Here are a few things I&rsquo;ve built or am working on!</p>
            </div>

            <div className={styles.projectGrid}>
                <div className={styles.card}>
                    <h2>Portfolio Site</h2>
                    <p>The very website you&apos;re looking at! Built with <b>NextJS</b> and <b>TypeScript</b>.</p>
                    <a href="https://github.com/mohammadr09/portfolio" rel="noopener noreferrer" target="_blank">View Code</a>
                </div>

                <div className={styles.card}>
                    <h2>Simple Pokémon Site Generator</h2>
                    <p>
                        A <b>Python</b> project that reads CSV data and dynamically generates an HTML-based website. <br /> <br />
                        <em>Note that this website was created for a 10th Grade Annual CS class project and that this website is
                            hosted on the school computer.
                        </em>
                    </p>
                    <a href="https://github.com/mohammadr09/cs-pokemon-proj" rel="noopener noreferrer" target="_blank">View Code</a> <br />
                    <a href="http://marge.stuy.edu/~mrahman71/pokemon/makePokedex.py" rel="noopener noreferrer" target="_blank">View Website</a>
                </div>

                <div className={styles.card}>
                    <h2>Art Appreciation Portfolio</h2>
                    <p>
                        9th Grade Art Portfolio – built with <b>HTML</b> and <b>CSS</b> at Stuyvesant High School.
                        <br /> <br />
                        <em>Note: I am by <b>no means</b> an artist.</em>
                    </p>
                    <a href="https://github.com/mohammadr09/ArtAppPortfolio" rel="noopener noreferrer" target="_blank">View Code</a> <br />
                    <a href="https://mohammadr09.github.io/ArtAppPortfolio/src/pages/main.html" rel="noopener noreferrer" target="_blank">View Website</a>
                </div>

                <div className={styles.card}>
                    <h2>Maktabah Ibn Taymiyyah</h2>
                    <p>
                        It&apos;s a Islamic Bookstore website I made to practice and blend some skills together and learn new ones. I learned how to implement
                        Stripe and Shippo's API to retrieve shipping rates. 

                        <br /> <br />

                        It is built with <b>NextJS</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, and <b>Firebase</b> for authentication and database, along 
                        with <b>Stripe</b> and <b>Shippo's API</b> (for shipping rates).

                        <br /> <br />
                        <em>Note: This is a work in progress and is not a real website.</em>
                    </p>
                    <a href="https:/maktabahibntaymiyyah.vercel.app" rel="noopener noreferrer" target="_blank">View Website</a>
                </div>

            </div>

            <div className={styles.backLink}>
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    );
}
