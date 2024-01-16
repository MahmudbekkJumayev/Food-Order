import React, { useCallback, useContext, useState } from "react";
import styles from "./KorzinkaModal.module.css";
import ModalProvider from "../../Modals/Modal";
import appContext from "../../../context/appContext";

const KarzinkaModal = (props) => {
  const ctx = useContext(appContext);
  const overalPrice = ctx.korzinka
    .reduce((acc, e) => {
      const price = parseFloat(e.price) * parseInt(e.count);
      return acc + price;
    }, 0)
    .toFixed(3);

  const deleteOrder = (id) => {
    ctx.setKorzinka((prev) => prev.filter((e) => e.id !== id));
  };

  const orderFood = (data) => {
    ctx.setKorzinka([]);
    props.isOpen();
    props.setOrder(true);
  };
  return (
    <ModalProvider isOpen={props.isOpen}>
      <div className={styles["box"]}>
        <table className={styles["table"]}>
          <thead>
            <tr className={styles["thead"]}>
              <th>No</th>
              <th>Buyurtma nomi</th>
              <th>Narxi</th>
              <th>Buyurtma soni</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles["tbody"]}>
            {ctx.korzinka.map((p, i) => {
              return (
                <tr key={p.id} className={styles["item"]}>
                  <td>{i + 1}.</td>
                  <td>
                    {"  "}
                    {p.name}
                    {"  "}
                  </td>
                  <td>
                    {p.price} {" so'm"}
                  </td>
                  <td>{p.count}</td>
                  <td>
                    <button onClick={deleteOrder.bind(null, p.id)}>del</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles["overal"]}>
          <span className={styles["overal-price"]}>
            {"Umumiy "} <strong>{overalPrice}</strong> {" so'm"}
          </span>
          <button
            className={styles["to-order"]}
            onClick={orderFood.bind(null, ctx.korzinka)}
            disabled={ctx.korzinka.length > 0 ? false : true}
          >
            Buyurtma berish
          </button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default KarzinkaModal;
