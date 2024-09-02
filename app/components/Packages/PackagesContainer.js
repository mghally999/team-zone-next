import React from 'react';
import styles from '../../styles/Packages/PackagesContainer.module.css';
import SinglePackage from './SinglePackage';

export default function PackagesContainer({ openPopup }) {
    const packages = [
        {
            imgClass: 'packageImg1',
            title: 'Monthly Package',
            duration: '1 Month',
        },
        {
            imgClass: 'packageImg2',
            title: '3-Month Package',
            duration: '3 Months',
        },
        {
            imgClass: 'packageImg3',
            title: 'Annual Package',
            duration: '1 Year',
        },
    ];

    return (
        <div className={`${styles.containerPackages} ${styles.gridPackages} ${styles.grid3Cols} ${styles.marginBottomMd}`}>
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
