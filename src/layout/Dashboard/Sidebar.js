import React from "react";
import { Link } from "react-router-dom";
import { BiExit } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='col-span-2 bg-stone-100 h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3  flex-col h-full'>
        <li>Admin Dashboard</li>
        <li>
          <Link to='/dashboard'>Blog List</Link>
        </li>
        <li>
          <Link to='add-blog'> Add Blog </Link>
        </li>
        <li className='mt-auto text-left'>
          <Link to='/'> <span><BiExit style={{fontSize:"24px", textAlign:"center"}}/></span> </Link>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
