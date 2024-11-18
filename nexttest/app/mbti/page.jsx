'use client'

import React, { useState } from 'react'
import data from './data'
import questions from './data'

const page = () => {
  const [start, setStart] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({
    O: 0,
    X: 0
  })
  const [result, setResult] = useState("")


  const clickStart = () => {
    setStart(true)
    setCurrentQuestion(0)
    setAnswers({"O": 0, "X": 0})
    setResult("")

  }

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [value]: prev[value] + 1
    }))
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      showResult()
    }
  }

  const showResult = () => {
    const OX = `${answers.O > answers.X ? "you are yes man" : " you are X man"}`
    setResult(OX)
  }



  return (
    <div className='bg-red-300 h-full flex justify-center items-center'>
      <div
        className='flex flex-col justify-around items-center text-center border-2 p-7 w-[50%] h-[70%] rounded-xl'>
        {start ? (
          result ? (
            <>
              <h1 className='text-2xl text-black'>you are type of {result}</h1>
              <button onClick={clickStart}>try again</button>
            </>
          ): (
              <div>
        <h2>{data[currentQuestion].question}</h2>
      <p>{data[currentQuestion].id}번 문제</p>
      <div className='flex justify-cetner gap-5'>
        {data[currentQuestion].options.map((option, i) => (
          <button onClick={() => {handleAnswer(option.value)}} key={i}
            className='gap-10 rounded-xl py-2 px-4 bg-blue-500'
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
    ): (
  <>
    <h1 className='text-[77px]'>mbti text</h1>
    <img src="next.svg" alt="logo" className='w-[170px]' />
    <div className='flex justify-center mt-8'>
      <button onClick={clickStart} className='bg-green-300 text-blue-600 px-7 p-3 rounded-xl text-xl font-bold hover:opacity-90	'>start</button>
    </div>
  </>
)}
  
    </div >
    </div >
  )
}

export default page
