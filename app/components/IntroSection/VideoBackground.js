import styles from "../../styles/IntroSection/VideoBackground.module.css"

export default function VideoBackground() {
    return (
        <video preload="metadata" autoPlay muted loop className={styles.introVideo}>
            <source src="/team-video.MP4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}