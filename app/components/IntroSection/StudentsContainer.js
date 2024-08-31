import styles from "../../styles/IntroSection/StudentsContainer.module.css";
import SingleStudent from "./SingleStudent";

const students = [
    { imgSrc: "/customers/customer-1.jpg", altText: "Customer photo 1" },
    { imgSrc: "/customers/customer-2.jpg", altText: "Customer photo 2" },
    { imgSrc: "/customers/customer-3.jpg", altText: "Customer photo 3" },
    { imgSrc: "/customers/customer-4.jpg", altText: "Customer photo 4" },
    { imgSrc: "/customers/customer-5.jpg", altText: "Customer photo 5" },
    { imgSrc: "/customers/customer-6.jpg", altText: "Customer photo 6" },
];

export default function StudentsContainer() {
    return (
        <div className={styles.studentsContainer}>
            <div className={styles.studentImgs}>
                {students.map((student, index) => (
                    <SingleStudent
                        key={index}
                        imgSrc={student.imgSrc}
                        altText={student.altText}
                    />
                ))}
            </div>
            <p className={styles.studentsNumbers}><span>50+</span> Students</p>
        </div>
    );
}
