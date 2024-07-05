import React from 'react'

export default function Weeklyad({photo,price,details}) {
  return (
    <div className='cursor-pointer max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 h-80 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
    <div className='h-40 w-full overflow-hidden'>
        <img src={photo} alt='photo' className='w-full h-full object-cover'></img>
    </div>
    <div className='font-bold text-xl text-black mx-3 ml-8 my-1'>{details}</div>
    <div className='bg-red-400 text-white w-10 h-5 ml-8 my-2'>{price}</div>
    <button className='bg-white hover:bg-red-700 hover:text-white text-black font-bold py-2 ml-8 rounded h-12 w-32 border border-black'>Buy Now</button>
    </div>
  )
}