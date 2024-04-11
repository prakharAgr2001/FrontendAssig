import React, { useState } from 'react';
import './UserCard.scss';
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import DeleteConfirmationPopup from '../DeleteConfirmationPop/DeleteConfirmationPopup';

const UserCard = ({ person, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({ ...person });
  const [originalInfo, setOriginalInfo] = useState({ ...person });
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleEdit = (e) => {
    
    e.stopPropagation();
    setIsEditing(true);
  };
  const handleDelete = (e) => {
   
    e.stopPropagation();
    setShowDeleteConfirmation(true);
  };


  const handleConfirmDelete = (e) => {
    e.stopPropagation();
    onDelete(person.id);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = (e) => {
    e.stopPropagation();
    setShowDeleteConfirmation(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({
      ...editedInfo,
      [name]: value
    });
  };

  const handleSave = (e) => {
   
    e.stopPropagation();
    onUpdate(person.id, editedInfo);
    setIsEditing(false);
  };

  const handleDontSave = (e) => {
    
    e.stopPropagation();
    setEditedInfo({ ...originalInfo });
    setIsEditing(false);
  };

  return (
    <div className="card">
    
      <div className="card-header">
        <img src={person.picture} alt="Icon" />
        
       
        {isEditing ? (
          
            <input
              type="text"
              name="first"
              value={editedInfo.first}
              onChange={handleChange}
             
            />
           
          ) : (
            <span><h2>{person.first}</h2></span>
          )}
      </div>
      <div className="card-info">
        <div className='fields'>
          <label>Age</label>
          {isEditing ? (
            <input
              type="text"
              name="dob"
              value={editedInfo.dob}
              onChange={handleChange}
            />
          ) : (
            <span>{new Date().getFullYear() - new Date(person.dob).getFullYear()} Years</span>
          )}
        </div>
        <div className='fields'>
          <label>Gender</label>
          {isEditing ? (
            <select
              name="gender"
              value={editedInfo.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <span>{person.gender}</span>
          )}
        </div>
        <div className='fields'>
          <label>Country</label>
          {isEditing ? (
            <input
              type="text"
              name="country"
              value={editedInfo.country}
              onChange={handleChange}
            />
          ) : (
            <span>{person.country}</span>
          )}
        </div>
      </div>
      <div className='description'>
        <div className='fields'>
          <label className='l'>Description</label>
          {isEditing ? (
            <textarea
              type="text"
              name="description"
              value={editedInfo.description}
              onChange={handleChange}
              className="dd"
            />
          ) : (
            <p>{person.description}</p>
          )}
        </div>
      </div>
      <div className="card-footer">
        {isEditing ? (
          <button onClick={(e) => handleSave(e)} className="circular-button"> <FaCheck id="save-icon" /></button>
        ) : (
          <button className="edit-icon" onClick={(e) => handleEdit(e)}><FaEdit id="edit-icon" />
</button>
        )}
      </div>
      {showDeleteConfirmation && (
        <DeleteConfirmationPopup onDelete={(e) => handleConfirmDelete(e)} onCancel={(e) => handleCancelDelete(e)} />
      )}
      {isEditing ? (
        <button onClick={(e) => handleDontSave(e)}><FaTimes id="times-icon" /></button>
      ) : (
        <button onClick={(e) => handleDelete(e)}><FaTrash id="trash-icon" /></button>
      )}
    </div>
  );
};

export default UserCard;
