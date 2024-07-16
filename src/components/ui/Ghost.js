import React from "react";
import styles from "@css/Ghost.module.css";
import Image from "next/image";
import smile from "@images/Ghost/smile.svg";
import happy from "@images/Ghost/happy.svg";
import angry from "@images/Ghost/angry.svg";
import surprised from "@images/Ghost/surprised.svg";

const getType = (className, image) => {
    return {
        className: className,
        image: image,
    };
};

const Ghost = ({ type, scale, id }) => {
    if (!type) type = getType(styles.smile, smile);
    return (
        <div id={id} className={`${styles.ghostBox} align-center ${type.className}`} style={{scale: scale || 1}}>
            <div className={`${styles.ghost} align-center`}>
                <Image src={type.image} width={20} height={20} alt="smile" />
            </div>
            <div className="align-center">
                <div className={styles.bottom}></div>
                <div className={styles.bottom}></div>
                <div className={styles.bottom}></div>
            </div>
        </div>
    );
};

export default Ghost;
export const type = {
    happy: getType(styles.happy, happy),
    smile: getType(styles.smile, smile),
    angry: getType(styles.angry, angry),
    surprised: getType(styles.surprised, surprised)
};
