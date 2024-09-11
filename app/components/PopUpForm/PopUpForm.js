import React, { useState, useEffect } from "react";
import styles from "../../styles/PopUpForm/PopUpForm.module.css";

export default function PopupForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission

    const formattedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      age: formData.age.trim(),
      gender:
        formData.gender.charAt(0).toUpperCase() +
        formData.gender.slice(1).toLowerCase().trim(),
    };

    const whatsappMessage =
      "Name: " +
      formattedData.name.trim() +
      "\n" +
      "Email: " +
      formattedData.email.trim() +
      "\n" +
      "Phone: " +
      formattedData.phoneNumber.trim() +
      "\n" +
      "Age: " +
      formattedData.age.trim() +
      "\n" +
      "Gender: " +
      formattedData.gender.trim();

    const whatsappLink = `https://wa.me/971508272111?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");

    onClose(); // Closes the popup form
  };

  if (!show) return null;

  return (
    <>
      <div className={styles.popupOverlay} onClick={onClose}></div>
      <div className={styles.popup}>
        <div className={styles.popupClose} onClick={onClose}>
          &times;
        </div>
        <div className={styles.popupTextBox}>
          <h2 className={styles.popupHeading}>JOIN US NOW</h2>
          <form className={styles.popupForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
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
                className={styles.popupInput}
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
                type="tel"
                placeholder="Mobile number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
                type="number"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <select
                className={styles.popupInput}
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button className={styles.popupButton} type="submit">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
