import React, { useEffect, useState } from 'react';
import Card from './Card';

const ShowUser = ({ setuser }) => {
  const [users, setusers] = useState([]);

  const fetchuser = () => {
    fetch('http://127.0.0.1:8000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setusers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    fetchuser();
  }, []);

  const deleteuser = (userid) => {
    fetch(`http://127.0.0.1:8000/api/users/delete/${userid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => fetchuser())
      .catch(error => console.error('Error deleting user:', error));
  };

  const edituser = (userid) => {
    setuser(userid);
  };

  return (
    <div className='h-auto p-4'>
      <p className='text-2xl font-bold mb-4'>Welcome to the DMS, Ayush</p>
      <div className='flex flex-wrap gap-4'>
        {users.map(user => (
          <Card 
            key={user.id}
            user={user}
            onDelete={() => deleteuser(user.id)}
            onEdit={() => edituser(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowUser;
