// import React from 'react'
import SingleItem from './SingleItem'
// import { useSelector } from 'react-redux';
const AllItems = ({totalItems}) => {

  // const {totalItems} = useSelector((state) => state.cart);
  // console.log(totalItems);
  return (
    <div className='itemsContainer'>
      
        {totalItems.map((item) =>{
            return <SingleItem key={item.id} {...item}/>
        })}

    </div>
  )
}

export default AllItems