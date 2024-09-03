import React from "react";
import styles from "../../styles/Programs/SingleTab.module.css";

const SingleTab = ({ label, isActive, onHover }) => (
  <button
    className={`${styles.button} ${isActive ? styles.active : ""}`}
    onMouseOver={onHover}
  >
    {label}
  </button>
);

export default SingleTab;
