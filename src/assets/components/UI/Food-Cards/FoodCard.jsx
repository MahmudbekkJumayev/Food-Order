import React from "react";
import styles from "./FoodCard.module.css";
import FoodCardItem from "../Food-Card-Item/FoodCardItem";

const FoodCard = (props) => {
  if (props.data.length < 1) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className={`container`}>
      <h2 className={styles["title"]}>{props.title}</h2>
      <div className={styles.cards}>
        {props.data.map((f) => (
          <FoodCardItem data={f} key={f.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
