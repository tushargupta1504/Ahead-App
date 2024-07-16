import React from "react";
import styles from "@css/Badge.module.css";
import Image from "next/image";
import badge from "@images/badge.svg";

const Badge = ({ rank }) => {
    return (
        <div className={`${styles.badge} align-center`}>
            <div className="align-center">{ rank || 1}</div>
            <Image src={badge} width={45} height={45} alt="badge" />
        </div>
    );
};

export default Badge;

