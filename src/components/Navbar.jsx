import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemsWishlist } from '../actions/Wishlistaction'
import { addToCart } from '../actions/Cartaction'



const Navbar = () => {
  const menuItems = ['Category','Login','Cart']
  const wishlist = useSelector((state)=>state.wishlist)
  const cart = useSelector((state)=>state.cart)
    const [showMenu, setShowMenu] = useState(false);

    const [showBookmark, setShowBookmark] = useState(false);
    const [navBackgroundScrollState, setNavBackgroundScrollState] = useState('bg-transparent');
    const dispatch = useDispatch()
    
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBackgroundScrollState('shadow bg-white');
    } else {
      setNavBackgroundScrollState('shadow-b bg-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


    const toggleMenu = () => {setShowMenu(!showMenu)};
    const hideMenu = () => {setShowMenu(false);}; 
    

    const toggleBookmark = () => {
      setShowBookmark(!showBookmark);
    };
  
    const hideBookmark = () => {
      setShowBookmark(false);
    }; 
  return (
    <>
    <div className={`fixed w-full z-50 top-0 right-0 duration-700 ${navBackgroundScrollState}`}>
        <div className='flex justify-between p-6 items-center'>
            <div>
                <div
                className='p-2 cursor-pointer'
                onClick={toggleMenu}>
                <div className='w-[16px] h-[1px] bg-black'></div>
                <div className='w-[13px] my-[2px] h-[1px] bg-black'></div>
                <div className='w-[10px] h-[1px] bg-black'></div></div>
                <div className={`w-full h-screen fixed z-10 bg-black bg-opacity-50 duration-100 top-0 ${!showMenu ? '-translate-x-full invisible opacity-0' : 'translate-x-0 visible opacity-100'} right-0`}>
                    <i 
                    onClick={hideMenu}
                    className='bx absolute text-white right-5 p-2 border top-5 bx-x'></i>
  <div className={`absolute top-0  left-0 h-full bg-white delay-700 duration-300 lg:w-1/3 md:w-1/3 sm:w-2/3 ${!showMenu ? 'translate-y-20 invisible opacity-0' : 'translate-y-0 visible opacity-100'}`}>
    <div className='flex items-center justify-start w-full h-full p-4'>
      <ul>
      {menuItems.map((items,index)=>{
        return <Link key={index} 
        onClick={()=>{setShowMenu(false)}}
        to={items}><li className='font-semibold text-sm my-8 duration-700' key={index}>{items}</li></Link>
      })}
      </ul>
    </div>
  </div>
</div>

            </div>
            <div>
            <NavLink to="/">
                <p className='font-extrabold text-3xl duration-700 tracking-wide text-black'>STITCH</p>
            </NavLink>
            </div>


            {/* bookamrk  */}
            <div className='flex justify-center items-center gap-4'>
                <div className='relative'>
                  <i 
                onClick={toggleBookmark}
                className='bx rounded-md hover:text-gray-300 duration-300  bxs-bookmark'></i>
                <div className={`w-2 h-2 bg-blue-500 top-0 right-0 duratiom-500 rounded-full absolute opacity-${wishlist.length > 0 ? 100 : 0}`}></div>
                <div className={`w-full h-screen bg-black bg-opacity-50 z-20 fixed duration-100 top-0 ${!showBookmark ? '-translate-x-full invisible opacity-0' : 'translate-x-0 visible opacity-100'} right-0`}>
                    <i 
                    onClick={hideBookmark}
                    className='bx absolute left-5 text-white p-2 border top-5 bx-x'></i>
  <div className={`absolute top-0 right-0 h-full p-4 bg-white delay-500  duration-1000 w-1/2 ${!showBookmark ? 'translate-x-full invisible opacity-0' : 'translate-x-0 visible opacity-100'}`}>
    <div className=''>
    <div>
      <p className='font-bold tracking-wide text-lg'>Wishlist</p>
    </div>
    {wishlist.length > 0 ? 
    <div className=' overflow-y-auto border-y p-2 my-4 h-[32rem] Noscrollbar'>
    {wishlist.map((items)=>{
      return(
        <div key={items.id} className='wishlist-items duration-700 p-2 hover:bg-gray-50 rounded-md  py-2 flex justify-between'>
      <div className='flex gap-4 '>
      <div className='w-40 h-40 bg-gray-100 overflow-hidden rounded-md'>
        <img src={items.image} className='w-full h-full object-contain' alt="" />
      </div>
      <div className='lgLblock md:block sm:hidden'>
        <p className='font-lighter my-2 uppercase text-[10px]'>{items.name}</p>
        <p className='font-lighter my-2 uppercase text-[10px]'>Price : ${items.price}</p>
        <p className='font-lighter my-2 uppercase text-[10px]'>{items.category}</p>
        <span 
  onClick={() => {
    dispatch(addToCart(items));
    setShowBookmark(false);
  }}
  className='font-semibold cursor-pointer text-[10px] p-2 border'>
  ADD TO CART
</span>

      </div>
      </div>
      <div><i 
      onClick={()=>{
        dispatch(removeItemsWishlist(items.id))
        
      }}
      className='bx bx-x'></i></div>
    </div>
      )
    })}
  </div>
  :
  <div className='h-full duration-200 w-full flex items-center justify-center'>
    <p className='py-2 border-y w-full  font-light text-sm'>No Items added</p>
  </div>
  }
    <Link to="/cart">
</Link>
    </div>
  </div>
</div>
</div>
                <div className='relative'>
                  <NavLink to="/cart"><i className='bx bxs-shopping-bag hover:text-gray-300 duration-300'></i></NavLink>
                  <div className={`w-2 h-2 bg-blue-500 top-0 duration-500 right-0 duratiom-1000 rounded-full absolute opacity-${cart.length > 0 ? 100 : 0}`}></div>
                </div>
                <div><NavLink to="/Login"><i className='bx bxs-user hover:text-gray-300 duration-300'></i></NavLink></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar