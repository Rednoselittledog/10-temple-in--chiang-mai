import React from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full sticky h-20 shadow-xl z-[100]'>
        <div className='flex justify-end items-center w-full h-full px-10 2xl:px-16 '>
            <IoMenu />
        </div>
    </div>
  )
}

export default Navbar