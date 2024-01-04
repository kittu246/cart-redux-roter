import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import AllItems from '../components/AllItems'
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getTotalItems } from "../feature/cart/CartSlice"

// export const loader = async () =>{

//     const {data} = await axios.get("https://dummyjson.com/products");



//     return {data : data.products}


// }

const Landing = () => {

  // const dispatch = useDispatch();
  const {totalItems} = useSelector((state) => state.cart);
  // console.log(totalItems);

  // useEffect(() =>{

  //   dispatch(getTotalItems())

  // },[])

  // const {data} = useLoaderData();
  // console.log(data);

  return (
    <div>

<h1 style={{textAlign:'center'}}>Home Page</h1>
        <AllItems totalItems={totalItems}/>
    </div>
  )
}

export default Landing