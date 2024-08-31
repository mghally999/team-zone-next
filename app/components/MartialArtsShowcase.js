import Image from 'next/image';
import styles from "../styles/MartialArtsShowcase.module.css";

export default function MartialArtsShowcase() {
    return (
        <section className={styles.sectionMartialArts}>
            <div className={styles.martialArts}>
                <div className={styles.martialArtsBox}>
                    <h1 className={styles.headingPrimaryMartial}>
                        MARTIAL ARTS FOR ADULTS <br />
                        <span>UNLEASH YOUR INNER WARRIOR</span>
                    </h1>
                    <h1 className={styles.headingPrimaryMartialTwo}>
                        MASTER MARTIAL ARTS WITH THE BEST TRAINERS: <br />
                    </h1><br />
                    <ul>
                        <li>BJJ</li>
                        <li>Grappling</li>
                        <li>Boxing</li>
                    </ul>
                    {/* <button className="btn btn--form" type="submit">Book Now</button> */}
                </div>
                <div className={styles.martialImgBox}>
                    <Image
                        src="/img3.jpeg"
                        alt="Martial Arts"
                        layout="responsive"
                        width={500} // Replace with actual width of your image
                        height={300} // Replace with actual height of your image
                        className={styles.martialImg}
                    />
                </div>
            </div>
        </section>
    );
}
