import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import appContext from "../../../context/appContext";
import KarzinkaModal from "../../UI/KorzinkaModal/KorzinkaModal";
import ModalProvider from "../../Modals/Modal";

const Navbar = () => {
  const [openKarzinka, setOpenKarzinka] = useState(false);
  const [order, setOrder] = useState(false);
  const ctx = useContext(appContext);
  const isOpen = () => {
    setOpenKarzinka(!openKarzinka);
  };
  return (
    <div className={styles["navbar"]}>
      {order && (
        <ModalProvider isOpen={() => setOrder(!order)}>
          <h2 className={styles["order"]}>Buyurtmangiz qabul qilindi...</h2>
        </ModalProvider>
      )}
      {openKarzinka && <KarzinkaModal isOpen={isOpen} setOrder={setOrder} />}
      <div className={`container ${styles["container"]}`}>
        <div className={styles["logo"]}>Versal Food</div>
        <ul className={styles["ul-links"]}>
          <li>Home</li>
          <li>Menu</li>
          <li>Services</li>
          <li>Offers</li>
        </ul>
        <div>
          <button className={`btn ${styles["karzinka-btn"]}`} onClick={isOpen}>
            Karzinka {ctx.korzinka?.length}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
