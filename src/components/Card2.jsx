import React from 'react'
import image1 from '../assets/image1.avif'
import { IoTrashBinSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/CartSlice';

const Card2 = ({name,id,price,image,qty}) => {
  let dispatch=useDispatch()
  return (
    <div className='w-full p-3 shadow-md flex flex-col md:flex-row justify-between items-center rounded-lg bg-white'>
      <div className='w-full md:w-[60%] flex gap-4 items-center'>
        <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] overflow-hidden rounded-lg shadow-md'>
        <img src={image} className='object-cover w-full h-full'></img>
        </div>
        <div className='flex flex-col gap-2 w-full md:w-[50%]'>
            <div className='text-lg font-semibold text-gray-700'>{name}</div>
            <div className='w-[110px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold
            border-2 border-orange-400 text-xl'>
                <button className='w-[30%] h-full bg-white flex justify-center
                items-center text-orange-400 hover:bg-gray-200' onClick={()=>qty>1?dispatch(DecrementQty(id)):1}>-</button>
                <button className='w-[40%] h-full bg-slate-200 flex justify-center
                items-center text-orange-400'>{qty}</button>
                <button className='w-[30%] h-full bg-white flex justify-center
                items-center text-orange-400 hover:bg-gray-200' onClick={()=>dispatch(IncrementQty(id))}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-row md:flex-col justify-between md:justify-start items-center md:items-end w-full md:w-auto gap-3 mt-3 md:mt-0'>
        <span className='text-xl text-orange-400 font-semibold'>₹{price}</span>
        <IoTrashBinSharp className='w-8 h-8 text-red-500 hover:text-red-700 cursor-pointer transition-all' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2
