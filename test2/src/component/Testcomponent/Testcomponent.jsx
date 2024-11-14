import React, { useState } from 'react'
import questions from './data'

const Testcomponent = () => {
    const [start, setStart] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [result, setResult] = useState([])
    const [finished, setFinished] = useState(false)

    const handleStart = () => {
        setStart(true)
        setCurrentQuestion(0);
        setResult([]);
        setFinished(false);
    }
    // 데이터의 길이 만큼 질문을 해야함
   const handleAnswer = (value) => {
        setResult((prev) => [...prev, {questionId: questions[currentQuestion].id, answer: value}])
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion + 1)
        }else{
            // setStart(false)
            setFinished(true)
            console.log('finished')
        }
   }
   const calculateCounts = () => {
        const counts = result.reduce((acc, item) => {
            if(item.answer === "O") acc.O += 1;
            else if(item.answer === "X") acc.X += 1;
            return acc
        }, {O: 3, X: 2});
        return counts;
   }
   const counts = calculateCounts()

  return (
    <div className='h-screen bg-blue-500 flex justify-center items-center'>
            {start ? (
                finished ? (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">테스트 완료!</h2>
                        <p className="text-xl">O의 개수: {counts.O}</p>
                        <p className="text-xl">X의 개수: {counts.X}</p>
                        <button
                            onClick={handleStart}
                            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            다시 시작
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            질문 : {questions[currentQuestion].question}
                        </h2>
                        <div className='flex justify-center gap-10'>
                            <button
                                onClick={() => handleAnswer("O")}
                                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                            >
                                yes
                            </button>
                            <button
                                onClick={() => handleAnswer("X")}
                                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                            >
                                no
                            </button>
                        </div>
                    </div>
                )
            ) : (
                <div className="text-center">
                    <button
                        onClick={handleStart}
                        className="text-2xl px-8 py-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
                    >
                        start
                    </button>
                </div>
            )}
        </div>
  )
}

export default Testcomponent
