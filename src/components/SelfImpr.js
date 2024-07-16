import React from "react";
import styles from "@css/SelfImpr.module.css";
import Ghost, { type } from "@ui/Ghost";
import Circle from "./ui/Circle";

const SelfImpr = () => {
    const data = [
        {
            title: "It's not as easy as 1-2-3.",
            desc: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and anything else).",
        },
        {
            title: "Old habits are hard to break.",
            desc: "And bad habits die hard. Fortunately, we give you great, science-backed techniques to use.",
        },
        {
            title: "You and your motivation don't have a long-term relationship.",
            desc: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable excercises will help you stick to your goals.",
        },
        {
            title: "Books just don't offer practical solutions.",
            desc: "Remeber when you learn to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
        },
        {
            title: "Inspiration is great, but then what.",
            desc: "We make sure your energy from all the content you consume does not fizzle out.",
        },
    ];
    return (
        <section className={styles.section}>
            <div className="w-500">
                Wrong with self-improvement & how we're fixing it.
            </div>
            <div className={`${styles.header} align-center`}>
                <span>Self-improvement. Ugh.</span>
                <Ghost id="self-impr-g" type={type.surprised} scale={0.8} />
            </div>
            <div className={`${styles.content} wrapper`}>
                {data.map((e, n) => (
                    <div class={`${styles.card} align-center`}>
                        <Circle backgroundColor="#6340ee" size={15} />
                        <div className={styles.cardContent}>
                            <h4>{e.title}</h4>
                            <div>{e.desc}</div>
                        </div>
                    </div>
                ))}
                <div></div>
            </div>
        </section>
    );
};

export default SelfImpr;

