import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemsCart, totalPriceAdd } from '../actions/Cartaction'
import { Link } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)
  const allTotalPrice = cart.reduce((accumulator,item)=>accumulator + item.price,0)
  console.log(allTotalPrice);
  return (
    <div className='p-8 w-full mt-20 h-full'>
        {
            cart.length > 0 ? 
            <div className='w-full h-full flex lg:flex-row md:flex-row sm:flex-col  gap-4'>
                 <div className='w-2/3 item-cart-div lg:w-2/3 md:w-2/3 sm:w-full h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {cart .map((items,index)=>{
                return(
                <div key={index} className='w-full h-full'>
                        <div className='w-full h-80 overflow-hidden bg-gray-200'>
                            <img src={items.image} className='h-full w-full object-cover' alt="" />
                        </div>
                    <div className='flex justify-between'>
                    <div>
                    <p className='font-semibold text-[10px]'>{items.name}</p>
                    <p className='font-semibold text-[10px]'>Price : ${items.price}</p>
                    <p className='font-semibold text-[10px]'>{items.category}</p>
                    </div>
                    <div>
                    <i 
                    onClick={()=>{
                        dispatch(removeItemsCart(items.id))
                    }}
                    className='bx bx-x'>
                    </i></div>
                    </div>
                </div>
                )
            })}
        </div>
        <div className={`w-1/3 cart-div lg:w-1/3 md:w-1/3 sm:w-full border-l duration-1000 p-4 h-full opacity-${cart.length > 0 ? 100 : 0}`}>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-sm'>Total Price : </p>
                    <p className='font-semibold text-sm'>${allTotalPrice}</p>
                </div>
                <div className='flex my-4 justify-between items-center'>
                    <p className='font-semibold text-sm'>SHIPPING : </p>
                    <p className='font-semibold text-sm'>${allTotalPrice/10}</p>
                </div>
                    <button className='text-center bg-black text-white font-bold tracking-wide text[8px] w-full p-3'><p>CHECKOUT</p></button>
            </div>
            </div>
            :
            <div className='w-full h-screen flex items-center justify-center'>
                <div>
                <p className='text-center font-bold text-sm'>Card is empty</p>
                <Link to="/"><p className='bg-black text-white font-light tracking-wide p-2 text-sm'>Continue Shopping</p></Link>
                </div>
            </div>
        }
        
    </div>
  )
}

export default Cart