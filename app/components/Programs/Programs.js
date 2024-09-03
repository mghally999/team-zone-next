import React, { useContext } from "react";
import TabsContainer from "./TabsContainer";
import TabContent from "./TabContent";
import PopupForm from "../PopUpForm/PopUpForm";
import classNames from "classnames";
import styles from "../../styles/Programs/Programs.module.css";
import { AppContext } from "../../context/AppContext";

export default function Programs() {
  const { isPopupVisible, openPopup, closePopup } = useContext(AppContext);

  const bookingButton = classNames(
    styles.btn,
    styles["btn--full"],
    styles["margin-right-sm"]
  );

  return (
    <section className={styles.sectionPrograms}>
      <h1 className={styles.headingPrimaryPrograms}>
        ADAPTIVE PROGRAM FOR ALL AGES
      </h1>
      <div className={styles.programs}>
        <div className={styles.heroTextBox2nd}>
          <TabsContainer />
          <button className={bookingButton} type="button" onClick={openPopup}>
            BOOK A TRIAL CLASS
          </button>
        </div>
        <div className={styles.heroImgBox}>
          <div className={styles.imagePlaceholder}>[Photo Placeholder]</div>
          <TabContent />
        </div>
      </div>
      <PopupForm show={isPopupVisible} onClose={closePopup} />
    </section>
  );
}
