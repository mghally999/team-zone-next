import React from 'react';
import SingleService from './SingleService';
import styles from "../../styles/MartialArts/ServicesContainer.module.css";

const services = ['BJJ', 'Grappling', 'Boxing'];

export default function ServicesContainer() {
    return (
        <ul className={styles.serviceList}>
            {services.map((service, index) => (
                <SingleService key={index} service={service} />
            ))}
        </ul>
    );
}
