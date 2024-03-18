import React from 'react'

export default function Cart() {
  let carts = ['tomatoes', 'pasta']
  return (
    <div>
      <h4 className='title'>cart</h4>
      <CartItem item={carts}/>
    </div>
  )
}

function CartItem({item}){
  return(
    <div className="cart-item">
        <p>{item[0]}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}