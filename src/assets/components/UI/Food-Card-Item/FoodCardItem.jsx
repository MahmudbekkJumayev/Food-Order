import React, { useContext } from "react";
import styles from "./FoodCardItem.module.css";
import appContext from "../../../context/appContext";

const FoodCardItem = ({ data }) => {
  const ctx = useContext(appContext);
  const addKorzinka = (e) => {
    e.preventDefault();
    const diff = ctx.korzinka?.filter((e) => e.name === data.name);
    if (diff.length > 0) {
    } else {
      const obj = { ...data, count: 1 };
      ctx.setKorzinka((prev) => {
        return [...prev, obj];
      });
    }
  };

  return (
    <div className={styles["card-box"]}>
      <div className={styles["food-img"]}>
        <img src={data.img} alt="#" />
      </div>
      <p className={styles["food-name"]}>{data.name}</p>
      <div>
        <p className={styles["food-price"]}>{data.price} so'm</p>
      </div>
      <button
        type="button"
        className={`btn ${styles["food-order-btn"]}`}
        onClick={addKorzinka}
      >
        + korzinka
      </button>
    </div>
  );
};

export default FoodCardItem;
