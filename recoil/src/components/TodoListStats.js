import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatesState } from '../TodoAtoms'

const TodoListStats = () => {
    const { 
        totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            avgNum
    } = useRecoilValue(todoListStatesState)

    const formattedPercentCompleted = Math.round(avgNum * 100)
  return (
    <div>
      <li>Total Items : {totalNum}</li>
      <li>Total Completed : {totalCompletedNum}</li>
      <li>Total not Completed : {totalUncompletedNum}</li>
      <li>percentage Completed : {formattedPercentCompleted}</li>
    </div>
  )
}

export default TodoListStats
