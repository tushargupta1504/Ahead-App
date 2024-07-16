import React from "react";
import styles from "@css/Footer.module.css";
import Image from "next/image";
import logo from "@images/logo.png";
import pin from "@images/Footer/pin.svg";
import mail from "@images/Footer/mail.svg";
import appstore from "@images/Hero/appstore.svg";

const Footer = () => {
    return (
        <footer className={`${styles.footer} align-center`}>
            <Image src={logo} width={50} height={50} alt="logo" />
            <div>ahead</div>
            <div className="align-center">
                <span className={`${styles.contact} align-center`}>
                    <icon className="align-center">
                        <Image
                            src={pin}
                            width={20}
                            height={20}
                            alt="location"
                        />
                    </icon>
                    <span>Augustrabe 26, 10117 Berlin</span>
                </span>
                <span className={`${styles.contact} align-center`}>
                    <icon className="align-center">
                        <Image src={mail} width={20} height={20} alt="mail" />
                    </icon>
                    <span>hi@ahead-app.com</span>
                </span>
            </div>
            <Image src={appstore} width={120} height={50} alt="appstore" />
        </footer>
    );
};

export default Footer;
