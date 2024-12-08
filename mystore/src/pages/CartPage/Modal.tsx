import React, { useState } from 'react'
import { StyledClose, StyledInput, StyledModalContainer, StyledModalContent, StyledSubmit } from './style'


interface ModalProps {
  modalClose: () => void;
  handleSubmit: () => void;
}


const Modal = ({modalClose, handleSubmit} : ModalProps) => {
  const [name, setName] = useState<string>('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  
  const handleFormSubmit = async () => {
    if (name) {
      // Netlify Functions API 호출
      const response = await fetch('https://glittering-mochi-caff7f.netlify.app/.netlify/functions/submit-source', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
  
      const result = await response.json();
      console.log(result.message);  
      handleSubmit(); 
    } else {
      alert("출처를 입력해주세요!");
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      handleFormSubmit()
    }
  }

  // const handleFormSubmit = () => {
  //   if (name) {
  //     handleSubmit(); 
  //   } else {
  //     alert("출처를 입력해주세요!");
  //   }
  // };
  
  return (
    <StyledModalContainer onClick={modalClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <h2>구매를 원하시면 출처를 입력하세요!</h2>
        <StyledClose onClick={modalClose}>
          <p>X</p>
        </StyledClose>
        <StyledInput>
          <input type="text" placeholder='🚷출처를 밝히시오!🚷' onChange={handleInput} onKeyDown={handleKeydown}/>
        </StyledInput>
        <StyledSubmit onClick={handleFormSubmit}>제출</StyledSubmit>
      </StyledModalContent>
    </StyledModalContainer>
  )
}

export default Modal
