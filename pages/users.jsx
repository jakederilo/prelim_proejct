
import React, { useState, useEffect } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { RiTodoLine } from "react-icons/ri";
import Link from 'next/link';
import { Divider } from "@nextui-org/react";

const Customers = () => {
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
    <div className='bg-customDivColor min-h-screen'>
      <div className='bg-customDivColor flex justify-between p-4'>
        <h2 className="text-customTextColor font-bold">Users</h2>
      </div>
      <div className='p-5'>
        <div className='bg-customColor w-full m-auto p-4 border rounded-lg overflow-y-auto'>
          <div className='bg-customDivColor first-line:text-customTextColor Colormy-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer'>
            <span text-customTextColor>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Address</span>
            <span className='hidden sm:grid'>City</span>
            <span className='hidden sm:grid'>Todo</span>
          </div>

          {users.map((user, index) => (
            <div key={index} className='bg-customDivColor hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer'>
              <div className='flex items-center'>
                <div className=' bg-purple-100 p-3 rounded-lg'>
                  <BsPersonFill className='text-purple-800' />
                </div>
                <p className='pl-4'>{user.name}</p>
              </div>
              <p className='text-gray-600 sm:text-left text-right'>{user.email}</p>
              <p className='text-customTextColor hidden md:flex'>{user.address.street}</p>
              <p className='hidden sm:flex'>{user.address.city}</p>

              <div className=' bg-green-200 p-2 w-8 rounded-sm'>
                <Link href={`/userstodos/todosuser${user.id}`}> {/* Link to user's todos page */}
                  <a><RiTodoLine /></a> {/* Wrap the icon with <a> tag */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
