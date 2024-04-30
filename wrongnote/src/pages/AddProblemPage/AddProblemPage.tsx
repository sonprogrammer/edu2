import React from 'react'

export default function AddProblemPage() {
  return (
    <div>
        <input type="text" placeholder='문제를 입력하세요' />
        <input type="answer" placeholder='정답' />
        <input type="description" placeholder='해설' />
    </div>
  )
}
