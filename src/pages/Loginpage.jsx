import React from 'react'
import bgimage from '../images/slide1.jpg'
import { Link } from 'react-router-dom'
const Loginpage = () => {
  return (
    <>
    <div className='w-full flex justify-center items-center h-screen'>
        <div className='grid w-full h-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div className='flex justify-center items-center'>
                <div>
                    <p className='mb-2 font-light text-3xl text-center'>Login</p>
                    <input type="text" className='w-full focus:outline-none text-gray-500 mb-2 bg-gray-100 p-2' placeholder='Enter Email'/>
                    <input type="text" className='w-full focus:outline-none text-gray-500 mb-2 bg-gray-100 p-2 ' placeholder='Enter Password'/>
                    <button className='w-full p-2 text-white font-light bg-black'>Login</button>
                    <Link to="/account/register"><p className='font-semibold tracking-wide text-sm'>Create Account</p></Link>
                </div>
            </div>
            <div className='lg:flex md:flex sm:hidden justify-center items-center'>
                <img src={bgimage} className='w-full h-full object-cover' alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Loginpage