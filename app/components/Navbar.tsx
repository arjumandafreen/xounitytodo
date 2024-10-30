import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className='mainBg h-[60px] flex px-1 lg:px-4 items-center justify-between'>
      
      {/* logo */}
      <div className='uppercase cursor-pointer text-sm lg:text-lg'>

        <span className='text-white bg-blue-600 pl-2 rounded-l-xl hover:bg-blue-700 hover:text-white'>
          xounity
        </span>

        <span className='text-black bg-white pr-2 rounded-r-xl hover:bg-gray-300 hover:text-black'>
          class
        </span>
      </div>

      {/* Menu Buttons */}
      <div className='flex gap-1 lg:gap-4 text-sm lg:text-xl'>
        <Link className='bg-green-600 p-1 rounded text-white hover:bg-green-700' href={'/'}>
          Home
        </Link>

        <Link className='bg-green-600 p-1 rounded text-white hover:bg-green-700' href={'/'}>
          About
        </Link>

        <Link className='bg-green-600 p-1 rounded text-white hover:bg-green-700' href={'/todo'}>
          Todo
        </Link>
      </div>

      {/* login button */}
      <div className='flex gap-1 lg:gap-4 lg:text-xl text-sm'>
        <button className='bg-purple-400 p-1 rounded text-white hover:bg-purple-500'>
          Sign In
        </button>

        <button className='bg-purple-400 p-1 rounded text-white hover:bg-purple-500'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
