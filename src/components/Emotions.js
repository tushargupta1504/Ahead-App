import React from "react";
import styles from "@css/Emotions.module.css";
import EmotionCards from "@components/EmotionCards";

const Emotions = () => {
    return (
        <section className={styles.section}>
            <h2>Does this sound familiar...</h2>
            <div className={`${styles.cards} align-center wrapper`}>
                <EmotionCards />
            </div>
        </section>
    );
};

export default Emotions;

