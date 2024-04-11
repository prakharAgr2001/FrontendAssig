import React, { useState, useEffect } from 'react';
import Dropdown from './component/Dropdown/Dropdown';
import UserCard from './component/UserCard/UserCard';
import './User.scss';
import SearchBar from './component/SearchBar/SearchBar';
function User() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
     const [openDropdown, setOpenDropdown] = useState(null);
     const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
  
    fetch('celebrities.json')
      .then(response => response.json())
      .then(data => {
        
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  const handleUserSelect = (userId) => {
    const selected = users.find(user => user.id === userId);
    setSelectedUser(selected);
  };
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const updateUser = (id, updatedInfo) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedInfo };
      }
      return user;
    }));
  };


  const handleSearchInputChange = newValue => {
    setSearchQuery(newValue);
  };



  const filteredUsers = users.filter(user =>
   user.first && user.first.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='user'>
      <h1>List View</h1>
      <SearchBar value={searchQuery} onChange={handleSearchInputChange}/>
    <ul>
      {filteredUsers.map(user => (
        <li key={user.id}>
          {user.name}
          <Dropdown
             buttonText={user.first}
             userImage ={user.picture}
             content={
            <>
                <UserCard person={user} onDelete={deleteUser} onUpdate={updateUser}/>
            </>}
          />
          
        </li>
      ))}
    </ul>
  </div>

  )
}

export default User
