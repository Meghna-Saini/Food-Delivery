import {createContext} from 'react';
import {food_list}  from '../assets/assets'
import React, { useState, useEffect } from 'react'

export const StoreContext  = createContext(null)

const StoreContextProvider = (props) => {

const [cartItems, setCartItems] = useState({food_list});

const addToCart = (itemId) => {
        if(!cartItems[itemId]){
                setCartItems((prev) => ({...prev, [itemId]: 1}))
        } else {
                setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
}
const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
}

   useEffect(() => {
        console.log(cartItems);
   },[cartItems])


       const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
       }


        return (
                <StoreContext.Provider value={ContextValue}>
                        {props.children}
                </StoreContext.Provider>
        )
}
export default StoreContextProvider;