import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import SingleTab from './SingleTab';
import styles from "../../styles/Programs/TabsContainer.module.css";

export default function TabsContainer() {
    const { content, currentTab, setCurrentTab } = useContext(AppContext);

    const handleHover = (index) => {
        setCurrentTab(index);
    };

    return (
        <div className={styles.tabs}>
            <menu className={styles.menu}>
                {content.map((tab, index) => (
                    <SingleTab
                        key={index}
                        label={tab.label}
                        isActive={currentTab === index}
                        onHover={() => handleHover(index)}
                    />
                ))}
            </menu>
        </div>
    );
}
