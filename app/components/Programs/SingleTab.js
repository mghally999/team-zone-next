import React from "react";
import styles from "../../styles/Programs/SingleTab.module.css";

export default function SingleTab({ label, isActive, onHover }) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onMouseOver={onHover}
    >
      {label}
    </button>
  );
}
