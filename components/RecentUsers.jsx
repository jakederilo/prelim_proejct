
import React, { useState, useEffect } from 'react';

import { MdRecentActors } from "react-icons/md";


const RecentOrders = () => {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersData => {
      setUsers(usersData);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}, []);


  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1  className="font-bold">Recent Users</h1>
      <ul>
        {users.map((user, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <MdRecentActors className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{user.username}</p>
              <p className='text-gray-400 text-sm'>{user.email}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
