import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import productRecucers from "./productSlice"

const store = configureStore({
    reducer:{
        cart:cartReducers,
        products:productRecucers
    }
})


export default store;