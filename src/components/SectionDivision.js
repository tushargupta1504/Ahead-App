import React from "react";
import styles from "@css/SectionDivision.module.css";

const SectionDivision = ({ title, desc1, desc2 }) => {
    return (
        <div className={`${styles.section} align-center`}>
            <div>{title}</div>
            <div>{desc1}</div>
            <div>{desc2}</div>
        </div>
    );
};

export default SectionDivision;
