import { useEffect, useState } from 'react'
import { StyledContainer, StyledBox, StyledModalOverlay, StyledModalContent, StyledCloseButton, StyledContent, StyledEditBtn, StyledEditProblem, StyledEditAnswer, StyledEditDescription } from './style'
import useGetProblem  from '../../hooks/useGetProblem'
import axios from 'axios'


export default function ProblemComponent() {
  const [showAnswer, setShowAnwser] = useState(false)
  const [showAnswerStates, setShowAnswerStates] = useState([]);
  const [modal, setModal] = useState(null)
  const [editProblem, setEditProblem] = useState(false)
  // const[isExpand, setIsExpand] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  
  useEffect(()=>{
    const fetchCurrentUser = async() =>{
      try {
        const response = await axios.get('http://localhost:3000/api/account/current-user',{withCredentials: true})
        console.log('response', response.data)
        setCurrentUser(response.data._id)
      } catch (error) {
        console.log('failed to get current user', error)
      }
    }
    fetchCurrentUser()
  }, [])

  console.log('current user', currentUser)
  const { problems, loading, error } = useGetProblem(currentUser)
  console.log('problems', problems)

  // if(loading){
  //   return <div>Loading...</div>
  // }

  // if(error){
  //   return <div>Error: {error}</div>
  // }
  

  useEffect(() =>{
    setShowAnswerStates(new Array(problems.length).fill(false))
    //problems의 개수에 따라 showAnswerStates 배열을 초기화
  },[problems]);

  const handleClick = (e,i) => {
    e.stopPropagation();
    setShowAnswerStates(prevStates =>{
      const newStates = [...prevStates]
      newStates[i] = !newStates[i]
      return newStates
    })
  }

  const handleModalClick = ( i) => {
    setModal(i)
  }
  
  const handleEditClick = () => {
    setEditProblem(!editProblem)
  }

  //*설명길이가 길면 20자 이상뒤로 부턴 ...으로 대체
  // const OverDescription = isExpand ?
  //   description : description?.slice(0, 20) + '...'


  return (
    <StyledBox>
      {problems.map((problem, i) => (
        <>
        <StyledContainer key={i} answerStatus={showAnswerStates[i]} onClick={()=>handleModalClick(i)}>
          <p>{problem.problem}</p>
        {showAnswerStates[i] ? (
          <h1 onClick={(e)=>handleClick(e, i)}>답 : {problem.answer}</h1>
          ) : (
            <h1 onClick={(e) =>handleClick(e, i)}>Check the answer</h1>
            )}
        </StyledContainer>
        {modal === i && (
        <DetailModal onClose={handleModalClick} onClick={handleEditClick} editProblem={editProblem} problem={problem}/>
        )}
        </>
      ))}

    </StyledBox>
  )
}

function DetailModal({ onClose, onClick, editProblem, problem }) {
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
              <StyledEditProblem>{problem.problem}</StyledEditProblem>
              <StyledEditAnswer>{problem.answer}</StyledEditAnswer>
              <StyledEditDescription>{problem.description}</StyledEditDescription>
            </StyledContent>
            <StyledEditBtn onClick={onClick}>Save</StyledEditBtn>
          </>
        ) : (
          <>
            <StyledContent>
              <p>{problem.problem}</p>
              <h2>{problem.answer}</h2>
              <p>{problem.description}</p>
            </StyledContent>
            <StyledEditBtn onClick={onClick}>Edit</StyledEditBtn>
          </>
        )}
      </StyledModalContent>
    </StyledModalOverlay>
  )
}