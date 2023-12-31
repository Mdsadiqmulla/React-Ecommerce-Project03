import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const protalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElement
      )}
    </Fragment>
  );
};
export default Modal;
