import React from 'react'
import {appleImg, bagImg, searchImg} from '../utlis'
import {navLists} from '../constant'

export default function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div className='px-5 cursor-pointer text-gray-400 hover:text-gray-500 transition-all' key={nav}>{nav}</div>
          ))}
        </div>  
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="Search" width={14} height={18} />
          <img src={bagImg} alt="" width={14} height={18} />
        </div>
      </nav>
    </header>
  );
}
