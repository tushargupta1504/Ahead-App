import React from "react";
import styles from "@css/RateMe.module.css";
import Badge from "@ui/Badge";
import Circle from "@ui/Circle";

const RateMe = () => {
    return (
        <section className={`${styles.section} align-center`}>
            <div className="w-500">
                Let your friends, family, and co-workers (anonymously) rate your
                social skills.
            </div>
            <h1>Ever wondered what others think of you?</h1>
            <div className={`${styles.badges} align-center`}>
                <div className="align-center">
                    <Badge />
                    <div>Answer questions on your social skills</div>
                </div>
                <div className="align-center">
                    <Badge rank={2} />
                    <div>Let others anonymously answer the same questions about you</div>
                </div>
                <div className="align-center">
                    <Badge rank={3} />
                    <div>Find out where you and others see things the same way - and where not!</div>
                </div>
                <div></div>
            </div>
            <div className={`${styles.chatBox} align-center`}>
                <div>
                    <div className={styles.chat} style={{backgroundColor: "#6441ef"}}>You</div>
                    <Circle size={22} backgroundColor="#6441ef" />
                </div>
                <div>
                    <div className={styles.chat} style={{backgroundColor: "#42c1fd"}}>Anonymous 1</div>
                    <Circle size={22} backgroundColor="#42c1fd" />
                </div>
                <div>
                    <div className={styles.chat} style={{backgroundColor: "#fdb438"}}>Anonymous 2</div>
                    <Circle size={22} backgroundColor="#fdb438" />
                </div>
                <div>
                    <div className={styles.chat} style={{backgroundColor: "#57c897"}}>Anonymous 3</div>
                    <Circle size={22} backgroundColor="#57c897" />
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default RateMe;
