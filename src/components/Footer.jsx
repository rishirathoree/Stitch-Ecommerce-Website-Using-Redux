import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='p-8 grid border-t lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
      <div className='text-center place-content-center'>
        <NavLink to="/">
          <p className='font-extrabold text-2xl'>STITCH</p>
        </NavLink>
      </div>
      <div className='flex justify-betwen items-center gap-4 place-content-center'>
      <NavLink to="/">
          <p className='font-semibold text-[10px]'>Home</p>
        </NavLink>
        <NavLink to="/Products">
          <p className='font-semibold text-[10px]'>Products</p>
        </NavLink>
        <NavLink to="/Cart">
          <p className='font-semibold text-[10px]'>Cart</p>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Footer