import React, { useContext } from "react";
import TabsContainer from "./TabsContainer";
import TabContent from "./TabContent";
import PopupForm from "../PopUpForm/PopUpForm";
import classNames from "classnames";
import styles from "../../styles/Programs/Programs.module.css";
import { AppContext } from "../../context/AppContext";
import Image from "next/image";

export default function Programs() {
  const { isPopupVisible, openPopup, closePopup, content, currentTab } =
    useContext(AppContext);

  const bookingButton = classNames(
    styles.btn,
    styles["btn--full"],
    styles["margin-right-sm"]
  );

  return (
    <section className={styles.sectionPrograms}>
      <h1 className={styles.headingPrimaryPrograms}>
        CUSTOMIZED PROGRAMS FOR ALL AGES
      </h1>
      <div className={styles.programs}>
        <div className={styles.heroTextBox2nd}>
          <TabsContainer />
          <button className={bookingButton} type="button" onClick={openPopup}>
            BOOK A TRIAL CLASS
          </button>
        </div>
        <div className={styles.heroImgBox}>
          <Image
            src={content[currentTab].img}
            alt={content[currentTab].label}
            width={754}
            height={400}
            objectFit="cover"
            className={styles.imagePlaceholder}
            quality={70}
            priority
          />
          <TabContent />
        </div>
      </div>
      <PopupForm show={isPopupVisible} onClose={closePopup} />
    </section>
  );
}
