import React from 'react'
import dest5 from "../assets/post/dest5.jpg"
import dest6 from "../assets/post/dest6.jpg"
import dest7 from "../assets/post/dest7.jpg"

const NextTrip = () => {

    const trips = [
        {
            image:dest5,
            title:"Sydney most fashionable 5 star hotel",
            desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ex."
        },
        {
            image:dest6,
            title:"Sydney most fashionable 5 star hotel",
            desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ex."
        },
        {
            image:dest7,
            title:"Sydney most fashionable 5 star hotel",
            desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ex."
        }
    ]

  return (
    <div className='max-w-7xl mx-auto mt-14 px-4'>
      <h1 className='text-3xl font-semibold mb-6 ml-[10px]'>Get inspiration for your next trip</h1>
      <div className="flex flex-wrap gap-6 justify-center mt-14">
        {trips.map((trip,index)=>(
            <div className="relative w-[24rem] h-[15rem] rounded-lg overflow-hidden shadow-lg" key={index}>
                <img src={trip.image} alt={trip.title}  className='w-full h-full object-cover' />
                <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                    <h2 className="text-white text-lg font-semibold">{trip.title}</h2>
                    <p className='text-gray-200 text-sm'>{trip.desciption}</p>
                </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default NextTrip
