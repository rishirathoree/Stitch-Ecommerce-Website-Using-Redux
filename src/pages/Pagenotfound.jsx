import React from 'react'
const Pagenotfound = () => {
  return (
    <>
    <div className='w-full flex-col h-screen bg-errorbg flex items-center justify-center'>
            <div className='rounded-full bg-orange-400 animate-spin border-4 text-center w-12 h-12'>
              <div className='w-8 h-8 bg-white rounded-full'></div>
            </div>
        <div>
            <p className='font-semibold text-center text-sm mt-4'>"Well, this is awkward. The page you were looking for has decided to take a break. Please come back later."</p>
        </div>
        <button 
        onClick={()=>{window.location.href = '/'}}
        className='text-sm bg-black p-2 text-white mt-6 rounded-sm font-bold'>Go to homepage</button>
    </div>
    </>
  )
}

export default Pagenotfound