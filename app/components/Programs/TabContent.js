import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../../styles/Programs/TabContent.module.css";

export default function TabContent() {
  const { content, currentTab } = useContext(AppContext);
  const currentContent = content[currentTab]; // Get the current tab's content

  return (
    <div className={styles.tabContent}>
      <p>{currentContent.sentence}</p>
      <ul>
        {content[currentTab].list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
