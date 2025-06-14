import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import logo from '../assets/image.png';
const Navbar = () => {
    const isSignIn = true; 
    const [isDropDownOpen,setIsDropDownOpen] = useState(false);
    const handedDropDownToggle = ()=>{
        setIsDropDownOpen((prevState)=> !prevState);
    }
    const closeDropDown = () =>{
        setIsDropDownOpen(false);
    }
  return (
    <nav className='flex items-center justify-between p-4'>
        <div className='flex items-center space-x-2'>
            <img src={logo} alt="logo img" className='h-10 w-auto' />
            <p>My Dream Place</p>
        </div>
        <div className='hidden md:flex space-x-6'>
            <a href = "/" className='text-gray-600 hover:text-gray-900'>Home</a>
            <a href = "/" className='text-gray-600 hover:text-gray-900'>Discover</a>
            <a href = "/" className='text-gray-600 hover:text-gray-900'>Activities</a>
            <a href = "/" className='text-gray-600 hover:text-gray-900'>Contact</a>
            <a href = "/" className='text-gray-600 hover:text-gray-900'>About</a>
        </div>
        {/* Notification and profile  */}
        {/* Adds horizontal space between child items  mr-[9rem]	Adds a right margin of 9rem*/}
        <div className="flex items-center space-x-4 mr-[9rem] relative">
            <FaUser size={20} onClick = {handedDropDownToggle}/>
            {isDropDownOpen && (
                <div
                //mt-36 = margin-top: 9rem;  /* because 36 × 0.25rem = 9rem */

                    className='absolute right-0 mt-36 w-48 bg-white border border-gray-200 rounded shadow-lg z-50'
                    onMouseLeave={closeDropDown}
                >
                <ul>
                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        <a href="/">Your Profile</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        <a href="/">Your Order</a>
                    </li>
                    {isSignIn?(
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        <a href="/">Sign Out</a>
                    </li>
                    ):(
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                            <a href="/">SignIn</a>
                        </li>
                    )}
                </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
