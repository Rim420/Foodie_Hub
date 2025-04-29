import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export const dataContext = createContext();

const UserContext = ({children}) => {

    const[input,setInput]=useState("")
    const[cate,setCate]=useState(food_items)
    const[showCart,setShowCart]=useState(false)
    const[showLogin,setShowLogin]=useState(false)
    const[showSignup,setShowSignup]=useState(false)
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    let data={
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart,
        showLogin,
        setShowLogin,
        showSignup,
        setShowSignup,
        isLoggedIn,
        setIsLoggedIn
    }
  return (
    <div>
      <dataContext.Provider value={data}>  
      {children}  
    </dataContext.Provider>
    </div>
  )
}

export default UserContext
