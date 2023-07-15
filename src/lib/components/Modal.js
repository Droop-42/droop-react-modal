import React from "react";
import './Modal.css';
import closeIcon from './close.svg';

const Modal = ({ setIsOpen, children }) => {
  return (
    <div>
      <div className="backGr" onClick={() => setIsOpen(false)} />
      <div className="modal">
          <img src ={closeIcon} className="closeBtn" alt="close btn" onClick={() => setIsOpen(false)}/>
          <div className="modalContent">
            {children}
          </div>
      </div>
    </div>
  );
};

export default Modal;