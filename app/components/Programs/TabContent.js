import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../../styles/Programs/TabContent.module.css";

const TabContent = () => {
  const { content, currentTab } = useContext(AppContext);

  return (
    <div className={styles.tabContent}>
      <p>{content[currentTab].sentence}</p>
      <ul>
        {content[currentTab].list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TabContent;
