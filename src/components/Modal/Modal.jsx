import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { Button } from "react-bootstrap";
function Modal({ children, title, showModal, closeModal = () => {} }) {
  const modalRoot = document.getElementById("modal-root");
  const closeBackground = (event) => {
    console.log(event);
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return showModal
    ? ReactDOM.createPortal(
        <div className={styles.Modal} onClick={closeBackground}>
          <div className={styles.modal_content}>
            <div style={{ marginTop: 60 ,marginLeft:60}}>{children}</div>
            <div className={styles.button_modal}>
              <Button onClick={closeModal}>Ok</Button>
              <Button style={{ marginLeft: 20 }} onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null;
}

export default Modal;
