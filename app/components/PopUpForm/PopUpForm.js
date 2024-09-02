import React, { useEffect } from "react";
import styles from "../../styles/PopUpForm/PopUpForm.module.css";

export default function PopupForm({ show, onClose }) {
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
          <form className={styles.popupForm}>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
                type="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
                type="tel"
                placeholder="Mobile number"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.popupInput}
                type="number"
                placeholder="Age"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <select className={styles.popupInput} required>
                <option value="" disabled selected>
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
