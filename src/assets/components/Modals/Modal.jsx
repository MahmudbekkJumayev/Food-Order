import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalBackground = (props) => {
  return (
    <div onClick={props.isOpen} className={styles["modal-background"]}></div>
  );
};

const Modal = (props) => {
  return <div className={styles["modal"]}>{props.children}</div>;
};

const ModalProvider = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackground isOpen={props.isOpen} />,
        document.getElementById("modal-background")
      )}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ModalProvider;
