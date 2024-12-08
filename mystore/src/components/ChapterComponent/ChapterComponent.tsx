import { StyledBtn, StyledContainer, StyledContent, StyledDeleteBtn, StyledImage } from './style'
import { Section } from '../../types';

interface ChapterComponentProps {
  data: Section[];
  onButtonClick: (id: Section) => void;
  isCartPage?: boolean;
  isMyPage?: boolean;
  cartItems?: Section[];
  isPurchased?: (item: Section) => boolean;
}


const ChapterComponent = ({ data, onButtonClick, isCartPage, isMyPage, cartItems, isPurchased }: ChapterComponentProps) => {

  
  const isInCart = (item: Section) => {
    return (cartItems || []).some(cartItem => cartItem.id === item.id);
  }



  return (
    <>
      {
      data.map((info, i) => (
        <StyledContainer key={i} onClick={() => isMyPage && onButtonClick(info)}>
          <StyledImage imageUrl={info.ImageUrl} />
          <StyledContent>
            {info.title}
          </StyledContent>
          {
            isMyPage ? (
              <StyledBtn isMypage={true}>
                구경가기
              </StyledBtn>
            ) : (

              !isCartPage ? (
                <StyledBtn
                onClick={() => onButtonClick(info)}
                isInCart={isInCart(info)}
                disabled={isPurchased && isPurchased(info)}
                >
                {isPurchased && isPurchased(info) ? 'Purchased' : isInCart(info) ? 'In Cart' : 'Cart'}
              </StyledBtn>
            ) : (
              <StyledDeleteBtn onClick={() => onButtonClick(info)}>
                delete
              </StyledDeleteBtn>
            )
          )
          }
          </StyledContainer>
          
      ))
      
      }

    </>
  )
}

export default ChapterComponent
