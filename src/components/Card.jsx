import React from 'react'
import image1 from'../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/CartSlice';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({name,image,id,price,type}) => {
  let dispatch=useDispatch()
  return (
    <div className='w-[320px] h-[420px] bg-white p-4 rounded-xl 
    flex flex-col gap-4 shadow-xl hover:border-2 border-orange-400 transition-all duration-200'>
      <div className='w-full h-[60%] overflow-hidden rounded-xl'>
        <img src={image} className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'></img>
      </div>
      <div className='text-2xl font-bold text-gray-800'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-xl font-semibold text-orange-500'>₹{price}</div>
        <div className='flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold' >{type==='veg'?<LuLeafyGreen   className='text-green-500 '/>:<GiChickenOven className='text-red-500' />} <span className={`${type==='veg'? "text-green-500":"text-red-500"} capitalize`}>{type} </span> </div>
      </div>
      <button className='w-full p-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-400 
   transition-all duration-200'
       onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
        toast.success("Item Added")}}>
          Add to Dish
          </button>
    </div>
  )
}

export default Card

