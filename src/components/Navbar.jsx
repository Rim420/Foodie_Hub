import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import UserContext, { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {
    input, setInput,
    cate, setCate,
    showCart, setShowCart,
    showLogin, setShowLogin,
    showSignup, setShowSignup,
    isLoggedIn, setIsLoggedIn
  } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(item =>
      item.food_name.toUpperCase().includes(input) || item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);

  let items = useSelector(state => state.cart);

  return (
    <div className='w-full h-auto md:h-[90px] flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-3 bg-orange-50 shadow-md gap-4 md:gap-0'>
      
      {/* Logo */}
      <div className='w-[55px] h-[55px] md:w-[65px] md:h-[65px] bg-white flex justify-center items-center rounded-xl shadow-lg hover:shadow-xl transition-all'>
        <MdFastfood className='w-[28px] h-[28px] md:w-[35px] md:h-[35px] text-orange-500' />
      </div>

      {/* Search Bar */}
      <form
        className='w-full md:w-[45%] h-[45px] md:h-[55px] bg-white flex items-center px-4 gap-3 rounded-xl shadow-md transition-all hover:shadow-lg'
        onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='text-orange-500 w-[18px] h-[18px] md:w-[22px] md:h-[22px]' />
        <input
          type='text'
          placeholder='Search Item..'
          className='w-full outline-none text-sm md:text-[16px] text-gray-700 placeholder-gray-400'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Auth Buttons & Cart */}
      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-3 md:mt-0'>

        {/* Auth Buttons */}
        {!isLoggedIn && (
          <>
            <div className='w-[90px] md:w-[100px] h-[45px] md:h-[55px] bg-white flex justify-center items-center rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer'>
              <span className='text-orange-500 font-semibold text-base md:text-lg' onClick={() => setShowLogin(true)}>LogIn</span>
            </div>
            <div className='w-[90px] md:w-[100px] h-[45px] md:h-[55px] bg-orange-500 flex justify-center items-center rounded-lg shadow-md hover:bg-orange-600 transition-all cursor-pointer'>
              <span className='text-white font-semibold text-base md:text-lg' onClick={() => setShowSignup(true)}>SignUp</span>
            </div>
          </>
        )}

        {isLoggedIn && (
          <>
            <div className='w-[90px] md:w-[100px] h-[45px] md:h-[55px] bg-orange-500 flex justify-center items-center rounded-lg shadow-md hover:bg-orange-600 transition-all cursor-pointer'>
              <span className='text-white font-semibold text-base md:text-lg'
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}>Logout</span>
            </div>
            <div className='w-[100px] md:w-[120px] h-[45px] md:h-[55px] bg-orange-500 flex justify-center items-center rounded-lg shadow-md hover:bg-orange-600 transition-all cursor-pointer'>
              <span className='text-white font-semibold text-base md:text-lg'>Dashboard</span>
            </div>
          </>
        )}

        {/* Cart */}
        <div
          className='w-[50px] md:w-[65px] h-[50px] md:h-[65px] bg-white flex justify-center items-center rounded-xl shadow-md hover:shadow-xl relative cursor-pointer'
          onClick={() => setShowCart(true)}>
          <FaCartShopping className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-orange-500' />
          {
            items.length > 0 &&
            <span className='bg-orange-500 absolute top-0 right-1 text-[10px] md:text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
              {items.length}
            </span>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
