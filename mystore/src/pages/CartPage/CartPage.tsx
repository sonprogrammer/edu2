import React, { useEffect, useState } from 'react'
import { ChapterComponent } from '../../components/ChapterComponent'
import { NotFoundPage } from '../../components'
import { StyledBtn } from './style'
import Modal from './Modal'



const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [myItems, setMyItems] = useState<any[]>([])
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    const myItem = localStorage.getItem('myItem')
    if(myItem){
      setMyItems(JSON.parse(myItem))
    }
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  },[])

  
  const handleRemoveFromCart = (removeItem: any) => {
    const updateCart = cartItems.filter(item => item.id !== removeItem.id)
    console.log('updateCart', updateCart)

    localStorage.setItem('cart', JSON.stringify(updateCart))
    setCartItems(updateCart)
    
  };

  const handleModal = () => {
    setModalOpen(true)
  }

  const closeModal =() => {
    setModalOpen(false)
  }

  const handleSubmit = () => {
    const updatedPurchasedItems = [...myItems, ...cartItems];
    localStorage.setItem('myItem', JSON.stringify(updatedPurchasedItems));
    localStorage.removeItem('cart'); // 장바구니 초기화
    setMyItems(updatedPurchasedItems); 
    setCartItems([]); 
    closeModal(); 
  };
  
  
  
  return (
    <div className='h-full'>
      {cartItems.length > 0 ? (
        <div className='p-5 relative h-full flex flex-col'>
          <ChapterComponent data={cartItems} onButtonClick={handleRemoveFromCart} isCartPage={true} cartItems={cartItems} />
          <StyledBtn onClick={handleModal}>
            무료로 보기
          </StyledBtn>
          {modalOpen && <Modal modalClose={closeModal}  handleSubmit={handleSubmit} />}
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  )
}

export default CartPage
