import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../feature/cart/CartSlice'

const CartItem = ({id,price,thumbnail,title}) => {

  const dispatch  = useDispatch()
    return (
      <div className='singleItem'>
  
          <img src={thumbnail} alt={title}/>
          <p> Title : {title} </p>
          <p> Price : {`$${price}`} </p>
          <button onClick={() =>dispatch(removeItem(id))} >Remove Item</button>
          
      </div>
    )
  }

export default CartItem