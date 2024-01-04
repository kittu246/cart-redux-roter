import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../feature/cart/CartSlice';

const SingleItem = ({id,price,thumbnail,title}) => {

  const dispatch = useDispatch();

  return (
    <div className='singleItem'>

        <img src={thumbnail} alt={title}/>
        <p> Title : {title} </p>
        <p> Price : {`$${price}`} </p>
        <button onClick={() =>{dispatch(addItem(id))}}>Add Item</button>
        
    </div>
  )
}

export default SingleItem