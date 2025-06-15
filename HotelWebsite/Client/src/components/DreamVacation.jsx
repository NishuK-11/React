import React from 'react'
import dest1 from "../assets/post/dest1.jpg"
import dest2 from "../assets/post/dest2.jpg"
import dest3 from "../assets/post/dest3.jpg"
import dest4 from "../assets/post/dest4.jpg"

const DreamVacation = () => {

    const destinations = [
        {image:dest1,name:"Australia",properties:2246},
        {image:dest2,name:"Japan",properties:1278},
        {image:dest3,name:"Erope",properties:1278},
        {image:dest4,name:"Arunachal",properties:1278},
        
    ]

  return (
    <div className='flex flex-col mt-14 '>
        <h1 className='text-3xl font-semibold mb-2 ml-[12rem]'>Enjoy your dream vacation</h1>
        <p className='text-gray-600 mb-10 max-w-xl ml-[12rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum reprehenderit, ad dolores ipsam pariatur!
        </p>
        <div className="flex gap-4 justify-center">
            {destinations.map((destination,index)=>(
                <div className="text-center" key={index}>
                    <img src={destination.image} alt={destination.name} className='w-[18rem] h-48 object-cover rounded-lg'/>
                    <h2 className='text-lg font-semibold mt-2'>{destination.name}</h2>
                    <p className='text-gray-500'>{destination.properties}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default DreamVacation
        