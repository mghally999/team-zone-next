import React, { useContext } from "react";
import styles from "../../styles/Packages/Packages.module.css";
import PackagesText from "./PackagesText";
import PackagesContainer from "./PackagesContainer";
import PopupForm from "../PopUpForm/PopUpForm";
import { AppContext } from "../../context/AppContext";

export default function Packages() {
  const { isPopupVisible, openPopup, closePopup } = useContext(AppContext);

  return (
    <section className={styles.sectionPackages}>
      <PackagesText />
      <PackagesContainer openPopup={openPopup} />
      <PopupForm show={isPopupVisible} onClose={closePopup} />
    </section>
  );
}
