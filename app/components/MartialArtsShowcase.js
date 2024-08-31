import Image from 'next/image';
import styles from "../styles/MartialArtsShowcase.module.css";

export default function MartialArtsShowcase() {
    return (
        <section className={styles.sectionHero3rd}>
            <div className={styles.hero3rd}>
                <div className={styles.heroTextBox3rd}>
                    <h1 className={styles.headingPrimary3rd}>
                        MARTIAL ARTS FOR ADULTS <br />
                        <span>UNLEASH YOUR INNER WARRIOR</span>
                    </h1>
                    <h1 className={styles.headingPrimary3rrd}>
                        MASTER MARTIAL ARTS WITH THE BEST TRAINERS: <br />
                    </h1><br />
                    <ul>
                        <li>BJJ</li>
                        <li>Grappling</li>
                        <li>Boxing</li>
                    </ul>
                    {/* <button className="btn btn--form" type="submit">Book Now</button> */}
                </div>
                <div className={styles.heroImgBox}>
                    <Image
                        src="/img3.jpeg"
                        alt="Martial Arts"
                        layout="fill"
                        className={styles.heroImg2nd}
                    />
                </div>
            </div>
        </section>
    );
}
