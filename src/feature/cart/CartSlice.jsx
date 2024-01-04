import React from 'react'
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


  const initialState ={
    
    totalItems:[],
    cartItems:[],
    totalPrice:0,
    isLoading:true

  }
  
  export const getTotalItems = createAsyncThunk(
    "getTotalItems" ,
    async(name,thunkAPI) =>{

      try{
        const {data} = await axios('https://dummyjson.com/products')

        return data.products
      }
      catch(error){

        return thunkAPI.rejectWithValue('someThing went wrong')

      }
     

    }

  )

  const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
      addItem :(state,{payload})=>{

        console.log(payload)

        const selectedItem = state.totalItems.find((item) => item.id == payload );
        console.log(selectedItem);

        let isPresent = false;

        state.cartItems.forEach((item) => {

          if(item.id == payload){
            isPresent = true;
          }
        }
        )

        if(!isPresent){

          state.cartItems.push(selectedItem);

        }
        else{
          alert("Item already added");
        }
        
       

    
        

      },

      removeItem:(state,{payload}) =>{

        const newArray = state.cartItems.filter((item) => item.id != payload )
        state.cartItems = newArray;

      },
      calculateTotal:(state) =>{
        let total =0;
        state.cartItems.forEach((item) => {
          total = total + item.price
        })
        state.totalPrice=total;
      },
      clearCart:(state) =>{
        state.cartItems =[];

      }
    },

    extraReducers: (builder) =>{
      builder 
      .addCase(getTotalItems.pending, (state) =>{
        state.isLoading=true;
      })
      .addCase(getTotalItems.fulfilled, (state,action) =>{
        state.totalItems = action.payload
        console.log(action.payload)
        state.isLoading=false;
      })
      .addCase(getTotalItems.rejected, (state,action) =>{
        console.log(action)
        state.isLoading=false;
      })
    }

  })
 

export const {addItem,removeItem,calculateTotal,clearCart} = cartSlice.actions;
export default cartSlice.reducer;