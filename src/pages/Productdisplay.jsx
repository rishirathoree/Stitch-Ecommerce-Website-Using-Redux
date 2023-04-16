import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../actions/Cartaction'
import { addToWishlist } from '../actions/Wishlistaction'

const Product = () => {
  const[showAccrordion,setshowAccrordion] = useState(false)
  const dispatch = useDispatch()
  const { name } = useParams()
  const data = useSelector((state) => state.data.find((item) => item.name === name))
  console.log(data);
  return (
    <>
      <div className='w-full h-full mt-20 p-8'>
      <div className='grid lg:grid-cols-2 items  md:grid-cols-2 sm:grid-cols-1 gap-4'>
          <div className='flex items-center justify-center '>
          <div className='h-[400px] w-[400px] bg-gray-100'>
            <img src={data.image} className='h-[400px]  w-[400px] object-cover' alt={data.name} />
          </div>
          </div>
          <div>
            <p className='font-bold text-sm'>{data.name}</p>
            <p className='my-2 font-light text-sm'>Price: ${data.price}</p>
            <p className='my-2 font-light text-[14px]'>{data.category}</p>
            <button 
            onClick={()=>{
              dispatch(addToCart(data))
            }}
            className='my-2 w-full p-3 text-white bg-black font-light text-[13px] tracking-wide'>ADD TO CART</button>
            <button 
            onClick={()=>{
              dispatch(addToWishlist(data))
            }}
            className='my-2 w-full p-3 text-black border font-light text-[13px] tracking-wide'>ADD TO WISHLIST</button>
            <button 
            onClick={()=>{
              history.back()
            }}
            className='my-2 p-3 text-black border font-light text-[8px] tracking-wide'>Back to product</button>
          <div>
          <div className='shadow p-4 duration-700'>
            <div className='flex items-center justify-between'>
              <p className='font-semibold text-sm'>Description</p>
              <i 
              onClick={()=>{
                setshowAccrordion(!showAccrordion)
              }}
              className={`bx bx-chevron-${!showAccrordion ? 'down' : 'up'}`}></i>
              </div>
            <p className={`font-light text-[10px] ${!showAccrordion ? 'hidden' : 'block' } text-sm delay-500 `}>details Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam magni, fugit cupiditate praesentium temporibus consequatur aliquam iure doloribus fuga at autem excepturi, perferendis non odio ab voluptatibus sequi quo. Quibusdam porro, unde nisi deserunt nulla facilis incidunt perferendis itaque, pariatur cumque ratione natus accusamus atque iure eum culpa sit eaque!</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product