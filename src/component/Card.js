import React from 'react';
import userlogo from '../assest/user.jpg'; // Make sure the path to the image is correct
import { Link } from 'react-router-dom';

const Card = ({ user, onDelete, onEdit }) => {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-lg mb-4 w-80 h-auto bg-white">
      <img src={userlogo} alt="User Profile" className="w-24 h-24 rounded-full mb-4 object-cover" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{user.name}</h3>
      <p className="text-gray-600 mb-4">{user.email}</p>
      <div className="flex gap-2">
      
       
          <button 
            onClick={onEdit} 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit
          </button>
       
         
            <button 
              onClick={onDelete} 
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
      </div>
    </div>
  );
};

export default Card;
