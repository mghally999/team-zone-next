import React from 'react';
import styles from "../../styles/MartialArts/SingleService.module.css";

export default function SingleService({ service }) {
    return (
        <li className={styles.serviceItem}>
            {service}
        </li>
    );
}
