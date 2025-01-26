import React from 'react';
import './Modal.css';

const Modal = ({ message, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{message}</h2>
        <div className="modal-buttons">
          <button onClick={onClose}>Close</button>
          {onConfirm && <button onClick={onConfirm}>Confirm</button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
