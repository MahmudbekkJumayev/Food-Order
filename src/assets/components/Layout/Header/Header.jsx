import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import headerImg from "../../../../assets/head.jpg";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["header-img"]}>
        <img src={headerImg} alt="New menu" />
      </div>
    </div>
  );
};

export default Header;
