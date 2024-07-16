import React from "react";
import styles from "@css/AwarenessTest.module.css";
import Image from "next/image";
import teamAhead from "@images/team-ahead.svg";

const AwarenessTest = () => {
    return (
        <section className={`${styles.section} align-center`}>
            <div>We take privacy seriously</div>
            <h1>Before you get started</h1>
            <div>
                "We won't share your answers with anyone (and won't ever tell
                you which friends said what about you)"
            </div>
            <div className={`${styles.svgContainer} align-center`}><span>with love,</span> <Image src={teamAhead} width={150} height={30} alt="Team ahead"/></div>
            <button>Start a test</button>
            <div>Take only 5 minutes</div>
        </section>
    );
};

export default AwarenessTest;

