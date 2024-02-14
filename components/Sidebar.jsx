import React from 'react';
import Link from 'next/link';
import { RxDashboard} from 'react-icons/rx';
import { FaUsers } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { FaSquareInstagram } from "react-icons/fa6";
import {Tooltip} from "@nextui-org/react";

const Sidebar = ({ children }) => {
  return (
    <div className='bg-customDivColor flex'>
      <div className='fixed w-20 h-screen p-4 bg-customBgColor border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
  
          <Link href='/'>
            <div className='bg-orange-200 text-white p-3 rounded-lg inline-block'>
              <FaSquareInstagram size={20} />
            </div>
          </Link>
         
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
         
          <Link href='/'>
          <div className="flex flex-wrap gap-4">
          <Tooltip text="Bold" placement ="top" content="Dashboard" color="success">
            <div className='bg-gray-100 color="secondary"  hover:bg-red-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
              
            </div>
            </Tooltip>
            </div>
          </Link>
          
          <Link href='/users'>
          <Tooltip text="Bold" placement ="top" content="Users" color="success">
            <div className='bg-gray-100 hover:bg-red-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaUsers size={20} />
            </div>
            </Tooltip>
          </Link>
          <Link href='/post'>
          <Tooltip text="Bold" placement ="top" content="Posts" color="success">
            <div className='bg-gray-100 hover:bg-red-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdLocalPostOffice size={20} />
            </div>
            </Tooltip>
          </Link>
          <Link href='/comments'>
          <Tooltip  placement ="top"  content="Comments" color="white">
            <div className='bg-gray-100 hover:bg-red-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <LiaCommentSolid size={20} />
            </div>
            </Tooltip>
          </Link>
          <Link href='/todos'>
          <Tooltip text="Bold" placement ="top" content="Todos" color="success">
            <div className='bg-gray-100 hover:bg-red-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FcTodoList size={20} />
            </div>
            </Tooltip>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
