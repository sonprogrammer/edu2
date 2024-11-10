import React from 'react'

const Mbticomponent = () => {

    const handleStart = () => {
        
    }
  return (
    <div className='h-screen bg-gray-500 flex justify-center items-center '>
        <div className='border rounded-xl w-[50%] h-[70%] flex flex-col justify-around'>
            <h1 className='text-center text-[37px] font-bold'>Let's do the MBTI Test!</h1>
            <h1 className='text-center text-[100px] font-bold'>MBTI</h1>
            <div className='flex justify-center '>
                <button 
                    onClick={handleStart}
                className='text-[37px] px-7 rounded-xl hover:bg-blue-400 bg-blue-500 '>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Mbticomponent



// import React, { useState } from 'react';


// // 질문 데이터
// const questions = [
//   {
//     id: 1,
//     question: "사람들과 함께 있는 것이 에너지를 충전해 준다.",
//     options: [
//       { label: "그렇다", value: "E" },
//       { label: "아니다", value: "I" }
//     ]
//   },
//   {
//     id: 2,
//     question: "세부적인 계획을 세우는 것이 중요하다.",
//     options: [
//       { label: "그렇다", value: "S" },
//       { label: "아니다", value: "N" }
//     ]
//   },
//   {
//     id: 3,
//     question: "기본적인 규칙이나 원칙을 지키는 것이 중요하다.",
//     options: [
//       { label: "그렇다", value: "T" },
//       { label: "아니다", value: "F" }
//     ]
//   },
//   {
//     id: 4,
//     question: "마지막 순간까지 유연하게 변경하는 것이 좋다.",
//     options: [
//       { label: "그렇다", value: "J" },
//       { label: "아니다", value: "P" }
//     ]
//   }
// ];

// const MBTIQuiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState("");
//   const [quizStarted, setQuizStarted] = useState(false);

//   // 답변 저장 함수
//   const handleAnswerChange = (questionId, value) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: value
//     }));
//   };

//   // 다음 질문으로 이동
//   const goToNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       calculateResult();
//     }
//   };

//   // 결과 계산 함수
//   const calculateResult = () => {
//     const mbti = [
//       answers[1] || "",
//       answers[2] || "",
//       answers[3] || "",
//       answers[4] || ""
//     ].join("");

//     setResult(mbti);
//   };

//   // 퀴즈 시작 함수
//   const startQuiz = () => {
//     setQuizStarted(true);
//   };

//   return (
//     <div className="quiz-container">
//       {!quizStarted ? (
//         <button className="start-btn" onClick={startQuiz}>
//           퀴즈 시작
//         </button>
//       ) : (
//         <div className="quiz-content">
//           <h1>MBTI 테스트</h1>
//           <div className="question-container">
//             <p>{questions[currentQuestion].question}</p>
//             {questions[currentQuestion].options.map((option) => (
//               <label key={option.value}>
//                 <input
//                   type="radio"
//                   name={`question-${questions[currentQuestion].id}`}
//                   value={option.value}
//                   onChange={() => handleAnswerChange(questions[currentQuestion].id, option.value)}
//                   checked={answers[questions[currentQuestion].id] === option.value}
//                 />
//                 {option.label}
//               </label>
//             ))}
//           </div>
//           <button className="next-btn" onClick={goToNextQuestion}>
//             {currentQuestion < questions.length - 1 ? "다음 질문" : "결과 보기"}
//           </button>
//         </div>
//       )}
//       {result && <h2>당신의 MBTI는: {result}</h2>}
//     </div>
//   );
// };

// export default MBTIQuiz;
