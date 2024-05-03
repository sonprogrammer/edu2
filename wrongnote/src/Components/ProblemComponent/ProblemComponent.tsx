import { useState } from 'react'
import { StyledContainer, StyledBox, StyledModalOverlay, StyledModalContent, StyledCloseButton, StyledContent, StyledEditBtn, StyledEditProblem, StyledEditAnswer, StyledEditDescription } from './style'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { setShowAnwser } from '../../store'
// import axios from 'axios'


export default function ProblemComponent() {
  const [showAnswer, setShowAnwser] = useState(false)
  const [showAnswer2, setShowAnwser2] = useState(false)
  const [modal, setModal] = useState(false)
  const [editProblem, setEditProblem] = useState(false)
  // const[isExpand, setIsExpand] = useState(false)

  const handleClick = (e) => {
    setShowAnwser(!showAnswer)
    e.stopPropagation()
  }
  const handleClick2 = () => {
    setShowAnwser2(!showAnswer2)
  }

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleEditClick = () => {
    setEditProblem(!editProblem)
  }

  //*설명길이가 길면 20자 이상뒤로 부턴 ...으로 대체
  // const OverDescription = isExpand ?
  //   description : description?.slice(0, 20) + '...'


  return (
    <StyledBox>
      <StyledContainer answer={showAnswer} onClick={handleModalClick}>
        <p>내 출생연도와 내 이름과 내 나이는?</p>
        {showAnswer ? (
          <h1 onClick={handleClick}>답 : 1997.01.26 손영진</h1>
        ) : (
          <h1 onClick={handleClick}>Check the answer</h1>
        )}
      </StyledContainer>
      {modal && (
        <DetailModal onClose={handleModalClick} onClick={handleEditClick} editProblem={editProblem} />
      )}
      <StyledContainer answer={showAnswer2} onClick={handleModalClick}>
        <p>내 출생연도와 내 이름과 내 나이는?</p>
        {showAnswer2 ? (
          <h1 onClick={handleClick2}>답 : 1997.01.26 손영진</h1>
        ) :
          (
            <h1 onClick={handleClick2}>Check the answer</h1>
          )
        }
      </StyledContainer>

    </StyledBox>
  )
}

function DetailModal({ onClose, onClick, editProblem }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  }
  return (
    <StyledModalOverlay onClick={onClose}>
      <StyledModalContent onClick={stopPropagation}>
        <StyledCloseButton onClick={onClose}>Close</StyledCloseButton>
        
        {editProblem ? (
          <>
            <StyledContent>
              <StyledEditProblem>문제</StyledEditProblem>
              <StyledEditAnswer>답</StyledEditAnswer>
              <StyledEditDescription>해설</StyledEditDescription>
            </StyledContent>
            <StyledEditBtn onClick={onClick}>Save</StyledEditBtn>
          </>
        ) : (
          <>
            <StyledContent>
              <p>내 출생연도와 내 이름과 내 나이는?</p>
              <h2>답 : 1997.01.26 손영진</h2>
              <p>description</p>
            </StyledContent>
            <StyledEditBtn onClick={onClick}>Edit</StyledEditBtn>
          </>
        )}
      </StyledModalContent>
    </StyledModalOverlay>
  )
}