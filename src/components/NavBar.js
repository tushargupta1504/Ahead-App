"use client";

import React, { useEffect } from "react";
import styles from "@css/NavBar.module.css";
import Image from "next/image";
import logo from "@images/logo.png";

const NavBar = () => {
    useEffect(() => {
        let nav = document.querySelector(`.${styles.nav}`);

        // Initial check
        if (document.documentElement.scrollTop === 0)
            nav.classList.remove(styles.scrolled);
        const handler = () => {
            if (document.documentElement.scrollTop === 0)
                nav.classList.remove(styles.scrolled);
            else nav.classList.add(styles.scrolled);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);
    return (
        <nav className={`${styles.nav} ${styles.scrolled} align-center`}>
            <a href="#">
                <Image src={logo} width={50} height={50} alt="icon" />
            </a>
            <span className={`${styles.navLinks} align-center`}>
                <span>Emotions</span>
                <span>Manifesto</span>
                <span>Self-awareness test</span>
                <span>Work with us</span>
            </span>
            <button>Download app</button>
        </nav>
    );
};

export default NavBar;
