import React, { useContext } from "react";
import styles from "../../styles/Packages/PackagesContainer.module.css";
import SinglePackage from "./SinglePackage";
import { AppContext } from "../../context/AppContext";

export default function PackagesContainer({ openPopup }) {
  const { packages } = useContext(AppContext);

  return (
    <div
      className={`${styles.containerPackages} ${styles.gridPackages} ${styles.grid3Cols} ${styles.marginBottomMd}`}
    >
      {packages.map((pkg, index) => (
        <SinglePackage
          key={index}
          imgClass={pkg.imgClass}
          title={pkg.title}
          duration={pkg.duration}
          openPopup={openPopup}
        />
      ))}
    </div>
  );
}
