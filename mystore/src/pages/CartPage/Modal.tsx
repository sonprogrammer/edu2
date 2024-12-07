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
  
  // const handleFormSubmit = async () => {
  //   const response = await fetch('/.netlify/functions/submit-form', {
  //     method: 'POST',
  //     body: JSON.stringify({ name }),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   const result = await response.json()
  //   modalClose() 
  // }

  const handleFormSubmit = () => {
    if (name) {
      handleSubmit(); 
    } else {
      alert("출처를 입력해주세요!");
    }
  };
  
  return (
    <StyledModalContainer onClick={modalClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <h2>구매를 원하시면 출처를 입력하세요!</h2>
        <StyledClose onClick={modalClose}>
          <p>X</p>
        </StyledClose>
        <StyledInput>
          <input type="text" placeholder='🚷출처를 밝히시오!🚷' onChange={handleInput}/>
        </StyledInput>
        <StyledSubmit onClick={handleFormSubmit}>제출</StyledSubmit>
      </StyledModalContent>
    </StyledModalContainer>
  )
}

export default Modal
