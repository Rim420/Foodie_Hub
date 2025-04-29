import React, { useContext, useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import { dataContext } from '../context/UserContext';
import toast from 'react-hot-toast';




const LoginForm = () => {

  let{isLoggedIn,setIsLoggedIn,showLogin,setShowLogin}=useContext(dataContext)

  const[FormData, setFormData]=useState({email:"",password:""})
  const[showPassword, setShowPassword]=useState(false)

  function changeHandler(event){
    setFormData((prevData) =>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
}
    function submitHandler(event){
       event.preventDefault();
       setIsLoggedIn(true);
       setShowLogin(false)
       toast.success("Logged In")
    }
  return (
    <div  className='pt-10 px-6 md:px-12'>
       <div className='flex w-11/12 max-w-[1160px] py-12 bg-slate-100 mx-auto gap-x-12 justify-center md:justify-between rounded-xl shadow-lg'>
      <div className='w-11/12 max-w-[450px] p-6 md:p-10 '>
        <h1 className='text-3xl font-bold text-gray-800 leading-tight'>Welcome to <span className="text-orange-500">Foodie Hub</span> </h1>
        <p className='text-lg leading-relaxed mt-4 text-gray-700'>
            <span className='text-richblack-100'>Order your favorite meals with ease.</span> 
            <br/>
            <span className='text-orange-3 00 italic'>Login to explore delicious food and quick delivery!</span>
        </p>

        <div>
          <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
            <p className='text-sm text-gray-700 mb-1'>Email Address <sub className='text-red-500'>*</sub></p>
            <input required type='email' value={FormData.email}
            placeholder='Enter Email id'
            onChange={changeHandler}
            name='email'
            className='bg-white rounded-lg text-gray-900 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none'>
            </input>
            </label>
            <label htmlFor="password" className="w-full block">
  {/* Password Label */}
  <p className="text-sm text-gray-700 mb-1">
    Password<sub className="text-red-500">*</sub>
  </p>

  {/* Input Wrapper for Proper Positioning */}
  <div className="relative w-full">
    <input 
      required 
      id="password"
      type={showPassword ? "text" : "password"}
      value={FormData.password}
      onChange={changeHandler}
      placeholder="Enter Password"
      name="password"
      className="bg-white rounded-lg text-gray-900 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none pr-12" // Added pr-[45px] to prevent overlap with icon
    />
    
    {/* Password Toggle Icon */}
    <span 
      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? 
        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : 
        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
      }
    </span>
  </div>

  {/* Forgot Password Link */}
  <Link to="#">
    <p className="text-sm mt-1 text-orange-500 text-right block hover:underline">
      Forgot Password?
    </p>
  </Link>
</label>
              <button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all shadow-md'>
            Sign In
        </button>
          </form>
          <button className='w-full flex bg-white justify-center items-center rounded-lg font-medium border border-gray-300 px-4 py-3 gap-x-2 mt-6 hover:shadow-md transition-all'>
          <FcGoogle size={22}/>
            <p className='ml-2'>Sign Up With Google</p>
        </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LoginForm
