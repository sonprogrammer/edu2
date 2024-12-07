import React, { useEffect, useState } from 'react'
import { ChapterComponent } from '../../components/ChapterComponent'
import { infoData } from '../../Data/infoData'

const MainPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [myItems, setMyItems] = useState<any[]>([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    const myItem = localStorage.getItem('myItem')
    if(cart){
      setCartItems(JSON.parse(cart))
    }
    if(myItem){
        setMyItems(JSON.parse(myItem))
    }
  },[])

  const handleCart = (item: any) => {

    const isInCart = cartItems.some(cartItem => cartItem.id === item.id)

    if(!isInCart){
      const updateCart = [...cartItems, item]
      setCartItems(updateCart)
      localStorage.setItem('cart', JSON.stringify(updateCart))
    }else{
      alert('is already in cart')
    }
  }
  
  const isPurchased = (item: any) => {
    return myItems.some((myItem) => myItem.id === item.id);
  };

  return (
    <div className='p-5'>
      <ChapterComponent data={infoData} onButtonClick={handleCart} cartItems={cartItems} isPurchased={isPurchased}/>
    </div>
  )
}

export default MainPage