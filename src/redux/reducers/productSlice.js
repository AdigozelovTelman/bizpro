import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('api/products' , async()=>{
    const response = await axios.get('https://dummyjson.com/products')  
    console.log(response);

    return response.data.products
});
export const postProductWishThunk = createAsyncThunk('api/products/wish', async(data)=>{
    const response = await axios.post('http://localhost:5800/wish', data)
    return data
})
export const postProductBasketThunk = createAsyncThunk('api/products/basket', async(data)=>{
    const response = await axios.post('http://localhost:5800/basket', data)
    return data
})
export const productSlice =createSlice({
    name:'product',
    initialState:{
        products:[]
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        //get
        .addCase(getProductsThunk.fulfilled,(state, action) =>{
            state.loading =false
            state.products = action.payload
        })
        .addCase(getProductsThunk.pending,(state, action) =>{
            state.loading =true
        })
        .addCase(getProductsThunk.rejected,(state, action) =>{
            state.loading =false
            state.error = action.error.message

        })
        //post
        .addCase(postProductWishThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(postProductWishThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postProductWishThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //     // //post basket
        .addCase(postProductBasketThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(postProductBasketThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postProductBasketThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }

})

export default productSlice.reducer