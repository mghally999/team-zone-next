import React, { useState } from "react";
import styles from "../../styles/ClassBooking/ClassBookingForm.module.css";

export default function ClassBookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        age: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trimming spaces and capitalizing the first letter of gender
        const formattedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phoneNumber: formData.phoneNumber.trim(),
            age: formData.age.trim(),
            gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).toLowerCase().trim(),
        };

        // Creating the WhatsApp message string
        const whatsappMessage = `
Name: ${formattedData.name}
Email: ${formattedData.email}
Mobile Number: ${formattedData.phoneNumber}
Age: ${formattedData.age}
Gender: ${formattedData.gender}
        `;

        // Encoding the message and opening WhatsApp
        const whatsappLink = `https://wa.me/971508272111?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className={styles.cta}>
            <div className={styles.ctaTextBox}>
                <h2 className={styles.headingSecondary}>BOOK A TRIAL CLASS</h2>
                <form className={styles.ctaForm} name="sign-up" onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input
                            id="full-name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            id="email"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${styles.formGroup} inputReset`}>
                        <input
                            id="phone-number"
                            type="tel"
                            placeholder="Mobile number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${styles.formGroup} inputReset`}>
                        <input
                            id="age"
                            type="number"
                            placeholder="Age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${styles.formGroup} inputReset`}>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Gender</option>
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
