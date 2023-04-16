import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Hoodiescategory = () => {
    const clothingItems = useSelector((state) => state.data.filter((item) => item.category === 'Hoodies'));
  return (
    <>
    <div className='p-8 w-full h-full'>
        <p className='font-bold text-[15px]'>Hoodies</p>
        <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {clothingItems.map((items,index)=>{
                return(
                    <Link key={items.id} to={`/category/Hoodies`}>
                <div key={index} className='w-full  h-full'>
                        <div className='w-full h-80 overflow-hidden  bg-gray-200'>
                            <img src={items.image} className='w-full h-full object-cover' alt="" />
                        </div>
                    <div className='flex justify-between'>
                    <div>
                    <p className='font-semibold text-[10px]'>{items.name}</p>
                    <p className='font-semibold text-[10px]'>Price : ${items.price}</p>
                    <p className='font-semibold text-[10px]'>{items.category}</p>
                    </div>
                    </div>
                </div>
                </Link>
                )
            })}
        </div>
        
    </div>
    </>
  )
}

export default Hoodiescategory