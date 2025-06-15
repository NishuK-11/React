import React from 'react'
import {FaMapMarkerAlt,FaCalendarAlt} from 'react-icons/fa'
import BannerImage from "../assets/Rectangle 2.png";

const Banner = () => {
  return (
    <div className='relative w-full h-[500px] bg-cover bg-center' style={{backgroundImage:`url(${BannerImage})`}}>
      {/* overlay */}
    <div className='absolute inset-0 bg-black opacity-40'></div>

    {/* Content */}
    <div className='relative z-10 flex flex-col items-center justify-center text-white h-full px-4'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center'>Enjoy your dream vacation </h1>
        <p className='text-base sm:text-lg t-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, consequuntur dolore aliquid maxime similique </p>

        <div className="mt-8 w-full max-w-[57rem] sm:w-[80%]  md:w-[60%] bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <input type="text"
                className='flex-grow p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-blue-500 bg-white'
                placeholder='Search Destination.....'
             />
             <button className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 transition'>Search</button>
        </div>
    </div>
    </div>
  )
}

export default Banner
