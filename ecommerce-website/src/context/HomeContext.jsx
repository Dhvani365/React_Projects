import React, { createContext, useState, useEffect } from "react";
import allProducts from '../assets/all_product.js'

export const HomeContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0; i<allProducts.length; i++){
        cart[i] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let info = allProducts.find((e)=>e.id === Number(item));
                total += info.new_price * cartItems[item];
            }
        }
        return total;
    }

    const getTotalItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {allProducts, cartItems, addToCart, removeFromCart, getTotalAmount, getTotalItems};

    return(
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;