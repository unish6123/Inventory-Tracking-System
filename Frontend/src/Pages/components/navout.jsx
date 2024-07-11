import React from 'react'

export default function Navout() {
  return (
    <nav className='bg-gray-100 p-4'>
       <div className='container mx-auto flex items-center justify- gap-20'>
       <div className=' cursor-pointer text-black text-xl font-bold hover:text-red-400 hover:underline'>
       Get your Grocerries 
       </div>
       <div className='font-bold text-yellow-400 text-2xl transition hover:scale-105 cursor-pointer'>Weekly Ad</div>
       <div className='font-bold cursor-pointer text-red-400 text-2xl transition hover:scale-105'>Dailies</div>
       <div className='flex-grow mx-4'>
       <input 
       type='text'
       placeholder='search.....'
       className='w-full px-3 py-2 rounded-md text-sm text-gray-700 bg-white border border-gray-300 focus:outline-none focus:border-blue-500'>
         
       </input>
       </div>
       <div className='flex items-center justify-between gap-2'>
       <div className='text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-yellow-400 hover:bg-gray-700'>
       Signup
       </div>
       <div className='text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-blue-400 hover:bg-gray-700'>Login</div>
       </div>
       </div>
    </nav>
  )
}