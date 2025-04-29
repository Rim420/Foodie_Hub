import React, { useContext, useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from 'react-hot-toast'
import {FcGoogle} from 'react-icons/fc'
import { dataContext } from '../context/UserContext';

const SignupForm = () => {
    const[FormData, setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    let{isLoggedIn,setIsLoggedIn,showSignup,setShowSignup}=useContext(dataContext)

    const[showPassword,setShowPassword]= useState(false)
    const[showConfirmPassword,setShowConfirmPassword]= useState(false)
    const[accountType, setAccountType]=useState("student");

    function changeHandler(event){
        setFormData((prevData) =>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(FormData.password != FormData.confirmPassword){
            toast.error("Password do not match")
            return;
        }
        setIsLoggedIn(true)
        setShowSignup(false)
        toast.success("Account Created");

        const accountData={
            ...FormData
        };
        console.log("Printing Account Data")
        console.log(accountData)
    }
// className='w-11/12 max-w-[450px] '
  return (
    <div >
      <div  className='flex items-center justify-center min-h-screen bg-slate-100 py-10'>
      <div className='w-11/12 max-w-[1160px] bg-white shadow-xl rounded-2xl p-10 md:p-14'>
        <h1  className="text-3xl font-bold text-gray-800"> Join the best food delivery <span className='text-orange-500'>FoodieHub</span></h1>
        <p className='text-lg text-gray-700 mt-4'>
            <span className='text-gray-500'>Order your favorite meals anytime, anywhere.</span> 
            <br/>
            <span className='text-orange-300 italic'>Fast, fresh, and delivered to your doorstep.</span>
        </p>
        <div>
            <div className=' bg-orange-600 p-1 gap-x-1 my-6 rounded-full flex max-w-max shadow-md'>
                <button className={`${accountType==="student" 
                 ?
                "bg-orange-800 text-white"
                :"bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200

                }`}
                onClick={() => setAccountType("student")}>Student</button>
                <button className={`${accountType==="instructor" 
        ?
        " bg-orange-900 text-white"
        : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200

        }`}
        onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col md:flex-row gap-4'>
                    <label className='w-full'>
                        <p className='text-sm text-gray-700 mb-1'>First Name<sub className='text-red-500'>*</sub></p>
                        <input required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter first Name'
                        value={FormData.firstName}
                        className='bg-white border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none'></input>
                    </label>
                    <label className='w-full'>
                        <p className='text-sm text-gray-700 mb-1'>Last Name<sub className='text-red-500'>*</sub></p>
                        <input required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={FormData.lastName}
                        className='bg-white border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none'></input>
                    </label>
                </div>
                <div className='w-full mt-4'>
                <label >
                    <p className='text-sm text-gray-700 mb-1 '>Email Address<sub className='text-red-500'>*</sub></p>
                    <input required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Addesss'
                    value={FormData.email}
                    className='bg-white border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none'></input>
                </label>
                </div>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                <label className=' w-full relative'>
                    <p className=' text-sm text-gray-700 mb-1'>Create Password<sub className='text-red-500'>*</sub></p>
                    <input required
                    type={showPassword ? ("text") : ("Password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={FormData.password}
                    className='bg-white border border-gray-300 rounded-lg w-full p-3 pr-12 focus:ring-2 focus:ring-orange-400 focus:outline-none'></input>
                    <span className='absolute right-3 top-10 cursor-pointer text-gray-500 '
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                    </span>
                </label>

                <label className=' w-full relative'>
                    <p className=' text-sm text-gray-700 mb-1'>Confirm Password<sub className='text-red-500'>*</sub></p>
                    <input required
                    type={showConfirmPassword ? ("text") : ("Password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={FormData.confirmPassword}
                    className='bg-white border border-gray-300 rounded-lg w-full p-3 pr-12 focus:ring-2 focus:ring-orange-400 focus:outline-none'></input>
                    <span className='absolute right-3 top-10 cursor-pointer text-gray-500'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                    </span>
                </label>
                </div>
                <button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-3 rounded-lg transition-all shadow-md mt-6'>
                    Create Account
                </button>
                    </form>
                     <button className='w-full flex items-center justify-center bg-white border border-gray-300 py-3 mt-4 rounded-lg font-medium hover:shadow-md transition-all'>
                              <FcGoogle size={22}/>
                                <p className='ml-2'>Sign Up With Google</p>
                            </button>
        </div>
        </div>
        </div>
     </div> 
  )
}

export default SignupForm
