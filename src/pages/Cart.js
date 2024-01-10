import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart() {
  const cartItems = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  console.log(cartItems,"cartItems")

  const handleRemove =(item)=>{
  dispatch(remove(item))
   }
  return (
    <div>
      <h2>Cart</h2>
      <div className='cartWrapper'>
      {cartItems.map((item)=>(
        <div className='cartCard'>
        <img src={item.image} alt =""/>
          <h5> {item.title}</h5>
          <h5>{item.price}</h5>
          <button className='btn' onClick={()=>handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cart
