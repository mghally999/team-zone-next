import React, { useContext } from "react";
import classNames from "classnames";
import styles from "../../styles/IntroSection/IntroText.module.css";
import { AppContext } from "../../context/AppContext";
import PopupForm from "../PopUpForm/PopUpForm";

export default function IntroText() {
  const { isPopupVisible, openPopup, closePopup } = useContext(AppContext);

  const bookingButton = classNames(
    styles.btn,
    styles["btn--full"],
    styles["margin-right-sm"]
  );

  return (
    <div className={styles.introTextBox}>
      <h1 className={styles.headingPrimaryIntro}>
        Your Hub For <span>Transformation</span>
      </h1>
      <p className={styles.heroDescription}>
        More than a sports academy, we are a <span>Community</span> dedicated to
        your growth and development
      </p>
      <button className={bookingButton} onClick={openPopup}>
        Start Today
      </button>

      <PopupForm show={isPopupVisible} onClose={closePopup} />
    </div>
  );
}
