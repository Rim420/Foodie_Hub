 import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../Category'
import Card from '../components/Card'
import {food_items} from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Footer from '../components/Footer'


 
 const Home = () => {
  const{cate,setCate,input,showCart,setShowCart,showLogin,setShowLogin,showSignup,setShowSignup}=useContext(dataContext)

  function filter(Categories){
    if(Categories==='All'){
      setCate(food_items)
    }else{
      let newList=food_items.filter((item)=>(item.food_category===Categories))
      setCate(newList)
    }
  }
  let items=useSelector(state=>state.cart)
  let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryFee=20;
  let taxes=subtotal*0.5/100;
  let total=Math.floor(subtotal+deliveryFee+taxes) 
   return (
     <div className='bg-orange-50 w-full min-h-screen'>
       <Navbar/>
      {/* Category Grid (only shows when input is empty) */}
{!input && (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6 py-8 justify-center">
    {Categories.map((item, id) => (
      <div
        key={id}
        className="w-full sm:w-[150px] h-[160px] bg-white flex flex-col items-center gap-3 p-4 
                   text-[16px] font-semibold text-gray-700 rounded-lg shadow-md 
                   hover:bg-orange-100 cursor-pointer transition-all duration-300 
                   transform hover:scale-105"
        onClick={() => filter(item.name)}
      >
        <div className="w-[55px] h-[55px] flex justify-center items-center">
          {item.image}
        </div>
        <div className="text-center">{item.name}</div>
      </div>
    ))}
  </div>
)}

{/* Filtered Dishes or Empty State */}
<div className="w-full flex flex-wrap gap-6 px-4 sm:px-6 py-8 justify-center">
  {cate.length > 1 ? (
    cate.map((item) => (
      <Card
        key={item.id}
        name={item.food_name}
        image={item.food_image}
        price={item.price}
        id={item.id}
        type={item.food_type}
      />
    ))
  ) : (
    <div className="text-center text-2xl text-orange-500 font-semibold pt-8 animate-pulse">
      NO Dish Found
    </div>
  )}
</div>


        {/* For Login Page  */}
        <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-slate-100 rounded-2xl shadow-2xl 
      p-6 transition-transform duration-500 flex flex-col items-center overflow-auto z-50 ${showLogin ? "translate-x-0" : "translate-x-full"}`}>
          <header className='w-full flex justify-between items-center'>
          <span className='text-orange-500 font-semibold text-2xl'>LogIn</span>
          <span className=' text-orange-500 text-[18px] font-semibold cursor-pointer  hover:text-orange-300' onClick={()=>setShowLogin(false)}><RxCross1 className='w-[30px] h-[30px] '  /></span>
        </header>
        
        <div className='text-orange-500 text-[18px] font-semibold cursor-pointer hover:text-gray-600'></div>
        <LoginForm/>
        </div>


        {/* For Signup Page  */}
        <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-slate-100 rounded-2xl shadow-2xl 
      p-6 transition-transform duration-500 flex flex-col items-center overflow-auto z-50 ${showSignup ? "translate-x-0" : "translate-x-full"}`}>
          <header className='w-full flex justify-between items-center'>
          <span className='text-orange-500 font-semibold text-2xl'>SignUp</span>
          <span className=' text-orange-500 text-[18px] font-semibold cursor-pointer  hover:text-orange-300' onClick={()=>setShowSignup(false)}><RxCross1 className='w-[30px] h-[30px] '  /></span>
        </header>
        <div className='text-orange-500 text-[18px] font-semibold cursor-pointer hover:text-gray-600'></div>
        <SignupForm/>
        </div>



        {/* For cart  */}
       <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl 
        p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-orange-400 text-[18px] font-semibold'>Order Items</span>
          <span className=' text-orange-400 text-[18px] font-semibold cursor-pointer  hover:text-gray-600'  onClick={()=>setShowCart(false)}><RxCross1 className='w-[30px] h-[30px] ' /></span>
           
        </header>

        {items.length>0? <>
        <div className='w-full mt-6 flex flex-col gap-6'>
          {
            items.map((item)=>(
              <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
            ))
          }
        </div>

        <div className='w-full border-t border-gray-300 mt-6 flex flex-col gap-4 px-6 py-5 bg-gray-50 shadow-md rounded-lg'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-orange-400 font-semibold text-lg'>₹{subtotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-orange-400 font-semibold text-lg'>₹{deliveryFee}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-orange-400 font-semibold text-lg'>₹{taxes}/-</span>
          </div>
        </div>
          <div className='w-full mt-5 flex flex-col items-center bg-white shadow-lg rounded-lg py-6 px-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-orange-400 font-semibold text-2xl'>₹{total}/-</span>
          </div>
          <button className='w-[90%] mt-6 py-3 rounded-lg bg-green-600 text-white text-lg font-semibold hover:bg-green-500 transition-all shadow-md' onClick={()=>{toast.success("Order Placed")}} >Place Order</button>
          </div>
          </>:
          <div className='text-center text-2xl text-orange-500 font-semibold pt-8'>Empty Card</div>}

       
       </div>
       {!input ? <Footer/> : null}
       
      
     </div>
   )
 }
 
 export default Home
 
