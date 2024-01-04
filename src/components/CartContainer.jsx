import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal,clearCart } from "../feature/cart/CartSlice";
const CartContainer = () => {
  const dispatch = useDispatch();

  const { totalItems, cartItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(totalItems);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  

  if (cartItems.length < 1) {
    return <div style={{fontSize:'30px',display:"flex",alignItems:'center', padding:'2rem',justifyContent:'center'}}>No Items In Cart</div>;
  }
  return (
    <div className='cartContainer'>
      <h1>Cart Page</h1>
     <div className='cartBody'>
      <div className="leftCart">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="rightCart">
        <div className="cartPriceCard">
          <h3>CheckOut List</h3>

          <div className='checkOutListItems'>
          {cartItems.map((item, index) => {
            return (
              <div key={item.id} className='singlePrice'>
                <div className='insideSinglePrice'>
                  <p>{index + 1}</p>
                  <p>{item.title}</p>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
          </div>
          

          <div style={{fontSize:'20px',fontWeight:'600'}} className='singlePrice'>
            <p >Total</p>
            <p>${totalPrice} </p>
          </div>
          <button onClick={()=>dispatch(clearCart())}>CheckOut</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartContainer;
