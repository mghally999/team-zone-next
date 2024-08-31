import Image from "next/image";
import styles from "../../styles/IntroSection/SingleStudent.module.css";

export default function SingleStudent({ imgSrc, altText }) {
    return (
        <Image className={styles.studentImg} src={imgSrc} alt={altText} width={50} height={50} />
    );
}
