"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@css/Emotions.module.css";
import angry from "@images/Emotions/angry.png";
import flushed from "@images/Emotions/flushed.png";
import unamused from "@images/Emotions/unamused.png";
import grimacing from "@images/Emotions/grimacing.png";
import raisedEyebrow from "@images/Emotions/raised-eyebrow.png";

const EmotionCards = () => {
    const [data, setData] = useState([
        {
            icon: angry,
            title: "You argue with a colleague",
            desc: "You get angry and defensive, instead of staying open and working towards common ground.",
            style: { backgroundColor: "#efecff", fontWeight: 400 },
        },
        {
            icon: flushed,
            title: "You get a promotion at work",
            desc: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities",
            style: {
                backgroundColor: "#6441ef",
                color: "white",
                transform: "rotate(-5deg)",
            },
        },
        {
            icon: raisedEyebrow,
            title: "You attend a class reunion",
            desc: "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others",
            style: { backgroundColor: "#ffefd6", fontWeight: 400 },
        },
        {
            icon: unamused,
            title: "You are at a lively dinner party",
            desc: "You play on your phone, instead of confidently approaching strangers and striking up a chat",
            style: { backgroundColor: "#fefbec" },
        },
        {
            icon: grimacing,
            title: "You hit dead end in a negotiation",
            desc: "You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.",
            style: { backgroundColor: "#f1f8f7" },
        },
    ]);
    return data.map((e) => (
        <div
            key={e.title}
            className={`${styles.card} align-center`}
            style={{ fontWeight: 300, ...e.style }}
        >
            <Image src={e.icon} width={35} height={35} alt="emoji" />
            <div>{e.title}</div>
            <div>{e.desc}</div>
        </div>
    ));
};

export default EmotionCards;