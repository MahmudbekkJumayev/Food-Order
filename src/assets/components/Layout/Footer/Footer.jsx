import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["logo"]}>Versal</div>
        <ul className={styles["footer-links"]}>
          <li>Contacts</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Vacancies</li>
        </ul>
        <ul className={styles["social-media"]}>
          <li>Telegram</li>
          <li>Instagram</li>
          <li>You Tube</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
