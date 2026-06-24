import {createContext} from 'react';
import {food_list}  from '../assets/assets'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const StoreContext  = createContext(null)

const StoreContextProvider = (props) => {

const [cartItems, setCartItems] = useState({});

const url = "http://localhost:4000"
const [token,setToken] = useState("");
const [foodList,setFoodList] = useState([])
const addToCart = async(itemId) => {
        
        if(!cartItems[itemId]){
                setCartItems((prev) => ({...prev, [itemId]: 1}))
        } else {
                setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
        if(token){
                
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
                console.log("Sending:", { itemId });
        }
}
const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        if(token){
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
}

  const getTotalCartAmount = () => {
  return Object.keys(cartItems).reduce((total, id) => {
    const quantity = cartItems[id];

    if (quantity > 0) {
      const item = foodList.find(
        (product) => String(product._id) === String(id)
      );

      if (item) {
        total += item.price * quantity;
      }
    }

    return total;
  }, 0);
};
   const fetchFoodList = async () =>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
   }

   const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData || {});
   }
   useEffect(()=>{
     async function loadData(){
        await fetchFoodList();
        if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
        }
     }
     loadData();
   },[])

       const ContextValue = {
        food_list: foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
       }
        return (
                <StoreContext.Provider value={ContextValue}>
                        {props.children}
                </StoreContext.Provider>
        )
}
export default StoreContextProvider;