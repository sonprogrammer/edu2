import React, { useEffect, useState } from 'react'
import { StyledBtn, StyledContainer, StyledContent, StyledDeleteBtn, StyledImage } from './style'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface ChapterComponentProps{
  data: any[];
  onButtonClick: (id: any) => void;
  isCartPage? : boolean;
  cartItems: any[];
  isPurchased?: (item:any) => boolean;
}


const ChapterComponent = ({ data, onButtonClick, isCartPage, cartItems, isPurchased }: ChapterComponentProps) => {
  const isInCart = (item: any) => {
    return cartItems.some(cartItem => cartItem.id === item.id);
  }


  return (
    <>
      {data.map((info, i) => (
        <StyledContainer key={i}>
          <StyledImage imageUrl={info.ImageUrl} />
          <StyledContent>
            {info.title}
          </StyledContent>
          {!isCartPage ? (
            <StyledBtn
               onClick={() => onButtonClick(info)}
                isInCart={isInCart(info)}
                disabled={isPurchased && isPurchased(info)}
                >
              {/* {isPurchased && isInCart(info) ? 'purchased' : 'Cart'} */}
              {isPurchased && isPurchased(info) ? 'Purchased' : isInCart(info) ? 'In Cart' : 'Cart'}
            </StyledBtn>
          ) : (
            <StyledDeleteBtn onClick={() => onButtonClick(info)}>
              delete
            </StyledDeleteBtn>
          )
          }
        </StyledContainer>
      ))}


    </>
  )
}

export default ChapterComponent
