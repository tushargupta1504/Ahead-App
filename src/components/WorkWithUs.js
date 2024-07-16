import React from "react";
import styles from "@css/WorkWithUs.module.css";
import Ghost, { type } from "@ui/Ghost";

const WorkWithUs = () => {
    const data = [
        {
            title: "Power through, even when the going gets tough",
            desc: "We help spot and work around whatever stands in the way, be it bad habits, fears, etc.",
        },
        {
            title: "Learn more about who your are and when you want to go",
            desc: "We ask the right questions to help you better understand why you do things the way you do.",
        },
        {
            title: "Play and grow together with others on the same journey",
            desc: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals",
        },
        {
            title: "Master how to make it happen in real life",
            desc: "We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashbacks.",
        },
        {
            title: "Learn about practical skills that you can actually use in real life",
            desc: "We teach you smart psychological techniques and habit-forming strategies that are easy to apply.",
        },
        {
            title: "Get support that's made for your needs",
            desc: "We build your personal roadmap of lessons and actions towards your goals.",
        },
    ];
    return (
        <section className={styles.section}>
            <div className={`${styles.header} align-center`}>
                <span>Work with us</span>
                <span>ahead</span>
            </div>
            <div className="align-center">
                <div className={styles.left}>
                    <div className={styles.about}>
                        <Ghost type={type.smile} scale={0.7} />
                        <h3>About</h3>
                        <div>
                            At ahead our goal is to make self-improvement fun
                            and lasting. We know there's a way how to make it
                            work. And that's what aHead is all about!
                        </div>
                    </div>
                    <div className={styles.product}>
                        <h3>Product</h3>
                        <div>
                            Sure, you could spend ages reading books or sitting
                            in seminars on how to become a better spouse,
                            parent, or manager - like we did...
                        </div>
                    </div>
                </div>
                <div className={`${styles.right} wrapper align-center`}>
                    {data.map((e, i) => (
                        <div key={i} className={styles.card}>
                            <h5>{e.title}</h5>
                            <div>{e.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;
