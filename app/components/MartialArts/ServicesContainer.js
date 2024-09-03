import React, { useContext } from "react";
import SingleService from "./SingleService";
import { AppContext } from "../../context/AppContext";
import styles from "../../styles/MartialArts/ServicesContainer.module.css";

export default function ServicesContainer() {
  const { services } = useContext(AppContext);

  return (
    <ul className={styles.serviceList}>
      {services.map((service, index) => (
        <SingleService key={index} service={service} />
      ))}
    </ul>
  );
}
