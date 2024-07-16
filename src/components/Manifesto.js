import React from "react";
import styles from "@css/Manifesto.module.css";
import Ghost, { type } from "@ui/Ghost";
import Badge from "@ui/Badge";
import Circle from "@ui/Circle";
import Leaf from "@ui/Leaf";
import SectionDivision from "./SectionDivision";

const Manifesto = () => {
    return (
        <>
            <section className={`${styles.section} align-center`}>
                <div className={`${styles.left} align-center`}>
                    <div>Build out of frustration</div>
                    <div>Meet the ahead app</div>
                    <div className="align-center">
                        <Badge />
                        <div className={`${styles.ghostBox} align-center`}>
                            <Ghost type={type.smile} scale={1.3} />
                        </div>
                        <Circle
                            size={200}
                            backgroundColor={"#ff45001c"}
                            position={{ top: "18em", left: "-3.5em" }}
                        />
                        <Circle
                            size={20}
                            backgroundColor={"#f2c7c8"}
                            position={{ top: "19em", left: "24em" }}
                        />
                        <Leaf
                            position={{
                                top: "-4.5em",
                                left: "10em",
                                rotate: "-20deg",
                            }}
                        />
                        <Circle
                            size={45}
                            backgroundColor={"#ec685c"}
                            position={{
                                top: "24.5em",
                                left: "20em",
                                border: "15px solid #f6d3bd",
                            }}
                        />
                    </div>
                </div>
                <div className={`${styles.right} align-center`}>
                    <div>
                        <Leaf
                            position={{
                                top: "-4em",
                                left: "2em",
                                rotate: "-20deg",
                                scale: "1.3",
                            }}
                        />
                    </div>
                    <div className={`${styles.content} align-center`}>
                        <div>
                            A personalized pocket coach that provodes
                            bite-sized, science-driven tools to boost emotional
                            intelligence.
                        </div>
                        <div>
                            Think of it as a pocket cheerleader towards a
                            better, more fulfilling.
                        </div>
                    </div>
                </div>
                <div></div>
            </section>
            <SectionDivision
                title="Be the best you with EQ"
                desc1={`Not having your own emotions under control might be holding you back.`}
                desc2={`Additionally, not understanding those of others stops you from
                being parent, friend you can be.`}
            />
        </>
    );
};

export default Manifesto;
