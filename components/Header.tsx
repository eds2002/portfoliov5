import React from 'react'

const Header: React.FC = () => {
  return (
    <div className = "w-full max-w-7xl px-4 flex items-center justify-start py-6 mx-auto fixed top-0 left-0 right-0 bg-white z-10">
      <div className = "flex gap-x-8 text-sm ">
        <p className = "text-black cursor-pointer">Code by Eduardo</p>
      </div>
    </div>
  )
}

export default Header