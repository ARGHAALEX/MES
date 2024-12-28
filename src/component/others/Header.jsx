import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello.....  <br /> <span className='text-gray-400 text-3xl font-bold'>A R G H A 🖐️</span></h1>
      <button className='font-mono bg-red-600 px-3 py-2 rounded-md text-center '>Log Out</button>
    </div>
  )
}

export default Header