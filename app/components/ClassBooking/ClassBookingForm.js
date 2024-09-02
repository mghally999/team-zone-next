import React from "react";
import styles from "../../styles/ClassBooking/ClassBookingForm.module.css";

export default function ClassBookingForm() {
    return (
        <div className={styles.cta}>
            <div className={styles.ctaTextBox}>
                <h2 className={styles.headingSecondary}>BOOK A TRIAL CLASS</h2>
                <form className={styles.ctaForm} name="sign-up">
                    <div className={styles.formGroup}>
                        <input
                            id="full-name"
                            type="text"
                            placeholder="Name"
                            name="full-name"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            id="email"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            required
                        />
                    </div>
                    <div className={`${styles.formGroup} inputReset`}>
                        <input
                            id="phone-number"
                            type="tel"
                            placeholder="Mobile number"
                            name="phone-number"
                            required
                        />
                    </div>
                    <div className={`${styles.formGroup} inputReset`}>
                        <input
                            id="age"
                            type="number"
                            placeholder="Age"
                            name="age"
                            required
                        />
                    </div>
                    <div className={`${styles.formGroup} inputReset`}>
                        <select id="gender" name="gender" required>
                            <option value="" disabled selected>
                                Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button className={`${styles.btn} ${styles.btnForm}`} type="submit">
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
}
