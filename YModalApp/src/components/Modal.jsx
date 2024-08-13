import React, { Children, forwardRef } from "react";
import "./Modal.css";

const Modal = forwardRef(function Modal({ children, open }, ref) {
  return (
    <div ref={ref} className={open ? "modal" : "closed-modal"}>
      <div className="modal-content">{children}</div>
    </div>
  );
});

export default Modal;
