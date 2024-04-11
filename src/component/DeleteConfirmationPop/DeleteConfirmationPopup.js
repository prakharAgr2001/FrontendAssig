import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './DeleteConfirmationPopup.scss';

const DeleteConfirmationPopup = ({ onDelete, onCancel }) => {
  return (
    <div className="delete-confirmation-popup">
    <FaTimes className="close-icon" onClick={onCancel} />
      <h3>Are you sure you want to delete this person?</h3>
      <div className="buttons">
       <button onClick={onCancel} className="cancel-button">Cancel</button>
        <button onClick={onDelete} className="delete-button">Delete</button>
       
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
