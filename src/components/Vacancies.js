import React from "react";
import styles from "@css/Vacancies.module.css";

const Vacancies = () => {
    const data = [
        {
            title: "Senior Full-Stack Developer",
            points: [
                "Full-time position",
                "Berlin or remote",
                "€65-85k, 0.5-1.50% equity share options",
            ],
        },
        {
            title: "Senior Designer",
            points: [
                "Full-time position",
                "Berlin or remote",
                "€40-55k, 0.25-1.50% equity share options",
            ]
        },
        {
            title: "Superstar Intern",
            points: [
                "Full-time position",
                "Berlin or remote",
                "€20-24k, 0.5-1.50% equity share options",
            ]
        }
    ];
    return (
        <section className={styles.section}>
            <div>Open Vacancies</div>
            <div className={`${styles.cards} align-center`}>
                {data.map((e) => (
                    <div className={styles.card} key={e.title}>
                        <h3>{e.title}</h3>
                        <ul>
                            {e.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                        <button>See Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Vacancies;
